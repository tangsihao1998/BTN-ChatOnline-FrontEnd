import React, { Component } from 'react'

import { makeStyles } from '@material-ui/core/styles';

// import material-UI
import { Modal, Fade, IconButton } from '@material-ui/core';
import { Search, Add, Send } from '@material-ui/icons';

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
    name, 
    handleTextChange, 
    SubmitSearch, 
    userFound, 
    AddFriendToRoom 
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
                type="text" 
                placeholder="Enter friend name..." 
                name='name'
                onChange={handleTextChange} 
                value={name}
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
            <div className='ShowInfo__search'>
              <img className="User__Image" src={process.env.PUBLIC_URL + '/images/user.png'} alt="User" />
              <div className='User__name'>{userFound}</div>
              <IconButton
                edge="start"
                className="User__add"
                color="primary"
                aria-label="Add user"
                onClick={AddFriendToRoom}
              >
                <Add />
              </IconButton>
            </div>

            {/* Ở đây cho chạy user.map() để render ra các user có trong room*/}

            {/* {userFound && (
              
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
      name: '',
      userFound: '',
    }
  }

	handleTextChange = (e) => {
		const { name, value } = e.target;
		this.setState({ [name]: value });
	};

  SubmitRoomName = (e) => {
    e.preventDefault();
    // Hành động submit tên Room

  }

  SubmitSearch = (e) => {
    // Thực hiện hành động Search
    e.preventDefault();
    // Gọi xuống db check xem có người dùng đó ko rồi trả về setState cho user để hiển thị
    // setState tên cho userFound
    // Lúc này user là một mảng 
  }

  AddFriendToRoom = (e) => {
    // Thực hiện hành động add friend
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
          name={this.state.name}
          handleTextChange={this.handleTextChange}
          SubmitSearch={this.SubmitSearch}
          userFound={this.state.userFound}
          AddFriendToRoom={this.AddFriendToRoom}
        />
      </React.Fragment>
    )
  }
}

export default AddGroupModal;