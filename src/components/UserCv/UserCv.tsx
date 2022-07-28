import React from 'react';
import { TopBar } from '../TopBar/TopBar';
import { Link } from 'react-router-dom';
import { UserDescription } from './UserDescription/UserDescription';
import { UserTable } from './UserTable/UserTable';

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
        <UserTable />
      </main>
    </div>
  );
};
