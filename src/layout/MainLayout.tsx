import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import { useCallback, useEffect } from 'react';
import { useAuth } from '../hooks/useAuth';
import { useCookies } from 'react-cookie';
import { useRefresh } from '../hooks/useRefresh';
import { useLoggedHandler } from '../hooks/useLoggedHandler';
import { useLogoutHandler } from '../hooks/useLogout';
export const MainLayout = () => {
  const { auth } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const logged = useLoggedHandler();
  const refresh = useRefresh();
  const logoutHandler = useLogoutHandler();

  const checkLogged = useCallback(async () => {
    const accessToken = await refresh();
    if (!accessToken) {
      await logoutHandler();
      navigate('/login');
    }
  }, [logged]);

  useEffect(() => {
    if (logged()) {
      void checkLogged();
      navigate(`/${auth == null ? '' : auth.role}`);
    }

    if (
      !logged() &&
      !auth &&
      !location.pathname.startsWith('/register') &&
      !location.pathname.startsWith('/send-email')
    ) {
      navigate('/login');
    }
  }, [auth?.role]);
  return (
    <>
      <Outlet />
    </>
  );
};
