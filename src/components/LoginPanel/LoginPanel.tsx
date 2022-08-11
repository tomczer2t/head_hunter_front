import React, { useState } from 'react';
import './LoginPanel.css';
import { useNavigate, Link } from 'react-router-dom';
import { AxiosError } from 'axios';
import { ErrorLogin } from './ErrorLogin';
import logo from '../../assets/images/logo-megak.webp';
import { useAuth } from '../../hooks/useAuth';
import { LoginResponse } from 'types';
import { axiosPlain } from '../../api/axiosPlain';
import { useCookies } from 'react-cookie';
export const LoginPanel = () => {
  const [cookies, setCookie] = useCookies();
  const { auth, setAuth } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const [statusErrorCode, setStatusErrorCode] = useState(200);

  const sendAction = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const { data } = await axiosPlain.post<LoginResponse>(
        '/auth/login',
        {
          email,
          password,
        },
        { withCredentials: true },
      );
      setAuth(() => data);

      setCookie('logged', true, { path: '/' });

      console.log(data.role);
      navigate(`/${data.role}`);
    } catch (error) {
      console.log(error);
      const err = error as AxiosError;
      setStatusErrorCode(err.response?.status ?? 400);
    }

    // @Todo co ma się stać po rejestracji
    // @Todo obsługa błędów
  };

  return (
    <>
      <div className="login-panel">
        <img className="logo" src={logo} alt="" />
        <form onSubmit={(e) => void sendAction(e)}>
          <div className="container">
            <input
              type="email"
              placeholder="E-mail"
              name="email"
              required
              onChange={(e) => {
                setEmail(e.target.value);
                setStatusErrorCode(200);
              }}
            />
            <input
              type="password"
              placeholder="Hasło"
              name="password"
              required
              onChange={(e) => {
                setPassword(e.target.value);
                setStatusErrorCode(200);
              }}
            />
            <Link className="linkForgotPass" to="/send-email">
              Zapomniałeś hasła?
            </Link>
            <div className="login-panel__last-line">
              <button className="subminBnt" type="submit">
                Zaloguj się
              </button>
            </div>
          </div>
        </form>
        {statusErrorCode > 299 ? (
          <ErrorLogin statusCode={statusErrorCode ? statusErrorCode : 200} />
        ) : null}
      </div>
    </>
  );
};
