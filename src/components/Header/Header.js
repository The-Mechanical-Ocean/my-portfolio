import React from 'react';
import './Header.css';

function Header() {
  return (
    <header className='header'>
      <div className='header__link-container'>
        <a href='' className='header__link'>Home</a>
        <a href='' className='header__link'>About me</a>
        <a href='' className='header__link'>Skills</a>
        <a href='' className='header__link'>Portfolio</a>
        <a href='' className='header__link'>Contacts</a>
      </div>
      {/* <div className='header__menu'></div> */}
    </header>
  );
};

export default Header;

