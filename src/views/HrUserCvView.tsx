import React from 'react';
import { UserCv } from '../components/UserCv/UserCv';

export const HrUserCvView = () => {
  const { auth } = useAuth();
  return auth?.role === UserRole.STUDENT ? <UserCv /> : null;
};
