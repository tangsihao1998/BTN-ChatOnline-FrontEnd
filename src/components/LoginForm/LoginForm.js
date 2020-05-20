import React, { Component } from 'react'

class LoginForm extends Component {
  render() {
    const {currentUser, loginshow, handleTextChange, handleLoginShow, errors, handleLogIn, HandleLogtoRes, password, email} = this.props;

    return (
      <React.Fragment>
        <div id={`LoginModal${currentUser || ((loginshow && 'enable') || '' ) }`} className="modal-content">
          <div className="close" onClick={handleLoginShow}>&times;</div>
          <div className="title">Log In</div>
          {/* Content Here */}
          <div className="box-content">
              { errors && ((errors.email && <div className="Alert">Your e-mail/password is invalid!</div> )|| 
                  (errors.password && <div className="Alert">Your e-mail/password is invalid!</div>))}
              <div className="inputform">
                  <div>E-MAIL</div>
                  <input id={`${errors && errors.email && 'ErrorForm'}`} type="text" placeholder="Enter your email..." 
                  name="email" className="email" onChange={handleTextChange} value={email}/>
              </div>
              <div className="inputform">
                  <div>PASSWORD</div>
                  <input id={`${errors && errors.password && 'ErrorForm'}`} type="password" placeholder="Enter your password..." 
                  name="password" onChange={handleTextChange} value={password}/>
              </div>
              <div className="otherform">
                  <input type="checkbox" name="remember" value="remember" className="remembercheckbox"/>
                  <label>Remember password</label>
                  {/* <div onClick={this.HandleLogtoForgot}>Forgot your password?</div> */}
              </div>
          </div>
          <button onClick={handleLogIn}>Log In</button>
          <hr/>
          <div className="alert">
              <div>Don't have an account?</div>
              <div className="alert-button" onClick={HandleLogtoRes}>Register</div>
          </div>
        </div>
      </React.Fragment>
    )
  }
}

export default LoginForm;