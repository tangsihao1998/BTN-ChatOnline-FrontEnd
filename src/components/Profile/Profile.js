import React, { Component } from 'react'

import './Profile.scss'

import { connect } from 'react-redux';
import selectors from './../../redux/selectors';

class Profile extends Component {
  render() {
    const {currentUser} = this.props;
    console.log("Profile -> render -> currentUser", currentUser)
    return (
        <React.Fragment>{
            currentUser ? 
            (<div className="Profile">
              <ul>
                <h4>Avatar</h4>
                <img className="Profile__Ava" src={currentUser.image} alt="Logo"></img>
                <ul>
                  <ol><h4 className="Profile__Info">Name : {currentUser.name}</h4></ol>
                  <ol><h4 className="Profile__Info">Email: {currentUser.email}</h4></ol>
                  <ol><h4 className="Profile__Info">Phone : {currentUser.phone}</h4></ol>
                </ul>
              </ul>
            </div>) : 
            (<div></div>)
          }
        </React.Fragment>
    )
  }
}

const mapStateToProps = state => ({
  currentUser: selectors.getCurrentUser(state),
});

export default connect(mapStateToProps)(Profile);
