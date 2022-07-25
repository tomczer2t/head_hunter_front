import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/megak_logo.webp';
import default_avatar from '../../assets/default_avatar.jpg';

import './TopBar.css';

export const TopBar = () => {
  const [menuIsOpen, setMenuIsOpen] = useState(false);

  const openMenu = () => {
    console.log('Kliknąłeś w menu');
    setMenuIsOpen((prevState) => !prevState);
  };

  return (
    <div className="top-bar">
      <div className="top-bar-logo-wrapper">
        <img
          className="top-bar-logo-wrapper__megak-logo"
          src={logo}
          alt="megak logo"
        />
      </div>
      <div className="top-bar__hr-container-menu" onClick={openMenu}>
        <img
          className="top-bar__hr-avatar"
          src={default_avatar}
          alt="hr avatar"
        />
        <span className="top-bar__hr-avatar-name">Mateusz Kowalski</span>
        <button className="top-bar__hr-menu-button"></button>
        <ul
          className={
            menuIsOpen ? 'top-bar__hr-menu is-open' : 'top-bar__hr-menu'
          }
        >
          <li className="top-bar__hr-menu-element">
            <Link className="top-bar__hr-menu-element-link" to={'/hr'}>
              Konto
            </Link>
          </li>
          <li className="top-bar__hr-menu-element">
            <Link className="top-bar__hr-menu-element-link" to={'/login'}>
              Wyloguj
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};
