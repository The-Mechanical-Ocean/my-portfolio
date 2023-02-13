import React from 'react';
import './Footer.css';

const PHONE_NUMBER = '+79160978804'; 
const MESSAGE = 'Привет, интересные проекты ждут тебя!';

function Footer() {
  return (
    <footer className="footer">
      <h3 className='footer__title'>Contacts</h3>
      <p className='footer__text'>Want to know more or just chat? 
You are welcome!</p>
        <button className='footer__button'>
          <a className='footer__button-link' href={ `https://wa.me/${PHONE_NUMBER}?text=${encodeURIComponent(MESSAGE)}` } target='_blank'><p className='footer__button-text'>Send message</p></a>
        </button>
          <div className='footer__link-container'>
            <a href='' className='footer__link'><div className='footer__face-img'></div></a>
            <a href='' className='footer__link'><div className='footer__face-img'></div></a>
            <a href='' className='footer__link'><div className='footer__face-img'></div></a>
            <a href='' className='footer__link'><div className='footer__face-img'></div></a>
          </div>
        <p className='footer__link-container-text'>Like me on
LinkedIn, Instagram, Behance, Dribble</p>    
    </footer>
  )
}

export default Footer;