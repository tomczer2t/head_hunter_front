import { ExpectedContractType } from 'types';

export enum StarNames {
  V1 = 'courseCompletion',
  V2 = 'courseEngagment',
  V3 = 'projectDegree',
  V4 = 'teamProjectDegree',
}

export interface FiltState {
  courseCompletion: [boolean, boolean, boolean, boolean, boolean]; //5,4,3,2,1
  courseEngagment: [boolean, boolean, boolean, boolean, boolean]; //5,4,3,2,1
  projectDegree: [boolean, boolean, boolean, boolean, boolean]; //5,4,3,2,1
  teamProjectDegree: [boolean, boolean, boolean, boolean, boolean]; //5,4,3,2,1
  expectedTypeWork: [boolean, boolean]; //5,4,3,2,1
  targetWorkCity: string;
  expectedContractType: [boolean, boolean, boolean, boolean]; //Umowa o pracę, B2B, Umowa zlecenie, Umowa o dzieło
  expectedSalary: [null | number, null | number]; //kwota od, do
  canTakeApprenticeship: null | boolean; //false nie, true tak
  monthsOfCommercialExp: null | number;
}

export interface StudentDetails {
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

export interface HrAllStudentsRequest {
  numActualPage: number;
  numStudentsCountPerPage: number;
  search: string;
  filterCourseCompletion: number | null;
  filterCourseEngagement: number | null;
  filterProjectDegree: number | null;
  filterTeamProjectDegree: number | null;
  filterExpectedTypeWork: ExpectedTypeWork[];
  filterExpectedContractType: ExpectedContractType[];
  filterExpectedSalaryFrom: number | null;
  filterExpectedSalaryUpTo: number | null;
  filterCanTakeApprenticeship: boolean | null;
  filterMonthsOfCommercialExp: number | null;
}

export enum ExpectedTypeWork {
  REMOTE_WORK = 'Praca zdalna',
  OFFICE_WORK = 'Praca w biurze',
}
