import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import { useCallback, useEffect } from 'react';
import { useAuth } from '../hooks/useAuth';
import { useCookies } from 'react-cookie';
import { useRefresh } from '../hooks/useRefresh';
export const MainLayout = () => {
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
    let logged = null;
    if (typeof cookies.logged == 'string') {
      logged = JSON.parse(cookies.logged) as boolean;
    }

    if (logged && auth) {
      navigate(`/${auth.role}`);
    }

    if (!logged && !auth && !location.pathname.startsWith('/register')) {
      navigate('/login');
    }
  }, [auth?.role]);
  return (
    <>
      <Outlet />
    </>
  );
};
