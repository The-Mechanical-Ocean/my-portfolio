import React from 'react';
import { LangActiveContext } from '../../context/LangActiveContext';
import './Navigation.css';

export default function Navigation() {
  const { lang } = React.useContext(LangActiveContext);
  const [isRu, setIsRu] = lang;
  const [isMenuActive, setIsMenuActive] = React.useState(false);
  const [isMenuButton, setIsMenuButton] = React.useState(false);
  const [width, setWidth] = React.useState(window.innerWidth);
  const [scrollTop, setScrollTop] = React.useState(0);

  function handleResize(event) {
    setWidth(event.target.innerWidth);
  }

  function handleScroll() {
    setScrollTop(window.scrollY);
  }

  React.useEffect(() => {
    if (width <= 640) {
      setIsMenuButton(true);
    } else {
      setIsMenuActive(false);
      setIsMenuButton(false);
    }

    if (scrollTop >= 800) {
      setIsMenuActive(false);
    }

    setTimeout(window.addEventListener('resize', handleResize), 20);
    setTimeout(window.addEventListener('scroll', handleScroll), 50);
    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('scroll', handleScroll);
    };
  }, [width, scrollTop]);

  // console.log('width', window.innerWidth)
  // console.log('scroll', scrollTop)

  function handleClickButtonMenu() {
    setIsMenuActive(!isMenuActive);
  }

  // React.useEffect(() => {
  //   if (!isMenuActive) {
  //     document.body.style.overflow = "hidden";
  //   } else {
  //     document.body.style.overflow = "visible";
  //   }
  // }, [isMenuActive]);

  return (
    <>
      <nav
        className={
          isMenuButton ? 'navigation navigation_inactive' : 'navigation'
        }
      >
        <div className="navigation__link-container">
          <a href="#home" className="navigation__link">
            {isRu ? 'Домашняя страница' : 'Home'}
          </a>
          <a href="#about" className="navigation__link">
            {isRu ? 'Обо мне' : 'About me'}
          </a>
          <a href="#skills" className="navigation__link">
            {isRu ? 'Навыки' : 'Skills'}
          </a>
          <a href="#portfolio" className="navigation__link">
            {isRu ? 'Портфолио' : 'Portfolio'}
          </a>
          <a href="#contacts" className="navigation__link">
            {isRu ? 'Контакты' : 'Contacts'}
          </a>
        </div>
      </nav>

      <button
        type="button"
        onClick={() => handleClickButtonMenu}
        className={
          !isMenuButton
            ? 'navigation__button navigation__button_inactive'
            : 'navigation__button'
        }
      >
        <span
          className={
            isMenuActive
              ? 'navigation__span navigation__span_menu-active'
              : 'navigation__span'
          }
        ></span>
        <span
          className={
            isMenuActive
              ? 'navigation__span navigation__span_menu-active'
              : 'navigation__span'
          }
        ></span>
        <span
          className={
            isMenuActive
              ? 'navigation__span navigation__span_menu-active'
              : 'navigation__span'
          }
        ></span>
      </button>
      <div
        className={
          isMenuActive
            ? 'navigation__menu navigation__menu_active'
            : 'navigation__menu'
        }
      >
        <nav className="navigation__nav-container">
          <a href="#hero" className="navigation__menu-link">
            {isRu ? 'Домашняя страница' : 'Home'}
          </a>
          <a href="#about" className="navigation__menu-link">
            {isRu ? 'Обо мне' : 'About me'}
          </a>
          <a href="#skills" className="navigation__menu-link">
            {isRu ? 'Навыки' : 'Skills'}
          </a>
          <a href="#portfolio" className="navigation__menu-link">
            {isRu ? 'Портфолио' : 'Portfolio'}
          </a>
          <a href="#contacts" className="navigation__menu-link">
            {isRu ? 'Контакты' : 'Contacts'}
          </a>
        </nav>
        <div className="navigation__menu-lang">
          <button
            type="button"
            className={
              isRu
                ? 'navigation__menu-button-lang navigation__menu-button-lang_active'
                : 'navigation__menu-button-lang'
            }
            onClick={() => setIsRu(true)}
          >
            RU <span className="navigation__menu-button-lang_active">|</span>
          </button>
          <button
            type="button"
            className={
              !isRu
                ? 'navigation__menu-button-lang navigation__menu-button-lang_active'
                : 'navigation__menu-button-lang'
            }
            onClick={() => setIsRu(false)}
          >
            ENG
          </button>
        </div>
      </div>
    </>
  );
}
