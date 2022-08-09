import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import { useCallback, useEffect } from 'react';
import { useAuth } from '../hooks/useAuth';
import { useCookies } from 'react-cookie';
import { useRefresh } from '../hooks/useRefresh';
import { useLoggedHandler } from '../hooks/useLoggedHandler';
export const MainLayout = () => {
  const { auth } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const logged = useLoggedHandler();
  const refresh = useRefresh();

  const checkLogged = useCallback(async () => {
    await refresh();
  }, []);

  useEffect(() => {
    if (logged()) {
      void checkLogged();
      navigate(`/${auth == null ? '' : auth.role}`);
    }

    if (!logged() && !auth && !location.pathname.startsWith('/register')) {
      navigate('/login');
    }
  }, [auth?.role]);
  return (
    <>
      <Outlet />
    </>
  );
};
