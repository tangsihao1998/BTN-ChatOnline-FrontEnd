import React, { Component } from 'react'

class RegisterForm extends Component {
  render() {
    const { currentUser, resshow, handleResShow, errors, handleTextChange, 
      username, phone, email, password, handleRegister, HandleRestoLog } = this.props;
    return (
      <React.Fragment>
        <div id={`Modal${currentUser || ((resshow && 'Register')|| '' )}`} className="modal" onClick={handleResShow}></div>
          {/*  Modal content */}
          <div>
            <div id={`RegisterModal${currentUser || ((resshow && 'enable') || '') }`} className="modal-content">
              <div className="close" onClick={handleResShow}>&times;</div>
              <div className="title">Register</div>
              {/* Content Here */}
              <div className="box-content">
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
                <div className="alert-button" onClick={HandleRestoLog}>Login</div>
            </div>
          </div>
        </div>
      </React.Fragment>
    )
  }
}

export default RegisterForm;