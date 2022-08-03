import React, { useEffect } from 'react';
import './Header.css';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../../hooks/useAuth';
import { useAxiosPrivate } from '../../../hooks/useAxiosPrivate';

interface Props {
  section: string;
}

export const Header = (props: Props) => {
  const axiosPrivate = useAxiosPrivate();
  const navigate = useNavigate();
  const { setAuth } = useAuth();

  const logoutHandler = async () => {
    try {
      const res = await axiosPrivate('/auth/logout');
      setAuth(null);
      console.log('elo');
      console.log(res);
      navigate('/login');
    } catch (err) {
      console.log('error?');
      console.log(err);
    }
  };

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
