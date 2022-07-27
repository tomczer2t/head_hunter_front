import React from 'react';
import { TopBar } from '../TopBar/TopBar';
import { Link } from 'react-router-dom';
import { UserDescription } from './UserDescription/UserDescription';
import { UserTabel } from './UserTable/UserTabel';

import './UserCv.css';

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
      <main className="UserCv__container">
        <UserDescription />
        <UserTabel />
      </main>
    </div>
  );
};
