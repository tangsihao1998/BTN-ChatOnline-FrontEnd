import React from 'react'

import './HeaderDropDownItem.scss';

// import react-router-dom
import { Link } from 'react-router-dom';

const HeaderDropDownItem = (props) => {

  const { handleCloseDropdown, handleLogoutEvent } = props;
  const token = localStorage.getItem('feathers-jwt');

  return (
    <div className="Header__Submenu">
      {token ? (<React.Fragment/>) : 
        (
          <React.Fragment>
            <Link className="Submenu__Link" to='/authentication/signin' onClick={handleCloseDropdown}>Đăng Nhập</Link>
            <Link className="Submenu__Link" to='/authentication/register' onClick={handleCloseDropdown}>Đăng Ký</Link>
          </React.Fragment>
        )
      }
     
      <Link className="Submenu__Link" to='/' onClick={handleCloseDropdown}>Trang Chủ</Link>
      <Link className="Submenu__Link" to='/about' onClick={handleCloseDropdown}>Về Chúng Tôi</Link>
      <Link className="Submenu__Link" to='/contact' onClick={handleCloseDropdown}>Liên Hệ</Link>
      { token ? (
        <React.Fragment>
          <Link className="Submenu__Link" to='/profile' onClick={handleCloseDropdown}>Thông Tin Tài Khoản</Link>
          <div className="Submenu__Link" onClick={handleLogoutEvent}>
            Đăng Xuất
          </div>
        </React.Fragment>
        ):(<React.Fragment />)
      }
     
    </div>
  )
}

export default HeaderDropDownItem;
