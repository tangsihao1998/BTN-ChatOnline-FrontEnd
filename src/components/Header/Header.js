import React, { PureComponent } from 'react';
import './Header.scss';

// import redux
import { connect } from 'react-redux';
import actions from './../../redux/actions';
import selectors from './../../redux/selectors';

// import components
import Login from './../Login';

class Header extends PureComponent {
  constructor(props){
    super(props);
  }

  render() {
    return (
      <React.Fragment>
        <header className="HomePage__Header">
          {/* Logo */}
          <img className="HomePage__Logo" src={process.env.PUBLIC_URL + "/png/Logo.png"} alt="Logo"></img>
          <div className="HomePage__Header--navigation">
            {/* Link */}
            <div className="Header--link">TRANG CHỦ</div>
            <div className="Header--link">VỀ CHÚNG TÔI</div>
            <div className="Header--link">LIÊN HỆ</div>
          </div> 
          {/* check IF Đăng Nhập or not */}
          <Login />
        </header>
      </React.Fragment>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  dispatch,
  // setCurrentTeam: currentTeam => dispatch(actions.setCurrentTeam(currentTeam)),
  // setCurrentUser: currentUser => dispatch(actions.setCurrentUser(currentUser)),
  // setUserTeams: teams => dispatch(actions.setUserTeams(teams)),
});

const mapStateToProps = state => ({
  // currentUser: selectors.getCurrentUser(state),
});

export default connect(mapDispatchToProps, mapStateToProps)(Header);