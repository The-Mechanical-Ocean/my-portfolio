import React from 'react';
import './Footer.css';

const PHONE_NUMBER = '+79160978804'; 
const MESSAGE = 'Добрый день, можно консультацию';

function Footer() {
  return (
    <footer className="footer">
      <p className='footer__title'>КОНТАКТЫ</p>
      <p className='footer__text'>Центр Доктора Лабунца - все права защищены 2022</p>
      <div className='footer__contact-container'>
        <div className='footer__contact-container-small'>
          <h3 className='footer__contact-container-small-title'>Адрес</h3>
          <p className='footer__contact-container-small-text'>г. Москва</p>
        </div>
        <div className='footer__contact-container-small'>
          <h3 className='footer__contact-container-small-title'>Телефон</h3>
          <a className='footer__href' href={ `https://wa.me/${PHONE_NUMBER}?text=${encodeURIComponent(MESSAGE)}` } target='_blank'><p className='footer__contact-container-small-text'>89160978804</p></a>
        </div>
        <div className='footer__contact-container-small'>
          <h3 className='footer__contact-container-small-title'>E-mail</h3>
          <p className='footer__contact-container-small-text'>doctor@mail.ru</p>
        </div>
        <div className='footer__contact-container-small'>
          <h3 className='footer__contact-container-small-title'>Социальные сети</h3>
          <div className='footer__img-container'>
            <a href='' className='footer__link'><div className='footer__face-img'></div></a>
            <a href='' className='footer__link'><div className='footer__inst-img'></div></a>
            <a href='' className='footer__link'><div className='footer__twit-img'></div></a>
          </div>
        </div>      
      </div>
      <iframe className='footer__iframe' src="https://yandex.ru/map-widget/v1/?um=constructor%3A319acaa98e815b7222a78f733279b72ebb5b65e621800c0f978fbf5230e850b7&amp;source=constructor" width="632" height="497" frameBorder="0"></iframe>   
    </footer>
  )
}

export default Footer;