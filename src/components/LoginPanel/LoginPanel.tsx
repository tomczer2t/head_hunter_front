import React from 'react';
import './LoginPanel.css';
import { Link } from 'react-router-dom';

export const LoginPanel = () => {
  return (
    <>
      <div className="login-panel">
        <img className="logo" src="/logo-megak.webp" alt="" />
        <form>
          <div className="container">
            <input type="email" placeholder="E-mail" name="email" required />
            <input
              type="password"
              placeholder="Hasło"
              name="password"
              required
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
