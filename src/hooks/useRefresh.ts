import { useAuth } from './useAuth';

import { axiosPlain } from '../api/axiosPlain';
import { useCookies } from 'react-cookie';
import { LoginResponse } from 'types';
import { log } from 'util';

export const useRefresh = () => {
  const [cookies] = useCookies(['logged']);
  const { auth, setAuth } = useAuth();
  return async () => {
    try {
      const { data } = await axiosPlain.get<LoginResponse | null>(
        'auth/refresh',
        {
          withCredentials: true,
        },
      );
      if (data) {
        console.log(auth);
        setAuth((prevState: LoginResponse | null) => {
          if (prevState === null && cookies.logged) {
            return data;
          } else {
            return {
              ...prevState,
              role: data.role,
              accessToken: data.accessToken,
              accountStatus: data.accountStatus,
            };
          }
        });
        console.log(auth);
        return data.accessToken;
      } else {
        return null;
      }
    } catch (err) {
      return null;
    }
  };
};
