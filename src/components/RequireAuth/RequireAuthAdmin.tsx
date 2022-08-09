import React, { useCallback, useEffect } from 'react';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';
import { useRefresh } from '../../hooks/useRefresh';
import { useCookies } from 'react-cookie';

export const RequireAuthAdmin = () => {
  const { auth } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const [cookies] = useCookies();
  const refresh = useRefresh();

  const checkLogged = useCallback(async () => {
    if (cookies.logged) {
      await refresh();
    }
  }, []);

  useEffect(() => {
    void checkLogged();
    if (auth?.role !== 'admin' && !cookies.logged) {
      navigate('/login', { state: { from: location.pathname } });
    }
  }, [auth?.role, checkLogged, location.pathname, navigate]);

  return <Outlet />;
};
