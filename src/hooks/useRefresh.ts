import { useAuth } from './useAuth';
import { axiosPlain } from '../api/axiosPlain';
import { useCookies } from 'react-cookie';
import { LoginResponse } from 'types';

export const useRefresh = () => {
  const [cookies] = useCookies(['logged']);
  const { setAuth } = useAuth();
  return async () => {
    try {
      const { data } = await axiosPlain.get<LoginResponse | null>(
        'auth/refresh',
        {
          withCredentials: true,
        },
      );
      if (data) {
        setAuth(() => {
          if (cookies.logged) {
            return data;
          } else {
            return null;
          }
        });
        return data.accessToken;
      } else {
        return null;
      }
    } catch (err) {
      return null;
    }
  };
};
