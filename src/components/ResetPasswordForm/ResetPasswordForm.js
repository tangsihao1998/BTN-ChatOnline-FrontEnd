import React, { Component } from 'react'

import './ResetPasswordForm.scss'

import { connect } from 'react-redux';
import { services } from './../../feathers';

class ResetPasswordForm extends Component {
  constructor (props) {
    super(props);
    this.state = {
      password: '',
      repassword: '',
    };
  }

	// Handle Input Text
	handleTextChange = (e) => {
		const { name, value } = e.target;
		this.setState({ [name]: value });
  };
  
  handleResetSubmit = async (e) => {
    e.preventDefault();
    const { password, repassword } = this.state;
    if(password === repassword) {
      try {
        // get token
        const params = new URLSearchParams(this.props.location.search);
        const token = params.get('token');
        // Get action
        const action = 'resetPwdLong';

        await this.props.onCreate(action, token, password);
        alert ('Reset Password Success');
        this.props.history.push('/authentication/signin')
      } catch (error) {
        switch(error.code) {
          default: {
            alert ('An unknown error has occured')
            break;
          };
        }
      }
    }
    else {
      alert('Password and Confirm Password is not combination')
    }
  }


  render() {
    const { password, repassword } = this.state;
    return (
      <React.Fragment>
        <div className='ResetForm'>
          <div className="ResetForm__title">Reset Password</div>
          
          <div className="ResetForm__content">
            <div className="ResetForm__instructor">Enter your new password and confirm it</div>
            {/* Content Here */}
            <form onSubmit={this.handleResetSubmit}>
              <div className="ResetForm__inputform">
                <div className="Inputform__component">
                  <div className="Input__title">PASSWORD</div>
                  <input 
                    className='Input__style' 
                    type="password" 
                    placeholder="Enter your email..." 
                    name="password"
                    value={password}
                    onChange={this.handleTextChange} 
                    required/>
                </div>
                <div className="Inputform__component">
                  <div className="Input__title">CONFIRM PASSWORD</div>
                  <input 
                    className='Input__style' 
                    type="password" 
                    placeholder="Enter your email..." 
                    name="repassword"
                    value={repassword}
                    onChange={this.handleTextChange} 
                    required/>
                </div>
              </div>
              <button className="ResetForm__button" type='submit'>Submit</button>
            </form>
          </div>
        </div>
      </React.Fragment>
    )
  }
}

const mapDispatchToProps = (dispatch) => ({
  dispatch,
  onCreate: async (action, token, password) => {
    await dispatch(services.authManagement.create({
      action: action,
      value: {token: token, password: password},
    }));
  }
});

export default connect(null, mapDispatchToProps)(ResetPasswordForm);
