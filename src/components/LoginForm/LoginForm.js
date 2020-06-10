import React, { Component } from 'react'

import './LoginForm.scss';

import { Link } from 'react-router-dom';
import {client} from '../../feathers';

// import redux
import { connect } from 'react-redux';
import actions from './../../redux/actions';

class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      errors: '',
    };
  }

	handleTextChange = (e) => {
		const { name, value } = e.target;
		this.setState({ [name]: value });
	};

	// Handle Log In Event
	handleLogIn = async (e) => {
		e.preventDefault();
		const { setCurrentUser, history } = this.props;
		try {
			const result = await client.authenticate({
				strategy: 'local',
				email: this.state.email,
				password: this.state.password,
			});
      setCurrentUser(result.user);
      history.push('/');
		} catch (err) {
			if (err.code === 401) {
        // TODO: show error in login form
        this.setState({ errors: 'Wrong email/password combination'})
			} else {
        this.setState({ errors: 'An unknown error has occured'})
			}
		}
  };
  
  render() {
    const { password, email, errors } = this.state;
    return (
      <div className="LoginForm">

        <div className="Login__title">Log In</div>

        <div className="Login__content">
          <form onSubmit={this.handleLogIn}>

            <div className="Login__inputform">
              { errors && (<div className="Inputform__alert"> {errors} </div>)}
              <div className="Inputform__component">
                <div className="Input__title">E-MAIL:</div>
                <input 
                  className={`Input__style ${(errors === 'Wrong email/password combination') && 'errorForm'}`} 
                  type="email" 
                  placeholder="Enter your email..." 
                  name="email" 
                  onChange={this.handleTextChange} 
                  value={email}
                  required
                />
              </div>
              <div className="Inputform__component">
                <div className="Input__title">PASSWORD:</div>
                <input 
                  className={`Input__style ${(errors === 'Wrong email/password combination') && 'errorForm'}`} 
                  type="password" 
                  placeholder="Enter your password..." 
                  name="password" 
                  onChange={this.handleTextChange} 
                  value={password}
                  required
                />
              </div>

              <Link className="Forgot__navigate"to='/authentication/forgotpassword'>Forgot your password?</Link>
            </div>
            <button className="Login__button" type='submit'>Log In</button>
            <hr/>
            <div className="Login__navigate">
              <div>Don't have an account?</div>
              <Link className="Navigate__register" to="/authentication/register">Register</Link>
            </div>
          </form>
        </div>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  dispatch,
  setCurrentUser: currentUser => dispatch(actions.setCurrentUser(currentUser)),
});

export default connect(null, mapDispatchToProps)(LoginForm);