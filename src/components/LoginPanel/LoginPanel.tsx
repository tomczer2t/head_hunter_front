import React, { useState } from 'react';
import './LoginPanel.css';
import { useNavigate, Link } from 'react-router-dom';
import { axios } from '../../api/axios';
import { AxiosError, AxiosResponse } from 'axios';
import { ErrorLogin } from './ErrorLogin';
import logo from '../../assets/images/logo-megak.webp';
import { useAuth } from '../../hooks/useAuth';
import {LoginResponse, UserRole} from 'types';

export const LoginPanel = () => {
  const { setAuth } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const [statusErrorCode, setStatusErrorCode] = useState(200);

  const sendAction = (e: React.FormEvent) => {
    e.preventDefault();
    axios
      .post('/auth/login', {
        email,
        password,
      })
      .then((response: AxiosResponse<LoginResponse>) => {
        setAuth(response.data);
        const { firstName, lastName, role, githubUsername, accessToken } =
          response.data;
        const redirectionPath = [
          '/login',
          '/user/cv',
          '/hr/all-students',
          '/admin/admin-panel',
        ];
        let num;
        switch (role) {
          case UserRole.HR:
            num = 2;
            break;
          case UserRole.ADMIN:
            num = 3;
            break;
          case UserRole.STUDENT:
            num = 2;
            break;
          default:
            num = 0;
        }
        navigate(redirectionPath[num], {
          replace: true,
          state: { firstName, lastName, role, githubUsername, accessToken },
        });
      })
      .catch(function (error: AxiosError) {
        setStatusErrorCode(error.response?.status ?? 200);
      });
    // @Todo co ma się stać po rejestracji
    // @Todo obsługa błędów
  };

  return (
    <>
      <div className="login-panel">
        <img className="logo" src={logo} alt="" />
        <form onSubmit={sendAction}>
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
            <Link className="linkForgotPass" to="/">
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
