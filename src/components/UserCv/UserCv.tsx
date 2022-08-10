import React, { useEffect } from 'react';
import { TopBar } from '../TopBar/TopBar';
import { Link } from 'react-router-dom';
import { UserDescription } from './UserDescription/UserDescription';
import { UserTable } from './UserTable/UserTable';
import './UserCv.css';
import { UserProfileForm } from '../UserProfileForm/UserProfileForm';
import { useRefresh } from '../../hooks/useRefresh';
import { useCookies } from 'react-cookie';

export const UserCv = () => {
  const refresh = useRefresh();
  const [cookies, setCookie] = useCookies(['logged']);

  console.log(cookies.logged);

  useEffect(() => {}, []);

  return (
    <div className="UserCv">
      <TopBar />
      <Link className="UserCv__interview-student-link" to={'/student/profile'}>
        Profil
      </Link>
      <main className="UserCv__container">
        <UserDescription />
        <UserTable />
      </main>
    </div>
  );
};
