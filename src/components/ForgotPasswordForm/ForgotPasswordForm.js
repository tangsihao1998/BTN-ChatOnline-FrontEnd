import React, { Component } from 'react'

import './ForgotPasswordForm.scss';

import { Link } from 'react-router-dom'; 

class ForgotPasswordForm extends Component {
  constructor (props) {
    super(props);
    this.state = {
      email: '',
    };
  }

	// Handle Input Text
	handleTextChange = (e) => {
		const { name, value } = e.target;
		this.setState({ [name]: value });
  };
  
  handleForgotSubmit = async (e) => {

  }


  render() {
    const { email } = this.state;
    return (
      <React.Fragment>
        <div className='ForgotForm'>

          <div className="ForgotForm__title">Forgot Password</div>
          
          <div className="ForgotForm__content">
            <div className="ForgotForm__instructor">Enter your e-mail address below and we’ll get you back on track.</div>
            {/* Content Here */}
            <form onSubmit={this.handleForgotSubmit}>
              <div className="ForgotForm__inputform">
                <div className="Inputform__component">
                  <div className="Input__title">E-MAIL</div>
                  <input 
                    className='Input__style' 
                    type="text" 
                    placeholder="Enter your email..." 
                    name="email"
                    value={email}
                    onChange={this.handleTextChange} 
                    required/>
                </div>
              </div>
              <button className="ForgotForm__button" type='submit'>Submit</button>
            </form>
            <hr/>
            <div className="Login__navigate">
              <div>I remember my password now</div>
              <Link className="Navigate__login" to="/authentication/signin">Login</Link>
            </div>
          </div>
        </div>
      </React.Fragment>
    )
  }
}

export default ForgotPasswordForm;