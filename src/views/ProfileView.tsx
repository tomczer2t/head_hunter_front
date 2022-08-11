import React from 'react';
import { useAuth } from '../hooks/useAuth';
import { UserRole } from 'types';
import { StudentProfile } from '../components/StudentProfile/StudentProfile';
import { TopBar } from '../components/TopBar/TopBar';

export const ProfileView = () => {
  const { auth } = useAuth();
  return auth?.role === UserRole.STUDENT ? (
    <>
      <TopBar />
      <StudentProfile />
    </>
  ) : null;
};
