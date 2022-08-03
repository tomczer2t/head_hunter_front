import React from 'react';
import { TopBar } from '../TopBar/TopBar';

import './UserCv.css';
import { Link } from 'react-router-dom';
import { UserProfileForm } from '../UserProfileForm/UserProfileForm';

export const UserCv = () => {
  return (
    <div className="UserCv">
      <TopBar />
      <Link
        className="UserCv__interview-student-link"
        to={'/hr/interview-students'}
      >
        wróć
      </Link>
      <UserProfileForm />
    </div>
  );
};
