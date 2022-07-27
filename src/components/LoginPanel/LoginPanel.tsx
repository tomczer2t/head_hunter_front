import React, { useState } from 'react';
import './LoginPanel.css';
import { useNavigate, Link } from 'react-router-dom';
import { axios } from '../../api/axios';
import { AxiosError } from 'axios';
import { ErrorLogin } from './ErrorLogin';

export interface LoginResponse {
  id: string;
  role: string;
  accessToken: string;
  firstName: string;
  lastName: string;
  githubUsername: string | null;
}

export const LoginPanel = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const [statusErrorCode, setStatusErrorCode] = useState(200);

  const sendAction = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.length < 6 || password.length < 5) {
      setStatusErrorCode(300);
      return;
    }
    axios
      .post('/auth/login', {
        email,
        password,
      })
      .then((response) => {
        const { id, firstName, lastName, role, githubUsername, accessToken } =
          response.data as LoginResponse;
        const redirectionPath = [
          '/login',
          '/user/cv',
          '/hr/all-students',
          '/admin/admin-panel',
        ];
        let num;
        switch (role) {
          case 'hr':
            num = 2;
            break;
          case 'adamin':
            num = 3;
            break;
          case 'student':
            num = 2;
            break;
          default:
            num = 0;
        }
        navigate(redirectionPath[num], {
          replace: true,
          state: { id, firstName, lastName, role, githubUsername, accessToken },
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
        <img className="logo" src="/logo-megak.webp" alt="" />
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
              Nie masz konta?
              <Link className="registerNewUser" to="/">
                Zarejestruj się
              </Link>
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
