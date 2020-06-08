import React, { Component } from 'react';

import './Login.scss';

import { connect } from 'react-redux';
import actions from './../../redux/actions';
import selectors from './../../redux/selectors';

import client from '../../feathers';

import { Link } from 'react-router-dom';

class Login extends Component {
	// Constructor of Component
	constructor(props) {
		super(props);
		this.state = {
			infoshow: false,
		};
	}
	
	// USER-SETTINGS SHOW
	HandleUserSetting = () => {
		if (this.state.infoshow === false) {
			this.setState({ infoshow: true });
		} else {
			this.setState({ infoshow: false });
		}
	};

	// Handle Log Out Event
	handleLogoutEvent = (e) => {
		e.preventDefault();
		this.setState({ infoshow: false });
		client.logout();
		// localStorage.removeItem('jwtToken');
		// Axios.setAuthToken(false);
		this.props.signOutUser();
		this.props.history.push('/');
	};

	render() {
		// Declare Variables
		// Props
		const { currentUser } = this.props;
		// State
		const { infoshow } = this.state;
		//-----------------------------------------------------------
		return (
			<div>
				{/* Content In NAVBAR before LOGIN */}
				<div className={`Button__component ${currentUser && 'disable'}`}>
					<Link className="Register" to='/authentication/register'>
						Register
					</Link>
					<Link className="Login" to='/authentication/signin'>
						Log In
					</Link>
				</div>

				{/* Content In NAVBAR after LOGIN */}
				<div className={`User-form ${currentUser && 'enable'}`}>
					{currentUser && (
						<img
							src={process.env.PUBLIC_URL + currentUser.image}
							className="userIMG"
							alt="user-images"
							onClick={this.HandleUserSetting}
						/>
					)}
					<div id={`Info${(infoshow && 'Show') || ''}`} className="User-Info">
						<div>
							<Link to="/profile" className="User__settings">
								Account setting
							</Link>
						</div>
						<div className="User__logout" onClick={this.handleLogoutEvent}>
							Logout
						</div>
					</div>
				</div>
			</div>
		);
	}
}

const mapDispatchToProps = (dispatch) => ({
	dispatch,
	setCurrentUser: (currentUser) => dispatch(actions.setCurrentUser(currentUser)),
	signOutUser: () => dispatch(actions.signOutUser()),
});

const mapStateToProps = (state) => ({
	currentUser: selectors.getCurrentUser(state),
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
