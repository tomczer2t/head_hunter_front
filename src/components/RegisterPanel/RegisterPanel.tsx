import React, { useState } from 'react';
import './RegisterPanel.css';
import { useNavigate, useParams } from 'react-router-dom';
import { useRegisterFormDataValidation } from '../../hooks/validationForm/useRegisterFormDataValidation';
import { FormInput } from '../common/FormInput/FormInput';
import logo from './../../assets/images/logo-megak.webp';
import { MessageResponse } from '../common/MessageResponse/MessageResponse';
import { axiosPlain } from '../../api/axiosPlain';

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
  const params = useParams<Params>();
  const [showMessageResponse, setShowMessageResponse] = useState(false);
  const [messageResponse, setMessageResponse] = useState('');
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

  const validForm = () => {
    let correctForm = true;
    for (const correctElement of Object.entries(correct)) {
      if (correctElement[1] !== true) {
        return (correctForm = false);
      }
    }
    return correctForm;
  };

  const sendRegisterFormData = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      if (validForm()) {
        const res = await axiosPlain.post('/user', registerFormData);
        navigate('/login');
      } else {
        setMessageResponse(() => 'Hasła nie spełniają warunków ');
        setShowMessageResponse(() => true);
      }
    } catch (err) {
      console.log(err);
      setMessageResponse(() => 'Coś poszło nie tak spróbuj później ');
      setShowMessageResponse(() => true);
    }
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
      <MessageResponse
        message={messageResponse}
        showMessageResponse={showMessageResponse}
        closeMessage={setShowMessageResponse}
      />
      <form
        className="register-panel__form"
        onSubmit={(e) => void sendRegisterFormData(e)}
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
