import React from 'react'

import './Introduction.scss';

import { Link } from 'react-router-dom';

const Introduction = () => {
    return (
      <div className='Introduction'>
        <div className='Introduction__navigation'>
          <h3 className='Introduction__intro'>Start Chating <br /> with Talk-der</h3>
          <Link className='Introduction__link' to='/' >Get Start Now</Link>
        </div>
        <div className="Introduction__image">
          <img className='Image__content' src={process.env.PUBLIC_URL + 'jpeg/web-chat-intro.jpg'} alt='img Intro'/>
        </div>
      </div>
    )
}

export default Introduction;