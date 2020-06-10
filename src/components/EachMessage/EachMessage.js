import React, { Component } from 'react'

import './EachMessage.scss';

class EachMessage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      type: true,
    }
  }

  render() {
    // Ở đây gọi props để check xem là incoming or outgoing, example với this.state.type
    const {type} = this.state;

    return (
      <React.Fragment>
        { type ? 
          (
            //  {/* Message của người khác */}
            <div className="Incoming__message">
              <img className="User__Image" src={process.env.PUBLIC_URL + '/images/user.png'} alt="Incoming User"></img>
              <div class="Message__incoming">
                  <div class="Message">
                      {/* Gọi message thay thế trong p */}
                      <p>{}Test which is a new approach to have all
                          solutions</p>
                          {/* Date and time */}
                      <span class="Time__date"> {} 11:01 AM    |    {}June 9</span>
                  </div>
              </div>
            </div>
          ):
          (
            // {/* Message của mình */}
            <div class="Outgoing__message">
              <div class="Message__send">
                {/* Gọi message thay thế trong p */}
                <p>{}Test which is a new approach to have all
                solutions</p>
                  {/* Date and time */}
                <span class="Time__date"> {}11:01 AM    |    {}June 9</span> 
              </div>
            </div>
          )
        }
        
      </React.Fragment>
    )
  }
}

export default EachMessage;