import React from 'react';
import { UserRole } from 'types';
import { AdminPanel } from '../components/AdminPanel/AdminPanel';
import { useAuth } from '../hooks/useAuth';
export const AdminPanelViews = () => {
  const { auth } = useAuth();
  return auth?.role === UserRole.ADMIN ? <AdminPanel /> : null;
};
