import React, { useEffect, useMemo, useState } from 'react';
import { Outlet, useLocation, useNavigate, useParams } from 'react-router-dom';

type Params = {
  id: string;
  verificationToken: string;
};

interface RegisterFormData {
  id: string | undefined;
  verificationToken: string | undefined;
  password: string;
  repeatPassword: string;
}

export const RegisterView = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const params = useParams<Params>();
  const [registerFormData, setRegisterFormData] = useState<RegisterFormData>({
    id: params.id,
    verificationToken: params.verificationToken,
    password: '',
    repeatPassword: '',
  });

  console.log(params);

  useEffect(() => {
    if (!params) navigate('/login', { state: { from: location.pathname } });
  }, [location.pathname, navigate, params]);
  return (
    <>
      <h1>Register View</h1>
    </>
  );
};
