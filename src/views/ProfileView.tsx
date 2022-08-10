import React from 'react';
import { UserProfileForm } from '../components/UserProfileForm/UserProfileForm';
import { useAuth } from '../hooks/useAuth';
import { UserRole } from 'types';
export const ProfileView = () => {
  const { auth } = useAuth();
  return auth?.role === UserRole.STUDENT ? <UserProfileForm /> : null;
};
