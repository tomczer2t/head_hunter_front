import React from 'react';
import { axios } from './axios';
import {
  HrAllStudentsRequest,
  StudentDetails,
  StudentDetailsAndReservationDate,
} from '../types/hr/hr';

export const fetchDataStudentsInterview = async (
  setAllStudentsData: React.Dispatch<
    React.SetStateAction<StudentDetailsAndReservationDate[]>
  >,
  dataInterviewToAxios: HrAllStudentsRequest,
) => {
  try {
    const result = await axios.get<StudentDetailsAndReservationDate[]>(
      '/hr/students',
      {
        params: dataInterviewToAxios,
        timeout: 2000,
      },
    );
    console.log('axios fire');
    setAllStudentsData(result.data);
  } catch (e) {
    console.log('axios error');
    // setIsError(true); //@Todo co będzie jak błąd czy brak netu
  }
};

export const fetchDataStudents = async (
  setAllStudentsData: React.Dispatch<React.SetStateAction<StudentDetails[]>>,
  dataInterviewToAxios: HrAllStudentsRequest,
) => {
  try {
    const result = await axios.get<StudentDetailsAndReservationDate[]>(
      '/hr/students',
      {
        params: dataInterviewToAxios,
        timeout: 2000,
      },
    );
    console.log('axios fire');
    setAllStudentsData(result.data);
  } catch (e) {
    console.log('axios error');
    // setIsError(true); //@Todo co będzie jak błąd czy brak netu
  }
};
