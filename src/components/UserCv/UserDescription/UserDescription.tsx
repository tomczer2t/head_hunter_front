import React from 'react';
import githubIcon from '../../../assets/images/github-brands.svg';
import phoneIcon from '../../../assets/images/phone-solid.svg';
import emailIcon from '../../../assets/images/envelope-solid.svg';
import default_avatar from '../../../assets/images/default_avatar.jpg';

import './UserDescription.css';

export const UserDescription = () => {
  return (
    <div className="UserDescription">
      <img
        className="UserDescription__user-avatar"
        src={default_avatar}
        alt="user avatar"
      />
      <div className="UserDescription__full-name">
        <span className="UserDescription__first-name">Jan</span>
        <span className="UserDescription__last-name">Kowalski</span>
      </div>
      <div className="UserDescription__github-container">
        <img
          className="UserDescription__github-icon"
          src={githubIcon}
          alt="github icon"
        />
        <a
          className="UserDescription__github-name"
          href="https://github.com/kp1976"
          target="_blank"
          rel="noopener noreferrer"
        >
          jankowalski
        </a>
      </div>
      <div className="UserDescription__phone-email-container">
        <img
          className="UserDescription__phone-icon"
          src={phoneIcon}
          alt="phone icon"
        />
        <span className="UserDescription__phone">+48 566 072 227</span>
        <img
          className="UserDescription__email-icon"
          src={emailIcon}
          alt="email icon"
        />
        <span className="UserDescription__email">jankowalski@gmail.com</span>
      </div>
      <div className="UserDescription__bio">
        <h3 className="UserDescription__bio-title">O mnie</h3>
        <p className="UserDescription__bio-text">
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
          sed diam voluptua. At vero eos et accusam et justo duo
        </p>
      </div>
      <button className="UserDescription__button">Brak zainteresowania</button>
      <button className="UserDescription__button">Zatrudniony</button>
    </div>
  );
};
