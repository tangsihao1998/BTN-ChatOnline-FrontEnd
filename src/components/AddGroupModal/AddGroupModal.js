import React, { Component } from 'react'

import { makeStyles } from '@material-ui/core/styles';

// import material-UI
import { Modal, Fade, IconButton } from '@material-ui/core';
import { Search, Add, Send } from '@material-ui/icons';

import { connect } from 'react-redux';
import { services } from './../../feathers';

import selectors from './../../redux/selectors';
import actions from './../../redux/actions';

import './AddGroupModal.scss';

const useStyles = makeStyles((theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

const CustomModal = (props) => {
  const classes = useStyles();
  const { 
    open, 
    handleClose, 
    roomName,
    SubmitRoomName,
    email, 
    handleTextChange, 
    SubmitSearch, 
    usersFound, 
    AddFriendToRoom,
    listUserAdd, 
  } = props;

  return (
    <React.Fragment>
      <Modal
        className={classes.modal}
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        <Fade in={open}>
        <div className={classes.paper}>
          <div className='AddGroupModal__content'>
            <h2 className="Content__Title">Add Group Modal</h2>

            {/* tạo tên cho Room */}
            <div className='Room__form'>
              <input 
                className='Input__style' 
                type="text" 
                placeholder="Enter conversation's name..." 
                name='roomName'
                onChange={handleTextChange} 
                value={roomName}
                required
              />
              <IconButton
                edge="start"
                className="Icon__send"
                color="primary"
                aria-label="send"
                onClick={SubmitRoomName}
              >
                <Send />
              </IconButton>
            </div>

            {/* Search friend */}
            <div className='Search__form'>
              <input 
                className='Input__style' 
                type="email" 
                placeholder="Enter your friend email..." 
                name='email'
                onChange={handleTextChange} 
                value={email}
                required
              />
              <IconButton
                edge="start"
                className="Icon__search"
                color="primary"
                aria-label="search"
                onClick={SubmitSearch}
              >
                <Search />
              </IconButton>
            </div>
            
            {/* Show thông tin search được */}
            {
              usersFound.map(user => (
                <div className='ShowInfo__search'>
                  <img className="User__Image" src={process.env.PUBLIC_URL + '/images/user.png'} alt="User" />
                  <div className='User__name'>
                    {user.name}
                  </div>
                  <IconButton
                    edge="start"
                    className="User__add"
                    color="primary"
                    aria-label="Add user"
                    onClick={AddFriendToRoom}
                    id={user._id}
                  >
                    <Add id={user._id}/>
                  </IconButton>
                </div>
              ))
            }
          

            {/* Ở đây cho chạy listUserAdd.map() để render ra các user có trong room*/}

            {/* {listUserAdd && (
              
            )} */}
          </div>
        </div>
      </Fade>
      </Modal>
    </React.Fragment>
  )
}

class AddGroupModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      roomName: '',
      email: '',
      usersFound: [],
      listUserAdd: '',
    }
  }

	handleTextChange = (e) => {
		const { name, value } = e.target;
		this.setState({ [name]: value });
	};

  SubmitRoomName = (e) => {
    e.preventDefault();
    // Hành động submit tên Room
    // tên Room
    const { roomName } = this.state;
    
  }

  SubmitSearch = async (e) => {
    // Thực hiện hành động Search
		e.preventDefault();
    const { email } = this.state;
		// Gọi xuống db check xem có người dùng đó ko rồi trả về setState cho user để hiển thị
		// Lấy object user tìm được và setState userFound
    const users = await this.props.findUsers(email);
		this.setState({
			usersFound: this.props.currentUsersQuery,
		});
  }

  AddFriendToRoom = async (e) => {
    // Thực hiện hành động add friend
    const userIdToAdd = e.target.id;// Get userIdToAdd from list of usersFound
    console.log("AddGroupModal -> AddFriendToRoom -> userIdToAdd", userIdToAdd)
    const { roomId } = this.props;
    // sau khi gọi back-end và add bạn vào room thì front-end sẽ push user được add vào biến state listUserAdd để render
    // listUserAdd là Array[Object]
    await this.props.addToRoom(roomId, userIdToAdd);
  }
  
  render() {
    const { open, handleClose } = this.props;
    return (
      <React.Fragment>
        <CustomModal 
          open={open}
          handleClose={handleClose}
          roomName={this.state.roomName}
          SubmitRoomName={this.SubmitRoomName}
          email={this.state.email}
          handleTextChange={this.handleTextChange}
          SubmitSearch={this.SubmitSearch}
          usersFound={this.state.usersFound}
          AddFriendToRoom={this.AddFriendToRoom}
          listUserAdd={this.state.listUserAdd}
        />
      </React.Fragment>
    )
  }
}

const mapStateToProps = (state) => ({
	state,
	currentUser: selectors.getCurrentUser(state),
  currentRoomsQuery: selectors.getCurrentRoomsQuery(state),
  currentUsersQuery: selectors.getCurrentUsersQuery(state),
  roomTypeFilter: selectors.getRoomTypeFilter(state),
  roomId: selectors.getRoomId(state),
});

const mapDispatchToProps = (dispatch) => ({
	dispatch,
	findUsers: async (email) => {
		const options = {
			query: {
				$or: [ { email: { $search: email } }, { name: { $search: email } } ],
			},
		};
		await dispatch(services.users.find(options));
	},
	addToRoom: async (roomId, userId) => {
		await dispatch(
			services.rooms.patch(roomId, {
				$addToSet: {
					members: userId,
				},
			})
		);
	},
});

export default connect(mapStateToProps, mapDispatchToProps)(AddGroupModal);
