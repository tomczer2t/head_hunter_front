import { Outlet, useNavigate } from 'react-router-dom';
import { useCallback, useEffect } from 'react';
export const MainLayout = () => {
  const navigate = useNavigate();
  const redirect = useCallback(() => {
    navigate('/login');
  }, []);

  useEffect(() => {
    redirect();
  }, []);
  return (
    <>
      <Outlet />
    </>
  );
};
