import { useCookies } from 'react-cookie';

export const useLoggedHandler = () => {
  const [cookies] = useCookies();
  return (): boolean => {
    let logged = null;
    if (typeof cookies.logged === 'string') {
      logged = JSON.parse(cookies.logged) as boolean;
      return logged;
    }
    return false;
  };
};
