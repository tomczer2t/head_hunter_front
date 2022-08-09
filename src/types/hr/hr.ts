import { ExpectedContractType } from 'types';
import React from 'react';

export enum StarNames {
  V1 = 'filterCourseCompletion',
  V2 = 'filterCourseEngagement',
  V3 = 'filterProjectDegree',
  V4 = 'filterTeamProjectDegree',
}

export interface FiltState {
  filterCourseCompletion: [boolean, boolean, boolean, boolean, boolean] | null; //5,4,3,2,1
  filterCourseEngagement: [boolean, boolean, boolean, boolean, boolean] | null; //5,4,3,2,1
  filterProjectDegree: [boolean, boolean, boolean, boolean, boolean] | null; //5,4,3,2,1
  filterTeamProjectDegree: [boolean, boolean, boolean, boolean, boolean] | null; //5,4,3,2,1
  filterExpectedTypeWork: [boolean, boolean] | null; //biuro, zdalna
  filterExpectedContractType: [boolean, boolean, boolean, boolean] | null; //Umowa o pracę, B2B, Umowa zlecenie, Umowa o dzieło
  filterExpectedSalaryFrom: null | number; //kwota od,
  filterExpectedSalaryUpTo: null | number; //kwota  do
  filterCanTakeApprenticeship: null | boolean; //false nie, true tak
  filterMonthsOfCommercialExp: null | number;
}

export interface StudentDetails {
  id: string;
  fullName: string;
  courseDegree: number;
  courseEngagement: number;
  projectDegree: number;
  teamProjectDegree: number;
  expectedTypeWork: string;
  targetWorkCity: string;
  expectedContractType: string;
  expectedSalary: number;
  canTakeApprenticeship: boolean;
  monthsOfCommercialExp: string;
}

export interface StudentDetailsAndReservationDate extends StudentDetails {
  reservationDate: string;
}

export interface HrAllStudentsRequest extends FiltState {
  numActualPage: number;
  numStudentsCountPerPage: number;
  search: string;
  sortedBy: Sorted;
}

export enum Sorted {
  courseCompletion_ASC = 'Ocena przejścia kursu: rosnąco',
  courseCompletion_DESC = '  Ocena przejścia kursu: malejąco',
  courseEngagement_ASC = 'Ocena aktywności i zaangażowania na kursie: rosnąco',
  courseEngagement_DESC = 'Ocena aktywności i zaangażowania na kursie: malejąco',
  projectDegree_ASC = 'Ocena kodu w projekcie własnym: rosnąco',
  projectDegree_DESC = 'Ocena kodu w projekcie własnym: malejąco',
  teamProjectDegree_ASC = 'Ocena pracy w zespole w Scrum: rosnąco',
  teamProjectDegree_DESC = 'Ocena pracy w zespole w Scrum: malejąco',
  expectedSalary_ASC = 'Oczekiwane wynagrodzenie miesięczne netto: rosnąco',
  expectedSalary_DESC = 'Oczekiwane wynagrodzenie miesięczne netto: malejąco',
  monthsOfCommercialExp_ASC = 'Ilość miesięcy doświadczenia komercyjnego kandydata w programowaniu: rosnąco',
  monthsOfCommercialExp_DESC = 'Ilość miesięcy doświadczenia komercyjnego kandydata w programowaniu: malejąco',
}

export interface HrAllStudentsRequestState {
  // dataToAxios: HrAllStudentsRequest;
  // setDataToAxios: React.Dispatch<React.SetStateAction<HrAllStudentsRequest>>;
  studentDetailsListOfStudentsForBooking: StudentDetails[];
}

export enum ExpectedTypeWork {
  REMOTE_WORK = 'Praca zdalna',
  OFFICE_WORK = 'Praca w biurze',
}

export const defaultRequestForStudents: HrAllStudentsRequest = {
  numActualPage: 1,
  numStudentsCountPerPage: 10,
  search: '',
  filterCourseCompletion: null,
  filterCourseEngagement: null,
  filterProjectDegree: null,
  filterTeamProjectDegree: null,
  filterExpectedTypeWork: null,
  filterExpectedContractType: null,
  filterExpectedSalaryFrom: null,
  filterExpectedSalaryUpTo: null,
  filterCanTakeApprenticeship: null,
  filterMonthsOfCommercialExp: null,
  sortedBy: Sorted.projectDegree_ASC,
};

export interface SearchFilterRequestState {
  dataToAxiosForListOfStudents: HrAllStudentsRequest;
  setDataToAxiosForListOfStudents: React.Dispatch<
    React.SetStateAction<HrAllStudentsRequest>
  >;
}
