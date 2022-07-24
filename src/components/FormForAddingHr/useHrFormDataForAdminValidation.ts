import React, { useEffect, useState } from 'react';
import { HrFormDataForAdmin } from './FormForAddingHr';

export interface HrFormDataForAdminCorrect {
  email: boolean | null;
  firstName: boolean | null;
  secondName: boolean | null;
  company: boolean | null;
  maxReservedStudents: boolean | null;
}

export interface HrFormDataForAdminMessage {
  email: string;
  firstName: string;
  secondName: string;
  company: string;
  maxReservedStudents: string;
}

interface UseHrForAdminValidation {
  correct: HrFormDataForAdminCorrect;
  message: HrFormDataForAdminMessage;
}

export const useHrFormDataForAdminValidation = (props: {
  hrFormData: HrFormDataForAdmin;
  emailExist: boolean;
}): UseHrForAdminValidation => {
  const [message, setMessage] = useState<HrFormDataForAdminMessage>({
    email: '',
    firstName: '',
    secondName: '',
    company: '',
    maxReservedStudents: '',
  });
  const [correct, setCorrect] = useState<HrFormDataForAdminCorrect>({
    email: null,
    firstName: null,
    secondName: null,
    company: null,
    maxReservedStudents: null,
  });

  useEffect(() => {
    if (props.hrFormData.email === '') {
      setCorrect((prev: HrFormDataForAdminCorrect) => ({
        ...prev,
        email: null,
      }));
    } else if (props.hrFormData.email.includes('@')) {
      setCorrect((prev: HrFormDataForAdminCorrect) => ({
        ...prev,
        email: true,
      }));
    } else {
      setCorrect((prev: HrFormDataForAdminCorrect) => ({
        ...prev,
        email: false,
      }));
    }
  }, [props.hrFormData.email]);

  useEffect(() => {
    if (props.hrFormData.firstName.includes('@')) {
      setCorrect((prev: HrFormDataForAdminCorrect) => ({
        ...prev,
        firstName: false,
      }));
    }
  }, [props.hrFormData.firstName]);

  return {
    message,
    correct,
  };
};
