import React, { useEffect } from 'react';
import './Header.css';
import { useLogoutHandler } from '../../../hooks/useLogout';
interface Props {
  section: string;
}

export const Header = (props: Props) => {
  const logoutHandler = useLogoutHandler();

  return (
    <div className="header">
      <div className="header__logo"></div>
      <div className="header__section">
        <h2>{props.section}</h2>
      </div>
      <div className="header__content"></div>
      <button
        className="header__btn-logout"
        onClick={() => {
          void logoutHandler();
        }}
      >
        Wyloguj
      </button>
    </div>
  );
};
