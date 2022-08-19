import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/images/logo-megak.webp';
import defaultAvatar from '../../assets/images/default_avatar.jpg';

import './TopBar.css';
import { useAuth } from '../../hooks/useAuth';
import { useLogoutHandler } from '../../hooks/useLogout';
import { useAvatar } from '../../hooks/useAvatar';

export const TopBar = () => {
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  const { auth } = useAuth();
  const logoutHandler = useLogoutHandler();
  const avatar = useAvatar();

  const openMenu = () => {
    setMenuIsOpen((prevState) => !prevState);
  };

  return (
    <div className="top-bar">
      <div className="top-bar__logo-wrapper">
        <img className="top-bar__megak-logo" src={logo} alt="megak logo" />
      </div>
      <div className="top-bar__hr-container-menu" onClick={openMenu}>
        <img
          className="top-bar__hr-avatar"
          src={
            typeof auth?.githubUsername === 'string'
              ? void avatar(auth?.githubUsername)
              : defaultAvatar
          }
          alt="hr avatar"
        />
        <span className="top-bar__hr-avatar-name">
          {auth?.firstName} {auth?.lastName}
        </span>
        <button className="top-bar__hr-menu-button"></button>
        <ul
          className={
            menuIsOpen ? 'top-bar__hr-menu is-open' : 'top-bar__hr-menu'
          }
        >
          <li className="top-bar__hr-element">
            <Link className="top-bar__hr-link" to={'/hr/interview-students'}>
              Konto
            </Link>
          </li>
          <li className="top-bar__hr-element">
            <button
              className="top-bar__button-logout"
              onClick={() => void logoutHandler()}
            >
              Wyloguj
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};
