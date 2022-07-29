import { Outlet } from 'react-router-dom';
import { TestFooter } from '../components/TestFooter/TestFooter';
export const MainLayout = () => {
  return (
    <>
      <Outlet />
      <TestFooter />
    </>
  );
};
