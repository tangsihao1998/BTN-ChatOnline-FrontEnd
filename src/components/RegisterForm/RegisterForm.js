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
  };
  
  render() {
    const { username, phone, email, password, repassword, errors } = this.state;
    const { currentUser } = this.props;

    return (
      <React.Fragment>

              {/* Content Here */}
              {/* <div className="box-content">
                <div className="inputform">
                  <div>NAME</div>
                  <input id={`${errors && errors.name && 'ErrorForm'}`} type="text" placeholder="Enter your name..." 
                  name="username" required className="username" onChange={handleTextChange} value={username}/>
                  {errors && errors.name && <p className="Alert">{errors.name}</p>}
                </div>
                <div className="inputform">
                  <div>PHONE</div>
                  <input id={`${errors && errors.phone && 'ErrorForm'}`} type="text" placeholder="Enter your phone..." 
                  name="phone" required className="phone" onChange={handleTextChange} value={phone}/>
                  { errors && errors.phone && <p className="Alert">{errors.phone}</p>}
                </div>
                <div className="inputform">
                  <div>E-MAIL</div>
                  <input id={`${errors && errors.email && 'ErrorForm'}`} type="text" placeholder="Enter your email..." 
                  name="email" required className="email" onChange={handleTextChange} value={email}/>
                  { errors && errors.email && <p className="Alert">{errors.email}</p>}
                </div>
                <div className="inputform">
                  <div>PASSWORD</div>
                  <input id={`${errors && errors.password && 'ErrorForm'}`} type="password" placeholder="Enter your password..."
                  name="password" required onChange={handleTextChange} value={password}/>
                  { errors && errors.password && <p className="Alert">{errors.password}</p> }
                </div>
              </div>
              <div className="term">
                By creating an account you agree to the <br/>
                <span>Terms of Service</span> and <span>Privacy Policy</span>
              </div>
              <button onClick={handleRegister}>Register</button>
              <hr/>
              <div className="alert">
                <div>Do you have an account?</div>
                <div className="alert-button" onClick={HandleRestoLog}>Register</div>
            </div>
          </div>
        </div> */}
        <div className="RegisterForm">

          <div className="Register__title">Register</div>

          <div className="Register__content">
            <div className="Register__inputform">
              { errors && (<div className="Inputform__alert"> {errors} </div>)}
             
              <div className="Inputform__component">
                <div className="Input__title">USER NAME:</div>
                <input 
                  className={`Input__style ${(errors === 'Wrong email/password combination') && 'errorForm'}`} 
                  type="text" 
                  placeholder="Enter your password..." 
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
                  placeholder="Enter your password..." 
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
            <button className="Register__button" onClick={this.handleRegister}>Register</button>
            <hr/>
            <div className="Login__navigate">
              <div>Do you have an account?</div>
              <Link className="Navigate__login" to="/authentication/signin">Login</Link>
            </div>
          </div>
        </div>
      </React.Fragment>
    )
  }
}

export default RegisterForm;