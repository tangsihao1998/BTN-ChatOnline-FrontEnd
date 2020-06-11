import React, { Component } from 'react';

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
	const { open, handleClose, email, handleTextChange, SubmitSearch, usersFound, AddFriend } = props;
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
						<div className="AddFriendModal__content">
							<h2 className="Content__Title">Add Friend Modal</h2>
							{/* Search friend */}
							<div className="Search__form">
								<input
									className="Input__style"
									type="email"
									placeholder="Enter your friend email..."
									name="email"
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
									<div className="ShowInfo__search">
										<img
											className="User__Image"
											src={process.env.PUBLIC_URL + '/images/user.png'}
											alt="User"
										/>
										<div className="User__name">
											{user.name}
										</div>
										<IconButton
											id={user._id}
											edge="start"
											className="User__add"
											color="primary"
											aria-label="Add user"
											onClick={AddFriend}
										>
											<Add id={user._id}/>
										</IconButton>
									</div>
								))
							}
						</div>
					</div>
				</Fade>
			</Modal>
		</React.Fragment>
	);
};

// Khai báo class Modal để thực hiện các hành động
class AddFriendModal extends Component {
	constructor(props) {
		super(props);
		this.state = {
			email: '',
			usersFound: [],
		};
	}

	handleTextChange = (e) => {
		const { name, value } = e.target;
		this.setState({ [name]: value });
	};

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
	};

	AddFriend = async (e) => {
		try {
			// e.preventDefault();
			const userIdToAdd = e.target.id; // Get userIdToAdd from list of usersFound
			// Thực hiện hành động add friend và end
			// userFound sẽ thay đổi khi người dùng search người khác
			const currentUserId = this.props.currentUser._id;
			// Tạo friend cho cả 2 users
			await this.props.addToFriendlist(currentUserId, userIdToAdd);
			await this.props.addToFriendlist(userIdToAdd, currentUserId);
			
			// Tạo roomId mới
			const name = 'newRoom';
			const type = 'direct';

			await this.props.createANewRoom(name, type);

			const {roomData} = this.props;
			// add thêm users vào room
			await this.props.addToRoom(roomData._id, userIdToAdd);
		} catch (error) {
      console.log("AddFriendModal -> AddFriend -> error", error)
		}
	};

	render() {
		const { open, handleClose } = this.props;
		return (
			<React.Fragment>
				<CustomModal
					open={open}
					handleClose={handleClose}
					email={this.state.email}
					handleTextChange={this.handleTextChange}
					SubmitSearch={this.SubmitSearch}
					usersFound={this.state.usersFound}
					AddFriend={this.AddFriend}
				/>
			</React.Fragment>
		);
	}
}

const mapStateToProps = (state) => ({
	state,
	currentUser: selectors.getCurrentUser(state),
  currentRoomsQuery: selectors.getCurrentRoomsQuery(state),
  currentUsersQuery: selectors.getCurrentUsersQuery(state),
	roomTypeFilter: selectors.getRoomTypeFilter(state),
	roomId: selectors.getRoomId(state),
	roomData: selectors.getRoomData(state),
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
	addToFriendlist: async (currentUserId, friendUserId) => {
		await dispatch(
			services.users.patch(currentUserId, {
				$addToSet: {
					friends: friendUserId,
				},
			})
		);
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
	createANewRoom: async (name, type) => {
		await dispatch(
			services.rooms.create({name: name, type: type, members: [], messages: []})
		);
	},
});

export default connect(mapStateToProps, mapDispatchToProps)(AddFriendModal);
