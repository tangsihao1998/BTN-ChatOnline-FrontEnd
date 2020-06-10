import React, { Component } from 'react';

import './Login.scss';

import { connect } from 'react-redux';
import actions from './../../redux/actions';
import selectors from './../../redux/selectors';

import client from '../../feathers';

import { Link } from 'react-router-dom';

// import material-UI
import { IconButton } from '@material-ui/core';
import { ArrowDropDown } from '@material-ui/icons';

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
		const { infoshow } = this.state;
		if (infoshow) {
			this.setState({ infoshow: false });
		} else {
			this.setState({ infoshow: true });
		}
	};

	// Handle Log Out Event
	handleLogoutEvent = (e) => {
		e.preventDefault();
		this.setState({ infoshow: false });
		client.logout();
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
			<div className='AuthenComponent'>
				{/* Content In NAVBAR before LOGIN */}
				{ currentUser ? (
					// Content In NAVBAR after LOGIN 
					<div className='User__form'>	
						<div className='User__info' onClick={this.HandleUserSetting}>
							<img
								src={process.env.PUBLIC_URL + '/images/user.png'}
								className="User__img"
								alt="user-images"
							/>
							<div className='User__name'>{currentUser.name}</div>
							<IconButton edge="start" className="Icon__dropdown" color="inherit" aria-label="menu">
								<ArrowDropDown />
							</IconButton>
						</div>
						
						{ infoshow ? (
							<div className="User__navigate">
								<div className="User__settings">
									<Link className="Settings__link" to="/profile" >
										Thông Tin Tài Khoản
									</Link>
								</div>
								<hr/>
								<div className="User__settings" onClick={this.handleLogoutEvent}>
									Đăng Xuất
								</div>
							</div>): (<div/>) 
						}
					</div>
					) : (
						<div className='Button__component'>
							<Link className="Register" to='/authentication/register'>
								Register
							</Link>
							<Link className="Login" to='/authentication/signin'>
								Log In
							</Link>
						</div>
					) 
				}
			</div>
		);
	}
}

const mapDispatchToProps = (dispatch) => ({
	dispatch,
	signOutUser: () => dispatch(actions.signOutUser()),
});

const mapStateToProps = (state) => ({
	currentUser: selectors.getCurrentUser(state),
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
