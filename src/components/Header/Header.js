import React, { PureComponent } from 'react';
import './Header.scss';

// import react-router-dom
import { Link } from 'react-router-dom';
// import material-UI
import { IconButton } from '@material-ui/core';
import { Menu, ArrowDropDown } from '@material-ui/icons';
// import redux
import { connect } from 'react-redux';
import selectors from './../../redux/selectors';
import actions from './../../redux/actions';

import {client} from './../../feathers';
// import components
import Login from './../Login';
import HeaderDropDownItem from './../HeaderDropDownItem';

class Header extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      sticky: false,
      dropdown: false,
      disable: true,
    };
  }

  componentDidMount() {
    const { history } = this.props;
    if(history.location.pathname === '/chat') {
      this.setState({ disable: false })
    }
    window.onscroll = () => {
      if(window.pageYOffset > 150) { 
        this.setState({ sticky: true })
      } else {
        this.setState({ sticky: false })
      }
    }
  }

  ImageClick = (e) => {
    this.props.history.push('/');
  }

  showDropDown = (e) => {
    const { dropdown } = this.state;
    if(dropdown) {
      this.setState({ dropdown: false })
    }
    else {
      this.setState({ dropdown: true })
    }
  };

  handleCloseDropdown = (e) => {
    this.setState({ dropdown: false });
  }

  handleLogoutEvent = (e) => {
		e.preventDefault();
		this.setState({ dropdown: false });
		client.logout();
		this.props.signOutUser();
		this.props.history.push('/');
	};

  render() {
    const { sticky, dropdown, disable } = this.state;
    const { currentUser } = this.props;

    return (
      <React.Fragment>
        <header id={`${ (disable) ? '': 'unset__position' }`} className='HomePage__Header' >
          <div className={`Header__content ${sticky ? 'content--sticky': '' } ${disable ? '': 'content--background'}`} >
            {/* Logo */}
            <img className="Header__Logo" src={process.env.PUBLIC_URL + "/png/Logo-1.png"} alt="Logo" onClick={this.ImageClick}></img>
            {/* Link */}
            <div className="Header__navigation">
              <Link className="Header__link" to='/'>Trang Chủ</Link>
              <Link className="Header__link" to='/contact'>Liên Hệ</Link>
              {currentUser && <Link className="Header__link" to='/chat'>Chat</Link>}
            </div>

            {/* check IF Đăng Nhập or not */}
            <Login {...this.props}/>
            {currentUser ? 
              (
                <div className='User__info' onClick={this.showDropDown}>
                  <img
                    src={process.env.PUBLIC_URL + '/images/user.png'}
                    className="User__img"
                    alt="user-images"
                  />
                  <div className='User__name'>{currentUser.name}</div>
                  <IconButton edge="start" className="Icon__dropdown" color="inherit" aria-label="menu">
                    <ArrowDropDown />
                  </IconButton>
                </div>
              ):
              (  
                <IconButton edge="start" className="Header__MenuIcon" color="inherit" aria-label="menu" onClick={this.showDropDown}>
                  <Menu />
                </IconButton>
              )
            }
        
            {dropdown ? ( <HeaderDropDownItem handleCloseDropdown={this.handleCloseDropdown} handleLogoutEvent={this.handleLogoutEvent}/>): (<React.Fragment />)}
          </div>          
        </header>
      </React.Fragment>
    )
  }
}

const mapStateToProps = (state) => ({
  state,
	currentUser: selectors.getCurrentUser(state),
});

const mapDispatchToProps = (dispatch) => ({
	dispatch,
	signOutUser: () => dispatch(actions.signOutUser()),
});

export default connect(mapStateToProps, mapDispatchToProps) (Header);