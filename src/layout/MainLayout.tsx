import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { useAuth } from '../hooks/useAuth';
import { useCookies } from 'react-cookie';
export const MainLayout = () => {
  const [cookies] = useCookies();
  const { auth } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    console.log(!auth);
    console.log(!cookies.looged);
    console.log(!location.pathname.startsWith('/register'));
    if (
      !cookies.logged &&
      !auth &&
      !location.pathname.startsWith('/register')
    ) {
      navigate('/login');
    }
  }, [auth, navigate, location.pathname, cookies.logged]);
  return (
    <>
      <Outlet />
    </>
  );
};
