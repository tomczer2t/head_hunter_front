import React, { useEffect, useState } from 'react';

export interface RegisterFormDataCorrect {
  password: boolean | null;
  repeatPassword: boolean | null;
}

export interface RegisterFormDataMessage {
  password: string;
  repeatPassword: string;
}

interface UseHrForAdminValidation {
  correct: RegisterFormDataCorrect;
  message: RegisterFormDataMessage;
}

export const useRegisterFormDataValidation = (props: {
  password: string;
  repeatPassword: string;
}): UseHrForAdminValidation => {
  const [message, setMessage] = useState<RegisterFormDataMessage>({
    password: '',
    repeatPassword: '',
  });
  const [correct, setCorrect] = useState<RegisterFormDataCorrect>({
    password: null,
    repeatPassword: null,
  });

  //Password validation
  useEffect(() => {
    if (props.password === '') {
      setCorrect((prev: RegisterFormDataCorrect) => ({
        ...prev,
        password: null,
      }));
      setMessage((prev: RegisterFormDataMessage) => ({
        ...prev,
        password: '',
      }));
    } else if (props.password.length < 8 || props.password.length > 64) {
      setCorrect((prev: RegisterFormDataCorrect) => ({
        ...prev,
        password: false,
      }));
      setMessage((prev: RegisterFormDataMessage) => ({
        ...prev,
        password: 'Hasło musi zawierać od 8 do 64 znaków',
      }));
    } else {
      setCorrect((prev: RegisterFormDataCorrect) => ({
        ...prev,
        password: true,
      }));
      setMessage((prev: RegisterFormDataMessage) => ({
        ...prev,
        password: '',
      }));
    }
  }, [props.password]);
  //Repeat password validation
  useEffect(() => {
    if (props.repeatPassword === '') {
      setCorrect((prev: RegisterFormDataCorrect) => ({
        ...prev,
        repeatPassword: null,
      }));
      setMessage((prev: RegisterFormDataMessage) => ({
        ...prev,
        repeatPassword: '',
      }));
    } else if (props.password !== props.repeatPassword) {
      setCorrect((prev: RegisterFormDataCorrect) => ({
        ...prev,
        repeatPassword: false,
      }));
      setMessage((prev: RegisterFormDataMessage) => ({
        ...prev,
        repeatPassword: 'Hasła muszą być takie same ',
      }));
    } else {
      setCorrect((prev: RegisterFormDataCorrect) => ({
        ...prev,
        repeatPassword: true,
      }));
      setMessage((prev: RegisterFormDataMessage) => ({
        ...prev,
        repeatPassword: '',
      }));
    }
  }, [props.password, props.repeatPassword]);

  return {
    message,
    correct,
  };
};
