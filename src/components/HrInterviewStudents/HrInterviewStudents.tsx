import React, { useEffect, useState } from 'react';
import { TopBar } from '../TopBar/TopBar';
import { MenuAvailableTalk } from '../MenuAvailableTalk/MenuAvailableTalk';
import './HrInterviewStudents.css';
import { SearchFilterBar } from '../SearchFilterBar/SearchFilterBar';
import { ListStudentsForInterview } from '../ListStudentsForInterview/ListStudentsForInterview';
import { Dummy } from '../HrAllStudents/HrAllStudents';
import { axios } from '../../api/axios';

export interface DummyAndReservationDate extends Dummy {
  reservationDate: string;
}

export const HrInterviewStudents = () => {
  // const [allStudentsData, setAllStudentsData ] = useState()
  // useEffect(() => {
  //   const fetchData = async () => {
  //     const result = await axios.get('/hr/students', {params: {
  //         numActualPage: 1,
  //         numAllPages: 4,
  //         numStudentsCountPerPage: 10,
  //         searchPhrase: '',
  //         filterCourseCompletion: 3,
  //         filterCourseEngagment: 4,
  //         filterProjectDegree: 5,
  //         filterTeamProjectDegree: 1,
  //         filterExpectedTypeWork: 'Praca Zdalna',
  //         filterTargetWorkCity: 'Warszawa, Gdańsk, Bździn',
  //         filterExpectedContractType: "BoB, Umowa zlecenie, Umowa o dzieło",
  //         filterExpectedSalary: 100,
  //         filterCanTakeApprenticeship: true,
  //         filterMonthsOfCommercialExp: 0,
  //         sortedBy: "filterExpectedSalary",
  //       }});
  //     setAllStudentsData(result.data)
  //   }
  //   fetchData();
  // },[])


  const dummyListOfStudentsForBooking: DummyAndReservationDate[] = [
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
      reservationDate: '11.07.2020 r.',
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
      reservationDate: '18.07.2020 r.',
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
      reservationDate: '20.07.2020 r.',
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
      reservationDate: '21.07.2020 r.',
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
      reservationDate: '22.07.2020 r.',
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
      reservationDate: '24.07.2020 r.',
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
      reservationDate: '25.07.2020 r.',
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
