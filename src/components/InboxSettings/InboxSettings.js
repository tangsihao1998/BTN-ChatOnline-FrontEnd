import React, { Component } from 'react'

import './InboxSettings.scss'

class InboxSettings extends Component {
    render() {
        return (
            <div className="Inbox_Settings_Component">
                <div className="Img_Of_PeopleChat">
                    <img className="Image_In_Settings" src="https://ptetutorials.com/images/user-profile.png" alt="sunil"></img>
                    <h1>Name : </h1>
                </div>
                <div className="List_Of_Button_Modifies">
                    <div className="Modify Name">
                        <button type="button">Modify Name</button>
                        {/* import edit icon */}
                        {/* <EditOutlined /> */}
                    </div>
                    <div className="Add">
                        {/* import add icon */}
                        <button type="button">Add</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default InboxSettings