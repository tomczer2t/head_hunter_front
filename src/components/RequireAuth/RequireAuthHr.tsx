import React, { useEffect } from 'react';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';

export const RequireAuthHr = () => {
  const { auth } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (false) navigate('/login', { state: { from: location.pathname } });
  }, [auth, navigate, location.pathname]);

  return <Outlet />;
};
