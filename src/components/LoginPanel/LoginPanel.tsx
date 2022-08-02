import React, { useState } from 'react';
import './LoginPanel.css';
import { useNavigate, Link } from 'react-router-dom';
import { axios } from '../../api/axios';
import { AxiosError, AxiosResponse } from 'axios';
import { ErrorLogin } from './ErrorLogin';
import logo from '../../assets/images/logo-megak.webp';
import { useAuth } from '../../hooks/useAuth';
import { LoginResponse, UserRole } from 'types';

export const LoginPanel = () => {
  const { setAuth } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const [statusErrorCode, setStatusErrorCode] = useState(200);

  const sendAction = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = (await axios.post('/auth/login', {
        email,
        password,
      })) as AxiosResponse<LoginResponse>;
      setAuth(response.data);
      const { firstName, lastName, role, githubUsername, accessToken } =
        response.data;
      const redirectionPath = {
        [UserRole.STUDENT]: '/user/cv',
        [UserRole.HR]: '/hr/all-students',
        [UserRole.ADMIN]: '/admin/admin-panel',
      };

      navigate(redirectionPath[role], {
        replace: true,
        state: { firstName, lastName, role, githubUsername, accessToken },
      });
    }  catch (error) {
      const err = error as AxiosError
      setStatusErrorCode(err.response?.status ?? 400);
    }

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
