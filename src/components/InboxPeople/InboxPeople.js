import React, { Component } from 'react'
// import Row from 'react-bootstrap/Row'
import './InboxPeople.scss'

import { connect } from 'react-redux';
import { client, services } from './../../feathers';

import selectors from './../../redux/selectors';
import actions from './../../redux/actions';

// import components
import ChatRoom from './../ChatRoom';
import AddFriendModal from './../AddFriendModal';
import AddGroupModal from './../AddGroupModal';
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
            addGroupModal: false,
        };
    }

    async componentDidMount() {
        // Set up event listeners
		const roomService = client.service('rooms');
		roomService.on('created', (message, context) => {
			// Push new room to state
		});
		roomService.on('patched', (message, context) => {
			// Update room
		});
		roomService.on('updated', (message, context) => {
			// Update room
		});
		roomService.on('deleted', (message, context) => {
			// Delete room
		});
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
    openAddGroupModal = (e) => {
        e.preventDefault();
        this.setState({addGroupModal: true})
    }

    handleCloseGroupModal = () => {
        this.setState({addGroupModal: false})
    };

    render() {
        const { rooms, addFriendModal, addGroupModal } = this.state;
        return (
            <div className="List__Container">
                <AddFriendModal open={addFriendModal} handleClose={this.handleClose}/>
                <AddGroupModal open={addGroupModal} handleClose={this.handleCloseGroupModal}/>
                
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
						onClick={this.openAddGroupModal}
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
