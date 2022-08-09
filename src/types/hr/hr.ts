import { ExpectedContractType, ExpectedWorkType, SortBy } from 'types';
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
  filterExpectedTypeWork: boolean[] | null; //biuro, zdalna
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
  courseCompletion_ASC = 'courseCompletion_ASC',
  courseCompletion_DESC = 'courseCompletion_DESC',
  courseEngagement_ASC = 'courseEngagement_ASC',
  courseEngagement_DESC = 'courseEngagement_DESC',
  projectDegree_ASC = 'projectDegree_ASC',
  projectDegree_DESC = 'projectDegree_DESC',
  teamProjectDegree_ASC = 'teamProjectDegree_ASC',
  teamProjectDegree_DESC = 'teamProjectDegree_DESC',
  expectedSalary_ASC = 'expectedSalary_ASC',
  expectedSalary_DESC = 'expectedSalary_DESC',
  monthsOfCommercialExp_ASC = 'monthsOfCommercialExp_ASC',
  monthsOfCommercialExp_DESC = 'monthsOfCommercialExp_DESC',
  noSort = 'no',
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

export interface AxiosRequest {
  numActualPage: number;
  numStudentsCountPerPage: number;
  search?: string;
  sortBy?: SortBy;
  sortByOrder?: SortByOrder;
  courseCompletion?: number[]; //5,4,3,2,1
  courseEngagment?: number[]; //5,4,3,2,1
  projectDegree?: number[]; //5,4,3,2,1
  teamProjectDegree?: number[]; //5,4,3,2,1
  expectedTypeWork?: ExpectedWorkType[]; //biuro, zdalna
  expectedContractType?: ExpectedContractType[]; //Umowa o pracę, B2B, Umowa zlecenie, Umowa o dzieło
  salaryFrom?: number; //kwota od,
  salaryTo?: number; //kwota  do
  canTakeApprenticeship?: CanTakeApprenticeship; //false nie, true tak
  monthsOfCommercialExp?: number;
}

export enum CanTakeApprenticeship {
  TRUE = 'true',
  FALSE = 'false',
}

export enum SortByOrder {
  ASC = 'ASC',
  DESC = 'DESC',
}
