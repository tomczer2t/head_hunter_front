import React from 'react';
import { TopBar } from '../TopBar/TopBar';
import { MenuAvailableTalk } from '../MenuAvailableTalk/MenuAvailableTalk';
import './HrAllStudents.css';
import { SearchFilterBar } from '../SearchFilterBar/SearchFilterBar';
import { ListStudentsForBooking } from '../ListStudentsForBooking/ListStudentsForBooking';
import { StudentDetails } from '../../types/hr/hr';

export const HrAllStudents = () => {
  const studentDetailsListOfStudentsForBooking: StudentDetails[] = [
    {
      fullName: 'Jan Kowalski',
      courseDegree: 1,
      courseEngagement: 3,
      projectDegree: 4,
      teamProjectDegree: 5,
      expectedTypeWork: 'Biuro',
      targetWorkCity: 'Warszawa',
      expectedContractType: 'Umowa o pracę',
      expectedSalary: 8000,
      canTakeApprenticeship: true,
      monthsOfCommercialExp: '6 miesięcy',
    },
    {
      fullName: 'Krzysztof Pawłowski',
      courseDegree: 2,
      courseEngagement: 3,
      projectDegree: 4,
      teamProjectDegree: 5,
      expectedTypeWork: 'Biuro',
      targetWorkCity: 'Warszawa',
      expectedContractType: 'Umowa o pracę',
      expectedSalary: 8000,
      canTakeApprenticeship: true,
      monthsOfCommercialExp: '6 miesięcy',
    },
    {
      fullName: 'Mariusz Lewandowski',
      courseDegree: 3,
      courseEngagement: 3,
      projectDegree: 4,
      teamProjectDegree: 5,
      expectedTypeWork: 'Biuro',
      targetWorkCity: 'Warszawa',
      expectedContractType: 'Umowa o pracę',
      expectedSalary: 8000,
      canTakeApprenticeship: true,
      monthsOfCommercialExp: '6 miesięcy',
    },
    {
      fullName: 'Tomasz Czerwiński',
      courseDegree: 4,
      courseEngagement: 3,
      projectDegree: 4,
      teamProjectDegree: 5,
      expectedTypeWork: 'Biuro',
      targetWorkCity: 'Warszawa',
      expectedContractType: 'Umowa o pracę',
      expectedSalary: 8000,
      canTakeApprenticeship: true,
      monthsOfCommercialExp: '6 miesięcy',
    },
    {
      fullName: 'Marcin Łącała',
      courseDegree: 5,
      courseEngagement: 1,
      projectDegree: 4,
      teamProjectDegree: 5,
      expectedTypeWork: 'Biuro',
      targetWorkCity: 'Warszawa',
      expectedContractType: 'Umowa o pracę',
      expectedSalary: 8000,
      canTakeApprenticeship: true,
      monthsOfCommercialExp: '6 miesięcy',
    },
    {
      fullName: 'Jan Błaszczyk',
      courseDegree: 5,
      courseEngagement: 2,
      projectDegree: 4,
      teamProjectDegree: 5,
      expectedTypeWork: 'Biuro',
      targetWorkCity: 'Warszawa',
      expectedContractType: 'Umowa o pracę',
      expectedSalary: 8000,
      canTakeApprenticeship: true,
      monthsOfCommercialExp: '6 miesięcy',
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
      monthsOfCommercialExp: '6 miesięcy',
    },
  ];
  return (
    <>
      <div className="hr-all-students">
        <TopBar />
        <MenuAvailableTalk />
        <SearchFilterBar />
        <ListStudentsForBooking {...studentDetailsListOfStudentsForBooking} />
        <p>PaginationBar</p>
      </div>
    </>
  );
};
