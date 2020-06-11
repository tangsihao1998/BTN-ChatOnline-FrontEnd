import React, { Component } from 'react'

import './VerifyAccount.scss';

import { connect } from 'react-redux';
import { services } from './../../feathers';

class VerifyAccount extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // dùng để build giao diện 
      isVerified: false,
    }
  }

  async componentDidMount () {
    try {
      const params = new URLSearchParams(this.props.location.search);
      const token = params.get('token');
      // Get action
      const getAction = this.props.history.location.pathname;
      const action = getAction.slice(1,getAction.length);
  
      await this.props.onCreate(action, token);
      alert('Verify Success');
    } catch (error) {
      switch(err.code) {
        case 400: {
          alert ('Actions does not exist')
          break;
        };
        default: {
          alert ('An unknown error has occured')
          break;
        };
      }
    }
    this.props.history.push('/');
  }
  render() {
    return (
      <React.Fragment>
        
      </React.Fragment>
    )
  }
}

const mapDispatchToProps = (dispatch) => ({
  dispatch,
  onCreate: async (action, token) => {
    await dispatch(services.authManagement.create({
      action,
      value: token,
    }));
  }
});

export default connect(null, mapDispatchToProps)(VerifyAccount);