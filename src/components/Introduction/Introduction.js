import React, { Component } from 'react'

import './Introduction.scss';

import { Link } from 'react-router-dom';

class Introduction extends Component {


  render() {
    return (
      <div className='Introduction Introduction__background'>
        <div className='Introduction__container'>
          <div className='Introduction__navigation'>
            <h3 className='Introduction__intro'>Start Chating <br /> with Talk-der</h3>
            <Link className='Introduction__link' to='/' >Get Start Now</Link>
          </div>
          <div className="Introduction__image">
            <img className='Image__content' src={process.env.PUBLIC_URL + 'jpeg/web-chat-intro.jpg'} alt='img Intro'/>
          </div>
        </div>
      </div>
    )
  }
}

export default Introduction;