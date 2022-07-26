import React, { createContext, useState, Dispatch } from 'react';
import { LoginResponse } from 'types';

export const AuthContext = createContext<{
  auth: LoginResponse | null;
  setAuth: Dispatch<React.SetStateAction<LoginResponse | null>>;
}>({
  auth: null,
  setAuth: () => {},
});

interface Props {
  children?: React.ReactNode;
}

export const AuthProvider = ({ children }: Props) => {
  const [auth, setAuth] = useState<LoginResponse | null>(null);

  return (
    <AuthContext.Provider value={{ auth, setAuth }}>
      {children}
    </AuthContext.Provider>
  );
};
