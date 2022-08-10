import React, { useRef } from 'react';
import githubIcon from '../../../assets/images/github-brands.svg';
import phoneIcon from '../../../assets/images/phone-solid.svg';
import emailIcon from '../../../assets/images/envelope-solid.svg';
import default_avatar from '../../../assets/images/default_avatar.jpg';
import { SingleStudentProfile } from 'types';

import './UserDescription.css';

interface Props {
  student: SingleStudentProfile;
}

export const UserDescription = ({ student }: Props) => {
  const imgRef = useRef<HTMLImageElement>(null!);

  return (
    <div className="UserDescription">
      <img
        ref={imgRef}
        className="UserDescription__user-avatar"
        src={
          student.githubUsername
            ? `https://github.com/${student.githubUsername}.png`
            : default_avatar
        }
        onErrorCapture={() => (imgRef.current.src = default_avatar)}
        alt="user avatar"
      />

      <div className="UserDescription__full-name">
        <span className="UserDescription__first-name">{student.firstName}</span>
        <span className="UserDescription__last-name">{student.lastName}</span>
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
          {student.githubUsername}
        </a>
      </div>
      <div className="UserDescription__phone-email-container">
        <img
          className="UserDescription__phone-icon"
          src={phoneIcon}
          alt="phone icon"
        />
        <span className="UserDescription__phone">brak w zwrotce</span>
        <img
          className="UserDescription__email-icon"
          src={emailIcon}
          alt="email icon"
        />
        <span className="UserDescription__email">brak w zwrotce</span>
      </div>
      {student.bio && (
        <div className="UserDescription__bio">
          <h3 className="UserDescription__bio-title">O mnie</h3>
          <p className="UserDescription__bio-text">{student.bio}</p>
        </div>
      )}
      <button className="UserDescription__button">Brak zainteresowania</button>
      <button className="UserDescription__button">Zatrudniony</button>
    </div>
  );
};
