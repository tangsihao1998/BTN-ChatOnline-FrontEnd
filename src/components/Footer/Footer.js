import React, { Component } from 'react'

import './Footer.scss';

class Footer extends Component {
  render() {
    return (
      <footer className="Footer">
        <div className="Footer_Top">
            <div className="About_TalkDer">
                  <h3 className="TalkDer">TalkDer</h3>
                  <h3 className="TalkDer_Description">Free app for connecting with your friends</h3>
            </div>
            <div className="Contact_Us">
                  <h3 className="Label_Contactus">Contact Us</h3>
                  <ul className="List_Student" style={{listStyle: 'none'}}>
                    <li>16530 : Tăng Sĩ Hào</li>
                    <li>16530 : Lý Gia Lập</li>
                    <li>16530 : Phạm Viết Lực</li>
                  </ul>
            </div>
        </div>
        <div className="Footer_Bottom_Copyright">
            <div className="Copyright_Text"> Copyright ©2020</div>
        </div>
      </footer>
    )
  }
}

export default Footer;