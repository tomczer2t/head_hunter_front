import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { useAuth } from '../hooks/useAuth';
export const MainLayout = () => {
  const { auth } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (!auth && !location.pathname.startsWith('/register')) {
      navigate('/login');
    }
  }, [auth, navigate, location.pathname]);
  return (
    <>
      <Outlet />
    </>
  );
};
