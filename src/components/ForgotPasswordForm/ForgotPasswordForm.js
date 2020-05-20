import React, { Component } from 'react'

class ForgotPasswordForm extends Component {
  render() {
    const {forgotshow, handleForgotShow, handleTextChange, email, HandleForgottoLog} = this.props;
    return (
      <React.Fragment>
        <div id={`Modal${(forgotshow && 'Forgot')|| '' }`} className="modal" onClick={handleForgotShow}>
          {/*  Modal content */}
          <div>
            <div id={`ForgotModal${(forgotshow && 'enable') || '' }`} className="modal-content">
              <div className="close" onClick={handleForgotShow}>&times;</div>
              <div className="title">Forgot Password</div>
              <div className="instructor">Enter your e-mail address below and we’ll get you back on track.</div>
              {/* Content Here */}
              <div className="box-content">
                <div className="inputform">
                    <div>E-MAIL</div>
                    <input type="text" placeholder="Enter your email..." name="email"
                     required className="email" onChange={handleTextChange} value={email}/>
                </div>
              </div>
              <button>Submit</button>
              <hr/>
              <div className="alert">
                <div>I remember my password now</div>
                <div className="alert-button" onClick={HandleForgottoLog}>Login</div>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    )
  }
}

export default ForgotPasswordForm;