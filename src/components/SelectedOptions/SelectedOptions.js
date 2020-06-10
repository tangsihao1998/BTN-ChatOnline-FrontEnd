import React, { Component } from 'react'

import './SelectedOptions.scss';

import { connect } from 'react-redux';
import { services } from './../../feathers';

import selectors from './../../redux/selectors';

// import material-UI
import { IconButton } from '@material-ui/core';
import { Home, Group, Person, Shuffle} from '@material-ui/icons';

class SelectedOptions extends Component {
    constructor(props) {
        super(props);
        this.state = {
            roomFilter: null,
            rooms: []
        };
    }

    async componentDidMount() {
        await this.props.getRooms(this.state.roomFilter);
        this.setState({
            rooms: this.props.currentRoomsQuery,
        });
    };
    
    // Này t test qua đặt name cho khung click rồi, nhưng mà iconbutton thì lấy được name nhưng thằng person thì không
    // Nên đôi khi khi click sẽ ra undefined nên t tách ra 3 hàm để chia type chat
    personType = (e) => {
        this.setState({
            roomFilter: 'direct',
        });
    }
    groupType = (e) => {
        this.setState({
            roomFilter: 'group',
        });
    }
    randomType = (e) => {
        this.setState({
            roomFilter: 'random',
        });
    }

    render() {
        return (
            <div className="Selected_Options">
                <div className="Group__icon"> 
                    {/* import button chat with a friend */}
                    <IconButton edge="start" className="Options__icon" color="primary" aria-label="Person" onClick={this.personType}>
                        <Home />
                    </IconButton>
                    {/* import button chat with a friend */}
                    <IconButton edge="start" className="Options__icon" color="primary" aria-label="Person" onClick={this.personType}>
                        <Person />
                    </IconButton>
                    {/* import button chat group */}
                    <IconButton edge="start" className="Options__icon" color="primary" aria-label="Group" onClick={this.groupType}>
                        <Group />
                    </IconButton>
                    {/* import button chat with anonymous user */}
                    <IconButton edge="start" className="Options__icon" color="primary" aria-label="Random" onClick={this.randomType}>
                        <Shuffle />
                    </IconButton>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    state,
    currentUser: selectors.getCurrentUser(state),
    currentRoomsQuery: selectors.getCurrentRoomsQuery(state),
}); 

const mapDispatchToProps = (dispatch) => ({
  dispatch,
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

export default connect(mapStateToProps, mapDispatchToProps)(SelectedOptions);