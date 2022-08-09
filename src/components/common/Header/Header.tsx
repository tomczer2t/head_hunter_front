import React, { useEffect } from 'react';
import './Header.css';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../../hooks/useAuth';
import { useAxiosPrivate } from '../../../hooks/useAxiosPrivate';
import { useCookies } from 'react-cookie';
interface Props {
  section: string;
}

export const Header = (props: Props) => {
  const axiosPrivate = useAxiosPrivate();
  const navigate = useNavigate();
  const [cookies, setCookie] = useCookies();
  const { auth, setAuth } = useAuth();

  const logoutHandler = async () => {
    try {
      await axiosPrivate.get('/auth/logout');
      setAuth(() => null);
      setCookie('logged', false, { path: '/' });
      navigate('/login');
    } catch (err) {
      setAuth(() => null);
      setCookie('logged', false, { path: '/' });
      navigate('/login');
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
