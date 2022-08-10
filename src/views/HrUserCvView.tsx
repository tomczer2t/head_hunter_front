import React from 'react';
import { UserCv } from '../components/UserCv/UserCv';
import { useAuth } from '../hooks/useAuth';
import { UserRole } from 'types';

export const HrUserCvView = () => {
  const { auth } = useAuth();
  return auth?.role === UserRole.HR ? <UserCv /> : null;
};
