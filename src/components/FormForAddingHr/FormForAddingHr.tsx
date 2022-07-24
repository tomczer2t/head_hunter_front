import React, { useEffect, useState } from 'react';
import './FormForAddingHr.css';
import { Input } from '../common/Input/Input';
import { useHrFormDataForAdminValidation } from './useHrFormDataForAdminValidation';

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
  const { correct, message } = useHrFormDataForAdminValidation({
    hrFormData,
    emailExist,
  });

  // useEffect(() => {}, [hrFormData]);

  const changedHandle = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    return setHrFormData((loginParams: HrFormDataForAdmin) => ({
      ...loginParams,
      [e.target.name]: e.target.value,
    }));
  };
  console.log(correct.email);
  return (
    <div className="form-adding-hr">
      <form className="form-adding-hr__form" action="">
        <h3>Add HRV</h3>
        <Input
          name={'email'}
          value={hrFormData.email}
          type="text"
          setValue={changedHandle}
          placeholder="email"
          correct={correct.email}
          message={message.email}
        />
        <Input
          name={'firstName'}
          value={hrFormData.firstName}
          type="text"
          setValue={changedHandle}
          placeholder="imię"
          correct={correct.firstName}
          message={message.firstName}
        />
        <Input
          name={'secondName'}
          value={hrFormData.secondName}
          type="text"
          setValue={changedHandle}
          placeholder="nazwisko"
          correct={correct.secondName}
          message={message.secondName}
        />
        <Input
          name={'company'}
          value={hrFormData.company}
          type="text"
          setValue={changedHandle}
          placeholder="firma"
          correct={correct.company}
          message={message.company}
        />
        <Input
          name={'maxReservedStudents'}
          value={hrFormData.maxReservedStudents}
          type="number"
          setValue={changedHandle}
          placeholder="limit kursantów"
          correct={correct.maxReservedStudents}
          message={message.maxReservedStudents}
        />
        <button type="submit">Add</button>
      </form>
    </div>
  );
};
