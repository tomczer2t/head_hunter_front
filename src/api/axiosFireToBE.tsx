import React from 'react';
import { axiosPrivate } from './axios';
import {
  AxiosRequest,
  CanTakeApprenticeship,
  HrAllStudentsRequest,
  SortByOrder,
  Sorted,
  StudentDetails,
  StudentDetailsAndReservationDate,
} from '../types/hr/hr';
import { ExpectedContractType, ExpectedWorkType, SortBy } from 'types';

export const fetchDataStudentsInterview = async (
  setAllStudentsData: React.Dispatch<
    React.SetStateAction<StudentDetailsAndReservationDate[]>
  >,
  dataInterviewToAxios: HrAllStudentsRequest,
) => {
  console.log('qwerty', dataInterviewToAxios);
  const axiosRequestData: AxiosRequest = {
    numActualPage: dataInterviewToAxios.numActualPage,
    numStudentsCountPerPage: dataInterviewToAxios.numStudentsCountPerPage,
  };
  if (dataInterviewToAxios.search.length > 0) {
    axiosRequestData.search = dataInterviewToAxios.search;
  }

  if (dataInterviewToAxios.sortedBy !== Sorted.noSort) {
    const sor = dataInterviewToAxios.sortedBy.split('_') as [
      SortBy,
      SortByOrder,
    ];
    axiosRequestData.sortBy = sor[0];
    axiosRequestData.sortByOrder = sor[1];
  }
  if (dataInterviewToAxios.filterCourseCompletion !== null) {
    axiosRequestData.courseCompletion = [];
    for (let i = 0; i < 6; i++) {
      if (dataInterviewToAxios.filterCourseCompletion[i]) {
        axiosRequestData.courseCompletion.push(i + 1);
      }
    }
  }
  if (dataInterviewToAxios.filterCourseEngagement !== null) {
    axiosRequestData.courseEngagment = [];
    for (let i = 0; i < 6; i++) {
      if (dataInterviewToAxios.filterCourseEngagement[i]) {
        axiosRequestData.courseEngagment.push(i + 1);
      }
    }
  }
  if (dataInterviewToAxios.filterProjectDegree !== null) {
    axiosRequestData.projectDegree = [];
    for (let i = 0; i < 6; i++) {
      if (dataInterviewToAxios.filterProjectDegree[i]) {
        axiosRequestData.projectDegree.push(i + 1);
      }
    }
  }
  if (dataInterviewToAxios.filterTeamProjectDegree !== null) {
    axiosRequestData.teamProjectDegree = [];
    for (let i = 0; i < 6; i++) {
      if (dataInterviewToAxios.filterTeamProjectDegree[i]) {
        axiosRequestData.teamProjectDegree.push(i + 1);
      }
    }
  }

  // expectedTypeWork
  if (dataInterviewToAxios.filterExpectedTypeWork !== null) {
    axiosRequestData.expectedTypeWork = [];
    if (dataInterviewToAxios.filterExpectedTypeWork[0]) {
      axiosRequestData.expectedTypeWork.push(ExpectedWorkType.ON_SITE);
    }
    if (dataInterviewToAxios.filterExpectedTypeWork[1]) {
      axiosRequestData.expectedTypeWork.push(ExpectedWorkType.ONLY_REMOTE);
    }
    if (dataInterviewToAxios.filterExpectedTypeWork[2]) {
      axiosRequestData.expectedTypeWork.push(ExpectedWorkType.READY_TO_MOVE);
    }
    if (dataInterviewToAxios.filterExpectedTypeWork[3]) {
      axiosRequestData.expectedTypeWork.push(ExpectedWorkType.NO_PREFERENCES);
    }
    if (dataInterviewToAxios.filterExpectedTypeWork[4]) {
      axiosRequestData.expectedTypeWork.push(ExpectedWorkType.HYBRID);
    }
  }

  // expectedContractType
  if (dataInterviewToAxios.filterExpectedContractType !== null) {
    for (let i = 1; i < 5; i++) {
      if (dataInterviewToAxios.filterExpectedContractType[i]) {
        axiosRequestData.expectedContractType = [];
        if (dataInterviewToAxios.filterExpectedContractType[0]) {
          axiosRequestData.expectedContractType.push(
            ExpectedContractType.EMPLOYMENT,
          );
        }
        if (dataInterviewToAxios.filterExpectedContractType[1]) {
          axiosRequestData.expectedContractType.push(ExpectedContractType.B2B);
        }
        if (dataInterviewToAxios.filterExpectedContractType[2]) {
          axiosRequestData.expectedContractType.push(
            ExpectedContractType.MANDATE_OR_WORK,
          );
        }
        if (dataInterviewToAxios.filterExpectedContractType[3]) {
          axiosRequestData.expectedContractType.push(
            ExpectedContractType.NO_PREFERENCES,
          );
        }
      }
    }
  }

  //salaryFrom
  if (dataInterviewToAxios.filterExpectedSalaryFrom !== null) {
    axiosRequestData.salaryFrom = dataInterviewToAxios.filterExpectedSalaryFrom;
  }

  // salaryTo
  if (dataInterviewToAxios.filterExpectedSalaryUpTo !== null) {
    axiosRequestData.salaryTo = dataInterviewToAxios.filterExpectedSalaryUpTo;
  }

  // canTakeApprenticeship
  if (dataInterviewToAxios.filterCanTakeApprenticeship !== null) {
    if (dataInterviewToAxios.filterCanTakeApprenticeship) {
      axiosRequestData.canTakeApprenticeship = CanTakeApprenticeship.TRUE;
    } else {
      axiosRequestData.canTakeApprenticeship = CanTakeApprenticeship.FALSE;
    }
  }
  // monthsOfCommercialExp?: number;
  if (dataInterviewToAxios.filterMonthsOfCommercialExp) {
    axiosRequestData.monthsOfCommercialExp =
      dataInterviewToAxios.filterMonthsOfCommercialExp;
  }
  console.log('iiiiiiiiiiii', axiosRequestData);
  try {
    const result = await axiosPrivate.get<StudentDetailsAndReservationDate[]>(
      '/hr/students',
      {
        params: axiosRequestData,
        timeout: 2000,
      },
    );
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
  const axiosRequestData: AxiosRequest = {
    numActualPage: dataInterviewToAxios.numActualPage,
    numStudentsCountPerPage: dataInterviewToAxios.numStudentsCountPerPage,
  };
  if (dataInterviewToAxios.search.length > 0) {
    axiosRequestData.search = dataInterviewToAxios.search;
  }

  if (dataInterviewToAxios.sortedBy !== Sorted.noSort) {
    const sor = dataInterviewToAxios.sortedBy.split('_') as [
      SortBy,
      SortByOrder,
    ];
    axiosRequestData.sortBy = sor[0];
    axiosRequestData.sortByOrder = sor[1];
  }
  if (dataInterviewToAxios.filterCourseCompletion !== null) {
    axiosRequestData.courseCompletion = [];
    for (let i = 0; i < 6; i++) {
      if (dataInterviewToAxios.filterCourseCompletion[i]) {
        axiosRequestData.courseCompletion.push(i + 1);
      }
    }
  }
  if (dataInterviewToAxios.filterCourseEngagement !== null) {
    axiosRequestData.courseEngagment = [];
    for (let i = 0; i < 6; i++) {
      if (dataInterviewToAxios.filterCourseEngagement[i]) {
        axiosRequestData.courseEngagment.push(i + 1);
      }
    }
  }
  if (dataInterviewToAxios.filterProjectDegree !== null) {
    axiosRequestData.projectDegree = [];
    for (let i = 0; i < 6; i++) {
      if (dataInterviewToAxios.filterProjectDegree[i]) {
        axiosRequestData.projectDegree.push(i + 1);
      }
    }
  }
  if (dataInterviewToAxios.filterTeamProjectDegree !== null) {
    axiosRequestData.teamProjectDegree = [];
    for (let i = 0; i < 6; i++) {
      if (dataInterviewToAxios.filterTeamProjectDegree[i]) {
        axiosRequestData.teamProjectDegree.push(i + 1);
      }
    }
  }

  // expectedTypeWork
  if (dataInterviewToAxios.filterExpectedTypeWork !== null) {
    axiosRequestData.expectedTypeWork = [];
    if (dataInterviewToAxios.filterExpectedTypeWork[0]) {
      axiosRequestData.expectedTypeWork.push(ExpectedWorkType.ON_SITE);
    }
    if (dataInterviewToAxios.filterExpectedTypeWork[1]) {
      axiosRequestData.expectedTypeWork.push(ExpectedWorkType.ONLY_REMOTE);
    }
    if (dataInterviewToAxios.filterExpectedTypeWork[2]) {
      axiosRequestData.expectedTypeWork.push(ExpectedWorkType.READY_TO_MOVE);
    }
    if (dataInterviewToAxios.filterExpectedTypeWork[3]) {
      axiosRequestData.expectedTypeWork.push(ExpectedWorkType.NO_PREFERENCES);
    }
    if (dataInterviewToAxios.filterExpectedTypeWork[4]) {
      axiosRequestData.expectedTypeWork.push(ExpectedWorkType.HYBRID);
    }
  }

  // expectedContractType
  if (dataInterviewToAxios.filterExpectedContractType !== null) {
    for (let i = 1; i < 5; i++) {
      if (dataInterviewToAxios.filterExpectedContractType[i]) {
        axiosRequestData.expectedContractType = [];
        if (dataInterviewToAxios.filterExpectedContractType[0]) {
          axiosRequestData.expectedContractType.push(
            ExpectedContractType.EMPLOYMENT,
          );
        }
        if (dataInterviewToAxios.filterExpectedContractType[1]) {
          axiosRequestData.expectedContractType.push(ExpectedContractType.B2B);
        }
        if (dataInterviewToAxios.filterExpectedContractType[2]) {
          axiosRequestData.expectedContractType.push(
            ExpectedContractType.MANDATE_OR_WORK,
          );
        }
        if (dataInterviewToAxios.filterExpectedContractType[3]) {
          axiosRequestData.expectedContractType.push(
            ExpectedContractType.NO_PREFERENCES,
          );
        }
      }
    }
  }

  //salaryFrom
  if (dataInterviewToAxios.filterExpectedSalaryFrom !== null) {
    axiosRequestData.salaryFrom = dataInterviewToAxios.filterExpectedSalaryFrom;
  }

  // salaryTo
  if (dataInterviewToAxios.filterExpectedSalaryUpTo !== null) {
    axiosRequestData.salaryTo = dataInterviewToAxios.filterExpectedSalaryUpTo;
  }

  // canTakeApprenticeship
  if (dataInterviewToAxios.filterCanTakeApprenticeship !== null) {
    if (dataInterviewToAxios.filterCanTakeApprenticeship) {
      axiosRequestData.canTakeApprenticeship = CanTakeApprenticeship.TRUE;
    } else {
      axiosRequestData.canTakeApprenticeship = CanTakeApprenticeship.FALSE;
    }
  }
  // monthsOfCommercialExp?: number;
  if (dataInterviewToAxios.filterMonthsOfCommercialExp) {
    axiosRequestData.monthsOfCommercialExp =
      dataInterviewToAxios.filterMonthsOfCommercialExp;
  }
  console.log('nnnnnn', axiosRequestData);
  try {
    const result = await axiosPrivate.get<StudentDetailsAndReservationDate[]>(
      '/hr/students',
      {
        params: axiosRequestData,
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
