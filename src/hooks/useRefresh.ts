import { useAuth } from './useAuth';
import { axios } from '../api/axios';
import { LoginResponse } from 'types';

type Data = LoginResponse;

export const useRefresh = () => {
  const { setAuth } = useAuth();
  return async () => {
    const { data } = await axios.get<Data>('auth/refresh', {
      withCredentials: true,
    });
    setAuth((prevState) => {
      if (prevState === null) return null;
      return { ...prevState, accessToken: data.accessToken } as Data;
    });
    return data.accessToken;
  };
};
