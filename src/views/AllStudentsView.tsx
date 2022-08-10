import React from 'react';
import { HrAllStudents } from '../components/HrAllStudents/HrAllStudents';
import { useAuth } from '../hooks/useAuth';
import { UserRole } from 'types';
export const AllStudentsView = () => {
  const { auth } = useAuth();
  return auth?.role === UserRole.HR ? <HrAllStudents /> : null;
};
