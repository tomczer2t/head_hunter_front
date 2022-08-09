import React, { useCallback, useEffect } from 'react';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';
import { useRefresh } from '../../hooks/useRefresh';
import { useLoggedHandler } from '../../hooks/useLoggedHandler';

export const RequireAuthUser = () => {
  const { auth } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const logged = useLoggedHandler();
  const refresh = useRefresh();

  const checkLogged = useCallback(async () => {
    if (logged()) {
      await refresh();
    }
  }, []);

  useEffect(() => {
    void checkLogged();
    if (auth?.role !== 'student')
      navigate('/login', { state: { from: location.pathname } });
  }, [auth, navigate, location.pathname]);

  return <Outlet />;
};
