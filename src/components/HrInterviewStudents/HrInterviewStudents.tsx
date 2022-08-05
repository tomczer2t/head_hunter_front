import React, { useEffect, useState } from 'react';
import { TopBar } from '../TopBar/TopBar';
import { MenuAvailableTalk } from '../MenuAvailableTalk/MenuAvailableTalk';
import './HrInterviewStudents.css';
import { SearchFilterBar } from '../SearchFilterBar/SearchFilterBar';
import { ListStudentsForInterview } from '../ListStudentsForInterview/ListStudentsForInterview';
import {
  StudentOnInterviewList,
  ExpectedWorkType,
  ExpectedContractType,
} from 'types';

export const HrInterviewStudents = () => {
  const dummyListOfStudentsForBooking: StudentOnInterviewList[] = [
    {
      userId: '1',
      firstName: 'Jan',
      lastName: 'Kowalski',
      courseEngagment: 3,
      projectDegree: 4,
      teamProjectDegree: 5,
      courseCompletion: 4,
      expectedTypeWork: ExpectedWorkType.ON_SITE,
      targetWorkCity: 'Warszawa',
      expectedContractType: ExpectedContractType.EMPLOYMENT,
      expectedSalary: 8000,
      canTakeApprenticeship: true,
      monthsOfCommercialExp: 6,
      bookedUntil: '11.07.2020 r.',
      studentStatus: 0,
    },
    {
      userId: '1',
      firstName: 'Krzysztof',
      lastName: 'Pawłowski',
      courseEngagment: 3,
      projectDegree: 4,
      teamProjectDegree: 5,
      courseCompletion: 4,
      expectedTypeWork: ExpectedWorkType.ON_SITE,
      targetWorkCity: 'Warszawa',
      expectedContractType: ExpectedContractType.EMPLOYMENT,
      expectedSalary: 8000,
      canTakeApprenticeship: true,
      monthsOfCommercialExp: 6,
      bookedUntil: '11.07.2020 r.',
      studentStatus: 0,
    },
    {
      userId: '1',
      firstName: 'Mariusz',
      lastName: 'Lewandowski',
      courseEngagment: 3,
      projectDegree: 4,
      teamProjectDegree: 5,
      courseCompletion: 4,
      expectedTypeWork: ExpectedWorkType.ON_SITE,
      targetWorkCity: 'Warszawa',
      expectedContractType: ExpectedContractType.EMPLOYMENT,
      expectedSalary: 8000,
      canTakeApprenticeship: true,
      monthsOfCommercialExp: 6,
      bookedUntil: '11.07.2020 r.',
      studentStatus: 0,
    },
    {
      userId: '1',
      firstName: 'Tomasz',
      lastName: 'Czerwiński',
      courseEngagment: 3,
      projectDegree: 4,
      teamProjectDegree: 5,
      courseCompletion: 4,
      expectedTypeWork: ExpectedWorkType.ON_SITE,
      targetWorkCity: 'Warszawa',
      expectedContractType: ExpectedContractType.EMPLOYMENT,
      expectedSalary: 8000,
      canTakeApprenticeship: true,
      monthsOfCommercialExp: 6,
      bookedUntil: '11.07.2020 r.',
      studentStatus: 0,
    },
    {
      userId: '1',
      firstName: 'Marcin',
      lastName: 'Łącała',
      courseEngagment: 3,
      projectDegree: 4,
      teamProjectDegree: 5,
      courseCompletion: 4,
      expectedTypeWork: ExpectedWorkType.ON_SITE,
      targetWorkCity: 'Warszawa',
      expectedContractType: ExpectedContractType.EMPLOYMENT,
      expectedSalary: 8000,
      canTakeApprenticeship: true,
      monthsOfCommercialExp: 6,
      bookedUntil: '11.07.2020 r.',
      studentStatus: 0,
    },
    {
      userId: '1',
      firstName: 'Jan',
      lastName: 'Błaszczyk',
      courseEngagment: 3,
      projectDegree: 4,
      teamProjectDegree: 5,
      courseCompletion: 4,
      expectedTypeWork: ExpectedWorkType.ON_SITE,
      targetWorkCity: 'Warszawa',
      expectedContractType: ExpectedContractType.EMPLOYMENT,
      expectedSalary: 8000,
      canTakeApprenticeship: true,
      monthsOfCommercialExp: 6,
      bookedUntil: '11.07.2020 r.',
      studentStatus: 0,
    },
    {
      userId: '1',
      firstName: 'Adrian',
      lastName: 'Majcher',
      courseEngagment: 3,
      projectDegree: 4,
      teamProjectDegree: 5,
      courseCompletion: 4,
      expectedTypeWork: ExpectedWorkType.ON_SITE,
      targetWorkCity: 'Warszawa',
      expectedContractType: ExpectedContractType.EMPLOYMENT,
      expectedSalary: 8000,
      canTakeApprenticeship: true,
      monthsOfCommercialExp: 6,
      bookedUntil: '11.07.2020 r.',
      studentStatus: 0,
    },
  ];

  return (
    <>
      <div className="hr-all-students">
        <TopBar />
        <MenuAvailableTalk />
        <SearchFilterBar />
        <ListStudentsForInterview {...dummyListOfStudentsForBooking} />
        <p style={{ color: 'cadetblue' }}>PaginationBar</p>
      </div>
    </>
  );
};
