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
            <img className="Header__Logo" src={process.env.PUBLIC_URL + "/png/Logo.png"} alt="Logo"></img>
            {/* Link */}
            <div className="Header__navigation">
              <div className="Header__link">TRANG CHỦ</div>
              <div className="Header__link">VỀ CHÚNG TÔI</div>
              <div className="Header__link">LIÊN HỆ</div>
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