import React, { useEffect, useState } from 'react';
import { TopBar } from '../TopBar/TopBar';
import { MenuAvailableTalk } from '../MenuAvailableTalk/MenuAvailableTalk';
import './HrInterviewStudents.css';
import { SearchFilterBar } from '../SearchFilterBar/SearchFilterBar';
import { ListStudentsForInterview } from '../ListStudentsForInterview/ListStudentsForInterview';
import { Dummy } from '../HrAllStudents/HrAllStudents';
import { ExpectedWorkType, ExpectedContractType } from 'types';

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
      userId: 'asdgfgdh',
      firstName: 'Jacek',
      lastName: 'Murański',
      courseDegree: 5,
      courseEngagment: 3,
      courseCompletion: 3,
      projectDegree: 4,
      teamProjectDegree: 5,
      expectedTypeWork: ExpectedWorkType.ON_SITE,
      targetWorkCity: 'Warszawa',
      expectedContractType: ExpectedContractType.EMPLOYMENT,
      expectedSalary: 8000,
      canTakeApprenticeship: true,
      monthsOfCommercialExp: 0,
      reservationDate: '05.08.2022r',
      studentInfoId: '13',
    },
    {
      userId: 'asdhfgh',
      firstName: 'Agata',
      lastName: 'Bufalo',
      courseDegree: 5,
      courseEngagment: 3,
      courseCompletion: 3,
      projectDegree: 4,
      teamProjectDegree: 5,
      expectedTypeWork: ExpectedWorkType.ON_SITE,
      targetWorkCity: 'Warszawa',
      expectedContractType: ExpectedContractType.EMPLOYMENT,
      expectedSalary: 8000,
      canTakeApprenticeship: true,
      monthsOfCommercialExp: 0,
      reservationDate: '07.08.2022r',
      studentInfoId: '13',
    },
    {
      userId: 'asdqweq',
      firstName: 'Elvis',
      lastName: 'Presley',
      courseDegree: 5,
      courseEngagment: 3,
      courseCompletion: 3,
      projectDegree: 4,
      teamProjectDegree: 5,
      expectedTypeWork: ExpectedWorkType.ON_SITE,
      targetWorkCity: 'Warszawa',
      expectedContractType: ExpectedContractType.EMPLOYMENT,
      expectedSalary: 8000,
      canTakeApprenticeship: true,
      monthsOfCommercialExp: 0,
      reservationDate: '06.08.2022r',
      studentInfoId: '13',
    },
    {
      userId: 'asdassdf',
      firstName: 'Franek',
      lastName: 'Kimono',
      courseDegree: 5,
      courseEngagment: 3,
      courseCompletion: 3,
      projectDegree: 4,
      teamProjectDegree: 5,
      expectedTypeWork: ExpectedWorkType.ON_SITE,
      targetWorkCity: 'Warszawa',
      expectedContractType: ExpectedContractType.EMPLOYMENT,
      expectedSalary: 8000,
      canTakeApprenticeship: true,
      monthsOfCommercialExp: 0,
      reservationDate: '08.08.2022r',
      studentInfoId: '13',
    },
    {
      userId: 'asdsda',
      firstName: 'Zbyszko',
      lastName: 'Mariacki',
      courseDegree: 5,
      courseEngagment: 3,
      courseCompletion: 3,
      projectDegree: 4,
      teamProjectDegree: 5,
      expectedTypeWork: ExpectedWorkType.ON_SITE,
      targetWorkCity: 'Warszawa',
      expectedContractType: ExpectedContractType.EMPLOYMENT,
      expectedSalary: 8000,
      canTakeApprenticeship: true,
      monthsOfCommercialExp: 0,
      reservationDate: '06.08.2022r',
      studentInfoId: '13',
    },
    {
      userId: 'asd',
      firstName: 'Maciek',
      lastName: 'Maciek',
      courseDegree: 5,
      courseEngagment: 3,
      courseCompletion: 3,
      projectDegree: 4,
      teamProjectDegree: 5,
      expectedTypeWork: ExpectedWorkType.ON_SITE,
      targetWorkCity: 'Warszawa',
      expectedContractType: ExpectedContractType.EMPLOYMENT,
      expectedSalary: 8000,
      canTakeApprenticeship: true,
      monthsOfCommercialExp: 0,
      reservationDate: '10.08.2022r',
      studentInfoId: '13',
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
