import React, { Component } from 'react'

import './AuthenticationContainer.scss';

// import react-router-dom
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// import components
import LoginForm from './../LoginForm';
import RegisterForm from './../RegisterForm';
import ForgotPasswordForm from './../ForgotPasswordForm';
class AuthenticationContainer extends Component {

  componentDidMount () {
    const { history } = this.props;
    if(history.location.pathname === '/authentication') {
      history.push('/authentication/signin');
    }
  }

  render() {
    return (
      <div className="AuthenticationContainer">
        <Switch>
          <Route exact path='/authentication/signin' component={LoginForm} />
          <Route exact path='/authentication/register' component={RegisterForm} />
          <Route exact path='/authentication/forgotpassword' component={ForgotPasswordForm} />
        </Switch>
      </div>
    )
  }
}

export default AuthenticationContainer;