import React, { PureComponent } from 'react';
import './Header.scss';

// import components
import Login from './../Login';

// import react-router-dom
import { Link } from 'react-router-dom';
// import material-UI
import { IconButton } from '@material-ui/core';
import { Menu } from '@material-ui/icons';


class Header extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      sticky: false,
      dropdown: false,
    };
  }

  componentDidMount() {
    window.onscroll = () => {
      if(window.pageYOffset > 50) { 
        this.setState({ sticky: true })
      } else {
        this.setState({ sticky: false })
      }
    }
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

  render() {
    const { sticky, dropdown } = this.state;
    
    return (
      <React.Fragment>
        <header className="HomePage__Header">
          <div className={`Header__content ${ sticky ? 'content--sticky':'' }`} >
            {/* Logo */}
            <img className="Header__Logo" src={process.env.PUBLIC_URL + "/png/Logo-1.png"} alt="Logo"></img>
            {/* Link */}
            <div className="Header__navigation">
              <Link className="Header__link" to='/'>Trang Chủ</Link>
              <Link className="Header__link" to='/about'>Về Chúng Tôi</Link>
              <Link className="Header__link" to='/contact'>Liên Hệ</Link>
            </div>

            {/* check IF Đăng Nhập or not */}
            <Login {...this.props}/>
            <IconButton edge="start" className="Header__MenuIcon" color="inherit" aria-label="menu" onClick={this.showDropDown}>
              <Menu />
            </IconButton>
            {
              dropdown ? (
              <div className="Header__Submenu">
                <Link className="Submenu__Link" to='/login'>Đăng Nhập</Link>
                <Link className="Submenu__Link" to='/signup'>Đăng Ký</Link>
                <Link className="Submenu__Link" to='/'>Trang Chủ</Link>
                <Link className="Submenu__Link" to='/about'>Về Chúng Tôi</Link>
                <Link className="Submenu__Link" to='/contact'>Liên Hệ</Link>
              </div>): (<React.Fragment />)
            }
            
          </div>
        </header>
      </React.Fragment>
    )
  }
}

export default Header;