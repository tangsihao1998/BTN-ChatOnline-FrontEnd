import React, { Component } from 'react'

import './Contact.scss';

class Contact extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="Contact">
                    <div className="Contact_Container">
                        <h3 className="Container_Intro">Contact Us</h3>
                    </div>
                    <div className="Input_Container">
                        <div className="Input_GetinTouch">
                            <h3>Get in touch</h3>
                            <div className="Input_Message">
                                <div className="Container_Input_Message">
                                    <input className="Enter_Message" type="text" placeholder="Enter Message"/>
                                </div>
                                <div className="List_Information">
                                    {/* <div className="Location">
                                        KHTN
                                    </div>
                                    <div className="Phone_Number">
                                        123456789
                                    </div>
                                    <div className="Contact_Email">
                                        abc@gmail.com
                                    </div> */}
                                </div>
                            </div>
                            <div className="Enter_Name_And_Email">
                                <div className="Input_Name">
                                    <input className="Enter_Name" type="text" placeholder="Enter your name"/>
                                </div>
                                <div className="Input_Email">
                                    <input className="Enter_Email" type="text" placeholder="Email"/>
                                </div>
                            </div>
                            {/* <div className="Input_Subject">
                                <input className="Enter_Subject" type="text" placeholder="Enter Subject"/>
                            </div> */}
                            <div className="Input_Send">
                                <button className="Button_SEND" type="button">SEND</button>
                            </div>
                        </div>
                        {/* <div className="List_Informations">
                            List_Informations
                        </div> */}
                    </div>
                </div>
                
            </React.Fragment>
            
        )
    }
}

export default Contact