import React from 'react';
import { UserCv } from '../components/UserCv/UserCv';
import { useAuth } from '../hooks/useAuth';
import { UserRole } from 'types';
export const CvView = () => {
  const { auth } = useAuth();
  return auth?.role === UserRole.STUDENT ? <UserCv /> : null;
};
