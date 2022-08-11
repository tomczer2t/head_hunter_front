import React from 'react';
import { useAuth } from '../hooks/useAuth';
import { UserRole } from 'types';
import { HrUserCv } from '../components/HrUserCv/HrUserCv';

export const HrUserCvView = () => {
  const { auth } = useAuth();
  return auth?.role === UserRole.HR ? <HrUserCv /> : null;
};
