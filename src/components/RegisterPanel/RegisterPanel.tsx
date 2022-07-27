import React, { useEffect, useState } from 'react';
import './RegisterPanel.css';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { useRegisterFormDataValidation } from '../../hooks/validationForm/useRegisterFormDataValidation';
import { FormInput } from '../common/FormInput/FormInput';
import logo from './../../assets/images/logo-megak.webp';
import axiosDefault from 'axios';

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

export const RegisterPanel = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const params = useParams<Params>();
  const [registerFormData, setRegisterFormData] = useState<RegisterFormData>({
    id: params.id,
    verificationToken: params.verificationToken,
    password: '',
    repeatPassword: '',
  });
  const { correct, message } = useRegisterFormDataValidation({
    password: registerFormData.password,
    repeatPassword: registerFormData.repeatPassword,
  });

  console.log(params);

  //@TODO set type res and add handle message for user
  useEffect(() => {
    // navigate('/login', { state: { from: location.pathname } });
  }, []);

  const sendRegisterFormData = async () => {
    const res = await axiosDefault.post('/register', registerFormData);
  };

  const changedHandle = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    return setRegisterFormData((registerParams: RegisterFormData) => ({
      ...registerParams,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <div className="register-panel">
      <form
        className="register-panel__form"
        onSubmit={() => void sendRegisterFormData()}
      >
        <img className={'register-panel__img'} src={logo} alt={'logo-megak'} />
        <FormInput
          correct={correct.password}
          name={'password'}
          value={registerFormData.password}
          setValue={changedHandle}
          placeholder={'hasło'}
          type={'password'}
          message={message.password}
        />
        <FormInput
          correct={correct.repeatPassword}
          name={'repeatPassword'}
          value={registerFormData.repeatPassword}
          setValue={changedHandle}
          placeholder={'powtórz hasło'}
          type={'password'}
          message={message.repeatPassword}
        />
        <button type="submit">Ustaw hasło</button>
      </form>
    </div>
  );
};
