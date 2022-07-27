import React, { useEffect, useState } from 'react';
import './FormForAddingHr.css';
import { FormInput } from '../common/FormInput/FormInput';
import { useHrFormDataForAdminValidation } from '../../hooks/validationForm/useHrFormDataForAdminValidation';
import { axiosPrivate } from '../../api/axios';
import { MessageResponse } from '../common/MessageResponse/MessageResponse';

export interface HrFormDataForAdmin {
  email: string;
  firstName: string;
  secondName: string;
  company: string;
  maxReservedStudents: number;
}

export const FormForAddingHr = () => {
  const [hrFormData, setHrFormData] = useState<HrFormDataForAdmin>({
    email: '',
    firstName: '',
    secondName: '',
    company: '',
    maxReservedStudents: 0,
  });
  const [emailExist, setEmailExist] = useState<boolean>(false);
  const [showMessageResponse, setShowMessageResponse] = useState<boolean>(true);

  const { correct, message } = useHrFormDataForAdminValidation({
    hrFormData,
    emailExist,
  });

  useEffect(() => {}, [showMessageResponse]);
  // @TODO set type response
  const sendForm = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      const res = await axiosPrivate.post('/admin/for-hr', hrFormData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
    } catch (err) {}
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
        showMessageResponse={showMessageResponse}
        status={'Testowy'}
        message={'Opis błedu'}
        correct={false}
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
          name={'secondName'}
          value={hrFormData.secondName}
          type="text"
          setValue={changedHandle}
          placeholder="nazwisko"
          correct={correct.secondName}
          message={message.secondName}
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
