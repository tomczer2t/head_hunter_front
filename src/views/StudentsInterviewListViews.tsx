import React from 'react';
import { HrInterviewStudents } from '../components/HrInterviewStudents/HrInterviewStudents';
import { useAuth } from '../hooks/useAuth';
import { UserRole } from 'types';
export const StudentsInterviewListViews = () => {
  const { auth } = useAuth();
  return auth?.role === UserRole.HR ? <HrInterviewStudents /> : null;
};
