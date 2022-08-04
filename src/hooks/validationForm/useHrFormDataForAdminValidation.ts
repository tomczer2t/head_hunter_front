import React, { useEffect, useState } from 'react';
import { HrFormDataForAdmin } from '../../components/FormForAddingHr/FormForAddingHr';

export interface HrFormDataForAdminCorrect {
  email: boolean | null;
  firstName: boolean | null;
  lastName: boolean | null;
  company: boolean | null;
  maxReservedStudents: boolean | null;
}

export interface HrFormDataForAdminMessage {
  email: string;
  firstName: string;
  lastName: string;
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
    lastName: '',
    company: '',
    maxReservedStudents: '',
  });
  const [correct, setCorrect] = useState<HrFormDataForAdminCorrect>({
    email: null,
    firstName: null,
    lastName: null,
    company: null,
    maxReservedStudents: null,
  });

  //Email validation
  useEffect(() => {
    if (props.hrFormData.email === '') {
      setCorrect((prev: HrFormDataForAdminCorrect) => ({
        ...prev,
        email: null,
      }));
      setMessage((prev: HrFormDataForAdminMessage) => ({
        ...prev,
        email: '',
      }));
    } else if (props.emailExist) {
      setCorrect((prev: HrFormDataForAdminCorrect) => ({
        ...prev,
        email: false,
      }));
      setMessage((prev: HrFormDataForAdminMessage) => ({
        ...prev,
        email: 'Email jest już zajęty',
      }));
    } else if (
      props.hrFormData.email.includes('@') &&
      props.hrFormData.email.length >= 3 &&
      props.hrFormData.email.length <= 254
    ) {
      setCorrect((prev: HrFormDataForAdminCorrect) => ({
        ...prev,
        email: true,
      }));
      setMessage((prev: HrFormDataForAdminMessage) => ({
        ...prev,
        email: '',
      }));
    } else {
      setCorrect((prev: HrFormDataForAdminCorrect) => ({
        ...prev,
        email: false,
      }));
      setMessage((prev: HrFormDataForAdminMessage) => ({
        ...prev,
        email: 'Email musi zawierać @ i mieć długość od 3 do 254 znaków',
      }));
    }
  }, [props.hrFormData.email, props.emailExist]);
  //First name validation
  useEffect(() => {
    if (props.hrFormData.firstName === '') {
      setCorrect((prev: HrFormDataForAdminCorrect) => ({
        ...prev,
        firstName: null,
      }));
      setMessage((prev: HrFormDataForAdminMessage) => ({
        ...prev,
        firstName: '',
      }));
    } else if (
      props.hrFormData.firstName.length >= 2 &&
      props.hrFormData.firstName.length <= 50
    ) {
      setCorrect((prev: HrFormDataForAdminCorrect) => ({
        ...prev,
        firstName: true,
      }));
      setMessage((prev: HrFormDataForAdminMessage) => ({
        ...prev,
        firstName: '',
      }));
    } else {
      setCorrect((prev: HrFormDataForAdminCorrect) => ({
        ...prev,
        firstName: false,
      }));
      setMessage((prev: HrFormDataForAdminMessage) => ({
        ...prev,
        firstName: 'Imię musi  mieć długość od 2 do 50 znaków',
      }));
    }
  }, [props.hrFormData.firstName]);
  //Second name validation
  useEffect(() => {
    if (props.hrFormData.lastName === '') {
      setCorrect((prev: HrFormDataForAdminCorrect) => ({
        ...prev,
        lastName: null,
      }));
      setMessage((prev: HrFormDataForAdminMessage) => ({
        ...prev,
        lastName: '',
      }));
    } else if (
      props.hrFormData.lastName.length >= 2 &&
      props.hrFormData.lastName.length <= 50
    ) {
      setCorrect((prev: HrFormDataForAdminCorrect) => ({
        ...prev,
        lastName: true,
      }));
      setMessage((prev: HrFormDataForAdminMessage) => ({
        ...prev,
        lastName: '',
      }));
    } else {
      setCorrect((prev: HrFormDataForAdminCorrect) => ({
        ...prev,
        lastName: false,
      }));
      setMessage((prev: HrFormDataForAdminMessage) => ({
        ...prev,
        lastName: 'Nazwisko musi  mieć długość od 2 do 50 znaków',
      }));
    }
  }, [props.hrFormData.lastName]);
  //Company validation
  useEffect(() => {
    if (props.hrFormData.company === '') {
      setCorrect((prev: HrFormDataForAdminCorrect) => ({
        ...prev,
        company: null,
      }));
      setMessage((prev: HrFormDataForAdminMessage) => ({
        ...prev,
        company: '',
      }));
    } else if (
      props.hrFormData.company.length >= 1 &&
      props.hrFormData.company.length <= 110
    ) {
      setCorrect((prev: HrFormDataForAdminCorrect) => ({
        ...prev,
        company: true,
      }));
      setMessage((prev: HrFormDataForAdminMessage) => ({
        ...prev,
        company: '',
      }));
    } else {
      setCorrect((prev: HrFormDataForAdminCorrect) => ({
        ...prev,
        company: false,
      }));
      setMessage((prev: HrFormDataForAdminMessage) => ({
        ...prev,
        company: 'Nazwa firmy musi mieć długość od 1 do 110 znaków',
      }));
    }
  }, [props.hrFormData.company]);
  //Max reserved students validation
  useEffect(() => {
    if (props.hrFormData.maxReservedStudents == 0) {
      setCorrect((prev: HrFormDataForAdminCorrect) => ({
        ...prev,
        maxReservedStudents: null,
      }));
      setMessage((prev: HrFormDataForAdminMessage) => ({
        ...prev,
        maxReservedStudents: '',
      }));
    } else if (
      props.hrFormData.maxReservedStudents > 0 &&
      props.hrFormData.maxReservedStudents <= 999
    ) {
      setCorrect((prev: HrFormDataForAdminCorrect) => ({
        ...prev,
        maxReservedStudents: true,
      }));
      setMessage((prev: HrFormDataForAdminMessage) => ({
        ...prev,
        maxReservedStudents: '',
      }));
    } else {
      setCorrect((prev: HrFormDataForAdminCorrect) => ({
        ...prev,
        maxReservedStudents: false,
      }));
      setMessage((prev: HrFormDataForAdminMessage) => ({
        ...prev,
        maxReservedStudents: 'Wartoś musi być w przedziale 0-999',
      }));
    }
  }, [props.hrFormData.maxReservedStudents]);
  return {
    message,
    correct,
  };
};
