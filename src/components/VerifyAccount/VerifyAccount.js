import React, { Component } from 'react'

import './VerifyAccount.scss';

import { connect } from 'react-redux';
import { services } from './../../feathers';

class VerifyAccount extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isVerified: false,
    }
   
  }

  async componentDidMount () {
    const params = new URLSearchParams(this.props.location.search);
    const token = params.get('token');
    // Get action
    const getAction = this.props.history.location.pathname;
    const action = getAction.slice(1,getAction.length);

    const result = await this.props.onCreate(action, token);
    console.log("VerifyAccount -> componentDidMount -> result", result)
  }
  render() {
    return (
      <div>
        
      </div>
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