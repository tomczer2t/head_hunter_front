import { useAxiosPrivate } from './useAxiosPrivate';
import { useNavigate } from 'react-router-dom';
import { useCookies } from 'react-cookie';
import { useAuth } from './useAuth';

export const useLogoutHandler = () => {
  const axiosPrivate = useAxiosPrivate();
  const navigate = useNavigate();
  const [cookies, setCookie] = useCookies();
  const { setAuth } = useAuth();
  return async () => {
    try {
      await axiosPrivate.get('/auth/logout');
      setAuth(() => null);
      setCookie('logged', false, { path: '/' });
      navigate('/login');
    } catch (err) {
      setAuth(() => null);
      setCookie('logged', false, { path: '/' });
      navigate('/login');
    }
  };
};
