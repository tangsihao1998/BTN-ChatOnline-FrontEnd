import React, { Component } from 'react'
// import Row from 'react-bootstrap/Row'
import './InboxPeople.scss'

import { connect } from 'react-redux';
import { services } from './../../feathers';

import selectors from './../../redux/selectors';
import actions from './../../redux/actions';

// import components
import ChatRoom from './../ChatRoom';
import AddFriendModal from './../AddFriendModal';
// import material-UI
import { IconButton } from '@material-ui/core';
import { PersonAdd, GroupAdd } from '@material-ui/icons';

class InboxPeople extends Component {
    constructor(props) {
        super(props);
        this.state = {
            roomFilter: null,
            rooms: [],
            addFriendModal: false,
        };
    }

    async componentWillReceiveProps(nextProps) {
        if (this.props.roomTypeFilter !== nextProps.roomTypeFilter) {
            await this.props.getRooms(nextProps.roomTypeFilter);
            this.setState({
                rooms: this.props.currentRoomsQuery,
            });
        }
    };
    
    chooseRoom = (roomId) => {
        this.props.setRoomId(roomId);
    }

    // Open and close Add friend modal
    openAddFriendModal = (e) => {
        e.preventDefault();
        this.setState({addFriendModal: true})
    }

    handleClose = () => {
        this.setState({addFriendModal: false})
    };

    // Open and close add group modal
    addGroupToCreateRoom = (e) => {
        e.preventDefault();
    }

    render() {
        const { rooms, addFriendModal } = this.state;
        return (
            <div className="List__Container">
                <AddFriendModal open={addFriendModal} handleClose={this.handleClose}/>
                <div className="Container__Title">
                    <IconButton
						edge="start"
						className="Icon__add"
						color="primary"
						aria-label="Person"
						onClick={this.openAddFriendModal}
					>
						<PersonAdd />
					</IconButton>
                    <IconButton
						edge="start"
						className="Icon__add"
						color="primary"
						aria-label="Person"
						onClick={this.addGroupToCreateRoom}
					>
						<GroupAdd />
					</IconButton>
                </div>
                <div className="List__Room">
                    {
                        rooms.map((room, i) => {
                            const newestMessage = room.messages[0] ? room.messages[0].content : null;
                            const dateTime = room.messages[0] ? room.messages[0].updatedAt : null;
                            return <ChatRoom
                                key={room._id}
                                name={room.name}
                                dateTime={dateTime}
                                newestMessage={newestMessage}
                                onClick={() => this.chooseRoom(room._id)}
                            />
                        })
                    }
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    state,
    currentUser: selectors.getCurrentUser(state),
    currentRoomsQuery: selectors.getCurrentRoomsQuery(state),
    roomTypeFilter: selectors.getRoomTypeFilter(state),
});

const mapDispatchToProps = (dispatch) => ({
    dispatch,
    setRoomId: (roomId) => dispatch(actions.setRoomId(roomId)),
    getRooms: async (typeFilter) => {
        const options = {};
        if (typeFilter) options.query = {
            type: typeFilter,
        };
        await dispatch(services.rooms.find(options));
    },
    getNextRooms: async (typeFilter, roomCount) => {
        const options = {
            query: {
                skip: roomCount,
            }
        };
        if (typeFilter) options.query = {
            ...options.query,
            type: typeFilter,
        };
        await dispatch(services.rooms.find(options));
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(InboxPeople);
