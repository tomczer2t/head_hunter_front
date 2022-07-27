import React, { useState } from 'react';
import './LoginPanel.css';
import { Link } from 'react-router-dom';
import { axios } from '../../api/axios';
import { useNavigate } from 'react-router-dom';

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

  const sendAction = (e: React.FormEvent) => {
    e.preventDefault();
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
      .catch(function (error) {
        console.log(error);
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
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              placeholder="Hasło"
              name="password"
              required
              onChange={(e) => setPassword(e.target.value)}
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
      </div>
    </>
  );
};
