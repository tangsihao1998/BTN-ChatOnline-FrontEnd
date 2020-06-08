import React, { Component } from 'react'

import './RegisterForm.scss';

import { Link } from 'react-router-dom';
import client from '../../feathers';

class RegisterForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      phone: '',
      email: '',
      password: '',
      repassword: '',
      errors: '',
    }
  }

	// Handle Input Text
	handleTextChange = (e) => {
		const { name, value } = e.target;
		this.setState({ [name]: value });
	};

  handleCheckRegister = () => {
    const {username, password, repassword} = this.state
    const format = /^[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]*$/;
    if(username.length <= 6 || username.match(format) || username.length > 50 ) {
      this.setState({
        errors: "Username has at least 6 characters or maximun 50 characters and doesn't include special characters"
      })
      return false;
    }
    if(password.match(format)) {
      this.setState({
        errors: "Password doesnt include special characters"
      })
      return false;
    }
    if(!(password === repassword )) {
      this.setState({
        errors: "Your confirmed password are unmatch"
      })
      return false
    }
    return true
  }

  	// Handle Register Event
	handleRegister = async (e) => {
		e.preventDefault();
		// const { setCurrentUser, setError } = this.props;
    try {
      await client.service('users').create({
        name: this.state.username, 
        email: this.state.email, 
        password: this.state.password, 
        phone: this.state.phone
      }).then(() => {
        alert('Create Success, Redirect to Login')
        this.props.history.push('/authentication/signin');
      })
    } catch (err) {
      console.log("RegisterForm -> handleRegister -> err", err)
      // if (err.code === 401) {
      //   // TODO: show error in login form
      //   this.setState({ errors: 'Wrong email/password combination'})
      // } else {
      //   this.setState({ errors: 'An unknown error has occured'})
      // }
    }
  };
  
  render() {
    const { username, phone, email, password, repassword, errors } = this.state;

    return (
      <React.Fragment>
        <div className="RegisterForm">

          <div className="Register__title">Register</div>

          <div className="Register__content">
            <form onSubmit={this.handleRegister}>
              <div className="Register__inputform">
                { errors && (<div className="Inputform__alert"> {errors} </div>)}
              
                <div className="Inputform__component">
                  <div className="Input__title">USER NAME:</div>
                  <input 
                    className={`Input__style ${(errors === 'Wrong email/password combination') && 'errorForm'}`} 
                    type="text" 
                    placeholder="Enter your username..." 
                    name="username" 
                    onChange={this.handleTextChange} 
                    value={username}
                  />
                </div>
                <div className="Inputform__component">
                  <div className="Input__title">PHONE:</div>
                  <input 
                    className={`Input__style ${(errors === 'Wrong email/password combination') && 'errorForm'}`} 
                    type="tel" 
                    placeholder="Enter your phone..." 
                    name="phone" 
                    onChange={this.handleTextChange} 
                    value={phone}
                  />
                </div>
                <div className="Inputform__component">
                  <div className="Input__title">E-MAIL:</div>
                  <input 
                    className={`Input__style ${(errors === 'Wrong email/password combination') && 'errorForm'}`} 
                    type="email" 
                    placeholder="Enter your email..." 
                    name="email" 
                    onChange={this.handleTextChange} 
                    value={email}
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
                  />
                </div>
                <div className="Inputform__component">
                  <div className="Input__title">RETYPE PASSWORD:</div>
                  <input 
                    className={`Input__style ${(errors === 'Wrong email/password combination') && 'errorForm'}`} 
                    type="password" 
                    placeholder="Enter your re-password..." 
                    name="repassword" 
                    onChange={this.handleTextChange} 
                    value={repassword}
                  />
                </div>
              </div>
              <button className="Register__button" type='submit'>Register</button>
              <hr/>
              <div className="Login__navigate">
                <div>Do you have an account?</div>
                <Link className="Navigate__login" to="/authentication/signin">Login</Link>
              </div>
            </form>
          </div>
        </div>
      </React.Fragment>
    )
  }
}

export default RegisterForm;