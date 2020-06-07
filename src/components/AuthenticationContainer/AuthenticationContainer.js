import React, { Component } from 'react'

import './AuthenticationContainer.scss';

// import react-router-dom
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// import components
import LoginForm from './../LoginForm';
import RegisterForm from './../RegisterForm';

class AuthenticationContainer extends Component {
  render() {
    return (
      <div className="AuthenticationContainer">
        <Switch>
          <Route exact path='/authentication/signin' render={(props) => <LoginForm {...props}/>} />
          <Route exact path='/authentication/register' component={RegisterForm} />
          {/* <Route exact path='/authentication/signin' render={(props) => <SignInForm {...props} pageTitle={pageTitle} />} ></Route>
          <Route exact path='/authentication/profile' render={(props) => <UserInfoForm {...props} pageTitle={pageTitle} />} ></Route> */}
        </Switch>
      </div>
    )
  }
}

export default AuthenticationContainer;