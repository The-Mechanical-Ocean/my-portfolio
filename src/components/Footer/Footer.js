import React from 'react';
import './Footer.css';
import {LangActiveContext} from '../../context/LangActiveContext';

const PHONE_NUMBER = '+79160978804'; 
const MESSAGE = 'Привет, интересные проекты ждут тебя!';

function Footer() {
  const { lang } = React.useContext(LangActiveContext);
  const [isRu] = lang;

  return (
    <footer className="footer" id='contacts'>
      <h3 className='footer__title'>{isRu ? "Контакты" : "Contacts"}</h3>
      <p className='footer__text'>{isRu ? "Хотите узнать больше или просто поболтать? Добро пожаловать!" : "Want to know more or just chat?"} </p>
        <button className='footer__button'>
          <a className='footer__button-link' href={ `https://wa.me/${PHONE_NUMBER}?text=${encodeURIComponent(MESSAGE)}` } target='_blank'><p className='footer__button-text'>{isRu ? "Отправить сообщение" : "Send message"}</p></a>
        </button>
          <div className='footer__link-container'>
            <a href='http://facebook.com/' className='footer__link'><div className='footer__face-img'></div></a>
            <a href='https://vk.com/feed?payload=%7B%22user%22%3A%7B%22first_name%22%3A%22%22%2C%22last_name%22%3A%22%22%7D%7D' className='footer__link'><div className='footer__vk-img'></div></a>
            <a href='https://instagram.com/kudrin8888?igshid=ZDdkNTZiNTM=' className='footer__link'><div className='footer__inst-img'></div></a>
            <a href='https://github.com/The-Mechanical-Ocean' className='footer__link'><div className='footer__git-img'></div></a>
          </div>
        <p className='footer__link-container-text'>{isRu ? "Я в социальных сетях" : "Like me on"}</p>    
        <p className='footer__link-container-text'>Facebook, VK, Instagram, GitHub</p>    

    </footer>
  )
}

export default Footer;

