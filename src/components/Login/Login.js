import React, { Component } from 'react';

import './Login.scss';

import { connect } from 'react-redux';
import actions from './../../redux/actions';
import selectors from './../../redux/selectors';

import client from '../../feathers';
import Axios from './../../axios';
import jwt_decode from 'jwt-decode';

import ForgotPasswordForm from './../ForgotPasswordForm';

import LoginForm from './../LoginForm';
import RegisterForm from './../RegisterForm';

import { Link } from 'react-router-dom';

class Login extends Component {
	// Constructor of Component
	constructor(props) {
		super(props);
		this.state = {
			forgotshow: false,
			resshow: false,
			loginshow: false,
			infoshow: false,
			username: '',
			email: '',
			password: '',
			errors: '',
			phone: '',
		};
	}

	// Handle Input Text
	handleTextChange = (e) => {
		const { name, value } = e.target;
		this.setState({ [name]: value });
	};
	//--------------------------------------------------------------------------
	// Handle Login Modal Show OR Close
	handleLoginShow = () => {
		if (this.state.loginshow === true) {
			this.setState({
				loginshow: false,
				email: '',
				password: '',
				errors: '',
			});
		} else {
			this.setState({
				loginshow: true,
				errors: '',
			});
		}
	};
	//------------------------------------------------------------------------------
	// Handle Register Modal Show OR Close
	handleResShow = () => {
		if (this.state.resshow === false) {
			this.setState({
				resshow: true,
				errors: '',
			});
		} else {
			this.setState({
				resshow: false,
				username: '',
				email: '',
				password: '',
				errors: '',
			});
		}
	};
	//------------------------------------------------------------------------------
	//Handle Forgot Password Modal Show OR CLOSE
	handleForgotShow = () => {
		if (this.state.forgotshow === true) {
			this.setState({
				forgotshow: false,
				errors: '',
			});
		}
	};
	//------------------------------------------------------------------------------
	// Change Modal With Button
	HandleLogtoRes = () => {
		this.setState({
			resshow: true,
			loginshow: false,
			email: '',
			password: '',
			errors: '',
		});
	};
	HandleRestoLog = () => {
		this.setState({
			resshow: false,
			loginshow: true,
			username: '',
			email: '',
			password: '',
			errors: '',
		});
	};
	HandleLogtoForgot = () => {
		this.setState({
			loginshow: false,
			forgotshow: true,
			email: '',
			password: '',
			errors: '',
		});
	};
	HandleForgottoLog = () => {
		this.setState({
			loginshow: true,
			forgotshow: false,
			email: '',
			errors: '',
		});
	};
	//-----------------------------------------------------------------------------------------------------
	// USER-SETTINGS SHOW
	HandleUserSetting = () => {
		if (this.state.infoshow === false) {
			this.setState({
				infoshow: true,
			});
		} else {
			this.setState({
				infoshow: false,
			});
		}
	};

	// Handle EVENT
	// Handle Register Event
	handleRegister = (e) => {
		e.preventDefault();
		const { setCurrentUser, setError } = this.props;
		const user = {
			name: this.state.username,
			email: this.state.email,
			password: this.state.password,
			phone: this.state.phone,
		};
		Axios.api
			.post('/user/register', user)
			.then((res) => {
				const userlogin = {
					email: res.data.email,
					password: res.data.password,
				};

				Axios.api
					.post('/user/login', userlogin)
					.then((res) => {
						// Save Token to Local Storage And Send state for modal
						const { token } = res.data;
						localStorage.setItem('jwtToken', token);
						Axios.setAuthToken(token);
						const decoded = jwt_decode(token);
						setCurrentUser(decoded);
					})
					.catch((err) => {
						setError(err);
					});
			})
			.catch((err) => {
				setError(err);
			});
	};

	// Handle Log In Event
	handleLogIn = async (e) => {
		e.preventDefault();
		const { setCurrentUser, setError } = this.props;
		try {
			const result = await client.authenticate({
				strategy: 'local',
				email: this.state.email,
				password: this.state.password,
			});
			setCurrentUser(result.user);
		} catch (err) {
			if (err.code === 401) {
				// TODO: show error in login form
				alert('Wrong email/password combination');
			} else {
				alert('An unknown error has occured');
			}
		}
		// const user = {
		// 	email: this.state.email,
		// 	password: this.state.password,
		// };
		// Axios.api
		// 	.post('/user/login', user)
		// 	.then((res) => {
		// 		// Save Token to Local Storage And Send state for modal
		// 		const { token } = res.data;
		// 		localStorage.setItem('jwtToken', token);
		// 		Axios.setAuthToken(token);
		// 		const decoded = jwt_decode(token);
		// 		setCurrentUser(decoded);
		// 	})
		// 	.catch((err) => {
		// 		setError(err);
		// 	});
	};

	// Handle Log Out Event
	handleLogoutEvent = (e) => {
		e.preventDefault();
		this.setState({
			infoshow: false,
		});
		client.logout();
		// localStorage.removeItem('jwtToken');
		// Axios.setAuthToken(false);
		this.props.signOutUser();
		this.props.history.push('/');
	};

	componentWillReceiveProps(nextProps) {
		if (nextProps) {
			this.setState({
				errors: nextProps.errors,
			});
		}
	}

	componentDidUpdate(prevProps) {
		if (this.props.currentUser !== prevProps.currentUser) {
			this.setState({
				username: '',
				email: '',
				password: '',
				loginshow: false,
				resshow: false,
			});
		}
	}

	render() {
		// Declare Variables
		// Props
		const { currentUser } = this.props;
		// State
		const { errors, password, email, username, loginshow, resshow, forgotshow, infoshow, phone } = this.state;
		//-----------------------------------------------------------
		return (
			<div>
				{/* Content In NAVBAR before LOGIN */}
				<div className={`LoginForm ${currentUser && 'Login--disable'}`}>
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

				{/* ALL MODAL OF LOGIN FORM */}
				{/* ______________________________________________________________________________________________________ */}
				{/*  Login The Modal  */}
				<LoginForm
					currentUser={currentUser}
					loginshow={loginshow}
					handleLoginShow={this.handleLoginShow}
					errors={errors}
					handleLogIn={this.handleLogIn}
					HandleLogtoRes={this.HandleLogtoRes}
					email={email}
					password={password}
					handleTextChange={this.handleTextChange}
				/>
				{/* ______________________________________________________________________________________________________ */}

				{/*  Register The Modal  */}
				<RegisterForm
					currentUser={currentUser}
					resshow={resshow}
					handleResShow={this.handleResShow}
					errors={errors}
					handleTextChange={this.handleTextChange}
					username={username}
					phone={phone}
					email={email}
					password={password}
					handleRegister={this.handleRegister}
					HandleRestoLog={this.HandleRestoLog}
				/>
				{/* ______________________________________________________________________________________________________ */}

				{/*  Forgot Password The Modal  */}
				<ForgotPasswordForm
					forgotshow={forgotshow}
					handleForgotShow={this.handleForgotShow}
					handleTextChange={this.handleTextChange}
					email={email}
					HandleForgottoLog={this.HandleForgottoLog}
				/>
				{/* __________________________________________________________________________________________________________________________________ */}
			</div>
		);
	}
}

const mapDispatchToProps = (dispatch) => ({
	dispatch,
	setCurrentUser: (currentUser) => dispatch(actions.setCurrentUser(currentUser)),
	setError: (error) => dispatch(actions.setError(error)),
	signOutUser: () => dispatch(actions.signOutUser()),
});

const mapStateToProps = (state) => ({
	currentUser: selectors.getCurrentUser(state),
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
