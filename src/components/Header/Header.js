import React, { PureComponent } from 'react';
import './Header.scss';

// import components
import Login from './../Login';

class Header extends PureComponent {

  render() {
    return (
      <React.Fragment>
        <header className="HomePage__Header">
          {/* Logo */}
          <img className="Header__Logo" src={process.env.PUBLIC_URL + "/png/Logo.png"} alt="Logo"></img>
          {/* Link */}
          <div className="Header__link">TRANG CHỦ</div>
          <div className="Header__link">VỀ CHÚNG TÔI</div>
          <div className="Header__link">LIÊN HỆ</div>
          {/* check IF Đăng Nhập or not */}
          <Login />
        </header>
      </React.Fragment>
    )
  }
}

export default Header;