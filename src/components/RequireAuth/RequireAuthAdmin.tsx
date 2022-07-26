import React, { useEffect } from 'react';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';

export const RequireAuthAdmin = () => {
  const { auth } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (auth?.role !== 'admin') {
      navigate('/login', { state: { from: location.pathname } });
    }
  }, [auth?.role, location.pathname, navigate]);

  return <Outlet />;
};
