import React, { useEffect, useState } from 'react';
import './FormForAddingHr.css';
import { FormInput } from '../common/FormInput/FormInput';
import { useHrFormDataForAdminValidation } from '../../hooks/validationForm/useHrFormDataForAdminValidation';
import { axiosPlain, axiosPrivate } from '../../api/axiosPlain';
import { MessageResponse } from '../common/MessageResponse/MessageResponse';
import axios, { AxiosError, AxiosResponse } from 'axios';
import { useAxiosPrivate } from '../../hooks/useAxiosPrivate';
import { log } from 'util';

export interface HrFormDataForAdmin {
  email: string;
  firstName: string;
  lastName: string;
  company: string;
  maxReservedStudents: number;
}

export const FormForAddingHr = () => {
  // const axiosPrivate = useAxiosPrivate();
  const [hrFormData, setHrFormData] = useState<HrFormDataForAdmin>({
    email: '',
    firstName: '',
    lastName: '',
    company: '',
    maxReservedStudents: 0,
  });
  const [emailExist, setEmailExist] = useState<boolean>(false);
  const [showMessageResponse, setShowMessageResponse] =
    useState<boolean>(false);
  const [messageResponse, setMessageResponse] = useState('');
  const [correctForm, setCorrectForm] = useState(false);

  const { correct, message } = useHrFormDataForAdminValidation({
    hrFormData,
    emailExist,
  });
  const checkValidForm = () => {
    setCorrectForm(true);
    for (const correctElement of Object.entries(correct)) {
      if (correctElement[1] !== true) {
        setCorrectForm(false);
      }
    }
  };

  useEffect(() => {}, [showMessageResponse]);
  // @TODO set type response

  const sendForm = async (e: React.FormEvent<HTMLFormElement>) => {
    try {
      e.preventDefault();
      checkValidForm();
      if (correctForm) {
        const res: AxiosResponse<any> = await axiosPlain.post(
          '/admin/hr',
          hrFormData,
        );
        setMessageResponse(() => 'HR dodany pomyślnie');
        setShowMessageResponse(() => true);
      } else {
        setMessageResponse(() => 'Uzupełnij formularz');
        setShowMessageResponse(() => true);
      }
    } catch (err) {
      const error = err as AxiosError<{ error: string }> | Error;
      if(axios.isAxiosError(error)){
        if (error.response?.data.error === 'Conflict') {
          setMessageResponse(() => `Email już istnieje w bazie `);
        }
        console
      }else{
        setMessageResponse(
          () => `Coś poszło nie tak na serwerze (sprawdź konsole)`,
        );
      setShowMessageResponse(() => true);
    }
  };

  const changedHandle = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    return setHrFormData((loginParams: HrFormDataForAdmin) => ({
      ...loginParams,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <div className="form-adding-hr">
      <MessageResponse
        message={messageResponse}
        showMessageResponse={showMessageResponse}
        closeMessage={setShowMessageResponse}
      />
      <form
        className="form-adding-hr__form"
        onSubmit={(event) => {
          void sendForm(event);
        }}
      >
        <h3 className="form-adding-hr__form__title">Dodawanie HR</h3>
        <FormInput
          name={'email'}
          value={hrFormData.email}
          type="text"
          setValue={changedHandle}
          placeholder="email"
          correct={correct.email}
          message={message.email}
        />
        <FormInput
          name={'firstName'}
          value={hrFormData.firstName}
          type="text"
          setValue={changedHandle}
          placeholder="imię"
          correct={correct.firstName}
          message={message.firstName}
        />
        <FormInput
          name={'lastName'}
          value={hrFormData.lastName}
          type="text"
          setValue={changedHandle}
          placeholder="nazwisko"
          correct={correct.lastName}
          message={message.lastName}
        />
        <FormInput
          name={'company'}
          value={hrFormData.company}
          type="text"
          setValue={changedHandle}
          placeholder="firma"
          correct={correct.company}
          message={message.company}
        />
        <FormInput
          description="Maksymalna liczba kursantów "
          name={'maxReservedStudents'}
          value={hrFormData.maxReservedStudents}
          type="number"
          setValue={changedHandle}
          placeholder="limit kursantów"
          correct={correct.maxReservedStudents}
          message={message.maxReservedStudents}
        />
        <button type="submit">Dodaj HR'a</button>
      </form>
    </div>
  );
};
