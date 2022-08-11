import React from 'react';
import { StudentCv } from '../components/StudentCv/StudentCv';
import { useAuth } from '../hooks/useAuth';
import { UserRole } from 'types';

export const StudentCvView = () => {
  const { auth } = useAuth();
  return auth?.role === UserRole.STUDENT ? <StudentCv /> : null;
};
