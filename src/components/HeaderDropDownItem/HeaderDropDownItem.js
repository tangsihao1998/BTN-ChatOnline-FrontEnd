import React, { Component } from 'react'

import './HeaderDropDownItem.scss';

// import react-router-dom
import { Link } from 'react-router-dom';

class HeaderDropDownItem extends Component {
  render() {
    const { handleCloseDropdown } = this.props;
    return (
      <div className="Header__Submenu">
        <Link className="Submenu__Link" to='/authentication/signin' onClick={handleCloseDropdown}>Đăng Nhập</Link>
        <Link className="Submenu__Link" to='/authentication/register' onClick={handleCloseDropdown}>Đăng Ký</Link>
        <Link className="Submenu__Link" to='/' onClick={handleCloseDropdown}>Trang Chủ</Link>
        <Link className="Submenu__Link" to='/about' onClick={handleCloseDropdown}>Về Chúng Tôi</Link>
        <Link className="Submenu__Link" to='/contact' onClick={handleCloseDropdown}>Liên Hệ</Link>
      </div>
    )
  }
}

export default HeaderDropDownItem;
