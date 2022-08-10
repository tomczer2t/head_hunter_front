import { useAuth } from './useAuth';
import { axiosPlain } from '../api/axiosPlain';
import { LoginResponse } from 'types';
import { useLoggedHandler } from './useLoggedHandler';

export const useRefresh = () => {
  const logged = useLoggedHandler();
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
          if (logged()) {
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
