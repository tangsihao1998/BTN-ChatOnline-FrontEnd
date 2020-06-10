import React, { Component } from 'react'

import { makeStyles } from '@material-ui/core/styles';

// import material-UI
import { Modal, Fade, IconButton } from '@material-ui/core';
import { Search, Add } from '@material-ui/icons';

import { connect } from 'react-redux';
import { services } from './../../feathers';

import selectors from './../../redux/selectors';
import actions from './../../redux/actions';

import './AddFriendModal.scss';

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
  const { open, handleClose, name, handleTextChange, SubmitSearch, userFound, AddFriend } = props;
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
          <div className='AddFriendModal__content'>
            <h2 className="Content__Title">Add Friend Modal</h2>
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
                onClick={AddFriend}
              >
                <Add />
              </IconButton>
            </div>
            {/* {userFound && (
              
            )} */}
          </div>
        </div>
      </Fade>
      </Modal>
    </React.Fragment>
  )
}

// Khai báo class Modal để thực hiện các hành động
class AddFriendModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      userFound: '',
    }
  }

	handleTextChange = (e) => {
		const { name, value } = e.target;
		this.setState({ [name]: value });
	};

  SubmitSearch = (e) => {
    // Thực hiện hành động Search
    e.preventDefault();
    // Gọi xuống db check xem có người dùng đó ko rồi trả về setState cho user để hiển thị
    // setState tên cho userFound
  }

  AddFriend = (e) => {
    // Thực hiện hành động add friend
  }
  
  render() {
    const { open, handleClose } = this.props;
    return (
      <React.Fragment>
        <CustomModal 
          open={open}
          handleClose={handleClose}
          name={this.state.name}
          handleTextChange={this.handleTextChange}
          SubmitSearch={this.SubmitSearch}
          userFound={this.state.userFound}
          AddFriend={this.AddFriend}
        />
      </React.Fragment>
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
    findUsers: async (name) => {
      const options = {
        query: {
          $or: [
            { email: { $search: name }},
            { name: {$search: name}}
          ]
        }
      }

      await dispatch(services.user.find(options));
    },
});

export default connect(mapStateToProps, mapDispatchToProps)(AddFriendModal);