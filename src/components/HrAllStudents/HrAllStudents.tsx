import React from 'react';
import { TopBar } from '../TopBar/TopBar';
import { MenuAvailableTalk } from '../MenuAvailableTalk/MenuAvailableTalk';
import './HrAllStudents.css';
import { SearchFilterBar } from '../SearchFilterBar/SearchFilterBar';
import { ListStudentsForBooking } from '../ListStudentsForBooking/ListStudentsForBooking';

export interface Dummy {
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
  monthsOfCommercialExp: number;
}

export const HrAllStudents = () => {
  const dummyListOfStudentsForBooking: Dummy[] = [
    {
      fullName: 'Jan Kowalski',
      courseDegree: 5,
      courseEngagement: 3,
      projectDegree: 4,
      teamProjectDegree: 5,
      expectedTypeWork: 'Biuro',
      targetWorkCity: 'Warszawa',
      expectedContractType: 'Umowa o pracę',
      expectedSalary: 8000,
      canTakeApprenticeship: true,
      monthsOfCommercialExp: 6,
    },
    {
      fullName: 'Krzysztof Pawłowski',
      courseDegree: 5,
      courseEngagement: 3,
      projectDegree: 4,
      teamProjectDegree: 5,
      expectedTypeWork: 'Biuro',
      targetWorkCity: 'Warszawa',
      expectedContractType: 'Umowa o pracę',
      expectedSalary: 8000,
      canTakeApprenticeship: true,
      monthsOfCommercialExp: 6,
    },
    {
      fullName: 'Mariusz Lewandowski',
      courseDegree: 5,
      courseEngagement: 3,
      projectDegree: 4,
      teamProjectDegree: 5,
      expectedTypeWork: 'Biuro',
      targetWorkCity: 'Warszawa',
      expectedContractType: 'Umowa o pracę',
      expectedSalary: 8000,
      canTakeApprenticeship: true,
      monthsOfCommercialExp: 6,
    },
    {
      fullName: 'Tomasz Czerwiński',
      courseDegree: 5,
      courseEngagement: 3,
      projectDegree: 4,
      teamProjectDegree: 5,
      expectedTypeWork: 'Biuro',
      targetWorkCity: 'Warszawa',
      expectedContractType: 'Umowa o pracę',
      expectedSalary: 8000,
      canTakeApprenticeship: true,
      monthsOfCommercialExp: 6,
    },
    {
      fullName: 'Marcin Łącała',
      courseDegree: 5,
      courseEngagement: 3,
      projectDegree: 4,
      teamProjectDegree: 5,
      expectedTypeWork: 'Biuro',
      targetWorkCity: 'Warszawa',
      expectedContractType: 'Umowa o pracę',
      expectedSalary: 8000,
      canTakeApprenticeship: true,
      monthsOfCommercialExp: 6,
    },
    {
      fullName: 'Jan Błaszczyk',
      courseDegree: 5,
      courseEngagement: 3,
      projectDegree: 4,
      teamProjectDegree: 5,
      expectedTypeWork: 'Biuro',
      targetWorkCity: 'Warszawa',
      expectedContractType: 'Umowa o pracę',
      expectedSalary: 8000,
      canTakeApprenticeship: true,
      monthsOfCommercialExp: 6,
    },
    {
      fullName: 'Adrian Majcher',
      courseDegree: 5,
      courseEngagement: 3,
      projectDegree: 4,
      teamProjectDegree: 5,
      expectedTypeWork: 'Biuro',
      targetWorkCity: 'Warszawa',
      expectedContractType: 'Umowa o pracę',
      expectedSalary: 8000,
      canTakeApprenticeship: true,
      monthsOfCommercialExp: 6,
    },
  ];
  return (
    <>
      <div className="hr-all-students">
        <TopBar />
        <MenuAvailableTalk />
        <SearchFilterBar />
        <ListStudentsForBooking
          {...dummyListOfStudentsForBooking}
        ></ListStudentsForBooking>
        <p>PaginationBar</p>
      </div>
    </>
  );
};
