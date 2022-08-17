import React, { useRef } from 'react';
import githubIcon from '../../../assets/images/github-brands.svg';
import phoneIcon from '../../../assets/images/phone-solid.svg';
import emailIcon from '../../../assets/images/envelope-solid.svg';
import default_avatar from '../../../assets/images/default_avatar.jpg';
import { SingleStudentProfile, UserRole } from 'types';
import { useAuth } from '../../../hooks/useAuth';
import { useNavigate } from 'react-router-dom';
import { useAxiosPrivate } from '../../../hooks/useAxiosPrivate';

import './UserDescription.css';

interface Props {
  student: SingleStudentProfile;
}

export const UserDescription = ({ student }: Props) => {
  const { auth } = useAuth();
  const imgRef = useRef<HTMLImageElement>(null!);
  const axiosPrivate = useAxiosPrivate();
  const navigate = useNavigate();

  const handleNotInterested = async () => {
    await axiosPrivate.delete(`/hr/student/${student.userId}`);
    navigate('/hr');
  };

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
          href={`https://github.com/${student.githubUsername}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          {student.githubUsername}
        </a>
      </div>
      <div className="UserDescription__phone-email-container">
        {student.tel && (
          <>
            <img
              className="UserDescription__phone-icon"
              src={phoneIcon}
              alt="phone icon"
            />
            <span className="UserDescription__phone">{student.tel}</span>
          </>
        )}
        <img
          className="UserDescription__email-icon"
          src={emailIcon}
          alt="email icon"
        />
        <span className="UserDescription__email">{student.email}</span>
      </div>
      {student.bio && (
        <div className="UserDescription__bio">
          <h3 className="UserDescription__bio-title">O mnie</h3>
          <p className="UserDescription__bio-text">{student.bio}</p>
        </div>
      )}
      {auth?.role === UserRole.HR && (
        <>
          <button
            className="UserDescription__button"
            onClick={() => void handleNotInterested()}
          >
            Brak zainteresowania
          </button>
          <button className="UserDescription__button">Zatrudniony</button>
        </>
      )}
    </div>
  );
};
