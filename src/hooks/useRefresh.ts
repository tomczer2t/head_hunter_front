import { useAuth } from './useAuth';
import { axios } from '../api/axios';
import { LoginResponse } from 'types';

type Data = LoginResponse;

export const useRefresh = async () => {
  const { setAuth } = useAuth();
  return async () => {
    const { data } = await axios.get<Data | null>('auth/refresh', {
      withCredentials: true,
    });
    if (data) {
      setAuth((prev: LoginResponse | null) => {
        if (prev) {
          return {
            ...prev,
            accessToken: data.accessToken,
          };
        } else {
          return {
            userRole: data.userRole,
            accessToken: data.accessToken,
            firstName: data.firstName,
            lastName: data.lastName,
            githubUsername: data.githubUsername,
          };
        }
      });

      return data.accessToken;
    } else {
      setAuth(null);
      return null;
    }
  };
};
