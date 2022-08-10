import React, { useState } from 'react';
import './PasswordRecovery.css';
import logo from '../../assets/images/logo-megak.webp';

export const PasswordRecovery = () => {
  const [email, setEmail] = useState('');
  const sendPasswordRecovery = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(email);
    // axios
    //     .post('/auth/login', {
    //         email,
    //     });
  };

  return (
    <>
      <div className="login-panel">
        <img className="logo" src={logo} alt="MEGA K" />
        <form onSubmit={sendPasswordRecovery}>
          <div className="container">
            <input
              type="email"
              placeholder="E-mail"
              name="recoveryEmail"
              required
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
            <p className="p-info">
              Na podany adres zostanie wysłany email z przypomnieniem
            </p>
            <div className="login-panel__last-line">
              <button className="subminBnt" type="submit">
                Wyślij
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};
