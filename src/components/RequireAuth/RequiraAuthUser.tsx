import React, { useCallback, useEffect } from 'react';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';

export const RequireAuthUser = () => {
  const { auth } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (auth?.role !== 'student')
      navigate('/login', { state: { from: location.pathname } });
  }, [auth?.role, navigate, location.pathname]);

  return <Outlet />;
};
