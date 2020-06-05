import React, { PureComponent } from 'react';
import './Header.scss';

// import components
import Login from './../Login';

class Header extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      sticky: false,
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

  render() {
    const { sticky } = this.state;
    
    return (
      <React.Fragment>
        <header className="HomePage__Header">
          <div className={`Header__content ${ sticky ? 'content--sticky':'' }`} >
            {/* Logo */}
            <img className="Header__Logo" src={process.env.PUBLIC_URL + "/png/Logo-1.png"} alt="Logo"></img>
            {/* Link */}
            <div className="Header__navigation">
              <div className="Header__link">Trang Chủ</div>
              <div className="Header__link">Về Chúng Tôi</div>
              <div className="Header__link">Liên Hệ</div>
            </div>

            {/* check IF Đăng Nhập or not */}
            <Login {...this.props}/>
          </div>
        </header>
      </React.Fragment>
    )
  }
}

export default Header;