import { useAuth } from './useAuth';
import { axios } from '../api/axios';

export const useRefresh = () => {
  const { setAuth } = useAuth();
  return async (): Promise<string> => {
    const { data: axiosData } = await axios.get('auth/refresh', {
      withCredentials: true,
    });
    setAuth(axiosData.data);
    return axiosData.data.accessToken;
  };
};
