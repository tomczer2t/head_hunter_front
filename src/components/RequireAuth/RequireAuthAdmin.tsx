import React, { useCallback, useEffect } from 'react';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';
import { useRefresh } from '../../hooks/useRefresh';
import { useLoggedHandler } from '../../hooks/useLoggedHandler';

export const RequireAuthAdmin = () => {
  const { auth } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const refresh = useRefresh();
  const logged = useLoggedHandler();

  const checkLogged = useCallback(async () => {
    if (logged()) {
      await refresh();
    }
  }, []);

  useEffect(() => {
    void checkLogged();
    if (auth?.role !== 'admin' && !logged()) {
      navigate('/login', { state: { from: location.pathname } });
    }
  }, [auth?.role, checkLogged, location.pathname, navigate]);

  return <Outlet />;
};
