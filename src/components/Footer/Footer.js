import React from 'react';
import './Footer.css';
import { LangActiveContext } from '../../context/LangActiveContext';

const PHONE_NUMBER = '+79160978804';
const MESSAGE = 'Привет, интересные проекты ждут тебя! Меня зовут ...';

function Footer() {
  const { lang } = React.useContext(LangActiveContext);
  const [isRu] = lang;

  return (
    <footer className="footer" id="contacts">
      <h3 className="footer__title">{isRu ? 'Контакты' : 'Contacts'}</h3>
      <p className="footer__text">
        {isRu
          ? 'Хотите узнать больше или просто поболтать? Добро пожаловать!'
          : 'Want to know more or just chat? You are welcome!'}{' '}
      </p>
      <button className="footer__button" type="button">
        <a
          className="footer__button-link"
          href={`https://wa.me/${PHONE_NUMBER}?text=${encodeURIComponent(
            MESSAGE
          )}`}
          target="blank"
        >
          <p className="footer__button-text">
            {isRu ? 'Отправить сообщение' : 'Send message'}
          </p>
        </a>
      </button>
      <div className="footer__link-container">
        <a
          href="https://www.facebook.com/profile.php?id=100006339872483&sk=about"
          className="footer__link"
          target="blank"
        >
          <div className="footer__face-img"></div>
        </a>
        <a
          href="https://vk.com/id45582683"
          className="footer__link"
          target="blank"
        >
          <div className="footer__vk-img"></div>
        </a>
        <a
          href="https://instagram.com/kudrin8888?igshid=ZDdkNTZiNTM="
          className="footer__link"
          target="blank"
        >
          <div className="footer__inst-img"></div>
        </a>
        <a
          href="https://github.com/The-Mechanical-Ocean"
          className="footer__link"
          target="blank"
        >
          <div className="footer__git-img"></div>
        </a>
      </div>
      <p className="footer__link-container-text">
        {isRu ? 'Я в социальных сетях' : 'Like me on'}
      </p>
      <p className="footer__link-container-text">
        Facebook, VK, Instagram, GitHub
      </p>
    </footer>
  );
}

export default Footer;
