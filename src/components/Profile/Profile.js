import React, { Component } from 'react'
// import './Profile.scss'

class Profile extends Component {
  render() {
    return (
        <body>
            <div>
              <ul>
                <h4>Avatar</h4>
                <img className="Body__Ava" src={process.env.PUBLIC_URL + "/png/Logo.png"} alt="Logo"></img>
                <ul>
                  <ol><h4 className="Body__Info">Name :</h4></ol>
                  <ol><h4 className="Body__Info">FullName :</h4></ol>
                  <ol><h4 className="Body__Info">Phone :</h4></ol>
                  <ol><h4 className="Body__Info">Email: </h4></ol>
                </ul>
              </ul>
            </div>
        </body>
    )
  }
}

export default Profile;