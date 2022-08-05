import React, { useState } from 'react';
import { TopBar } from '../TopBar/TopBar';
import { MenuAvailableTalk } from '../MenuAvailableTalk/MenuAvailableTalk';
import './HrAllStudents.css';
import { SearchFilterBar } from '../SearchFilterBar/SearchFilterBar';
import { ListStudentsForBooking } from '../ListStudentsForBooking/ListStudentsForBooking';
import { StudentDetails } from '../../types/hr/hr';
import { dummyHrAllStudentsResponse } from '../../FakeResponses/FakeResponses';

export const HrAllStudents = () => {
  const [dataToAxios, setDdtaToAxios] = useState({
    numActualPage: 1,
    numStudentsCountPerPage: 10,
    search: '',
    filterCourseCompletion: 3,
    filterCourseEngagement: 4,
    filterProjectDegree: 5,
    filterTeamProjectDegree: 1,
    filterExpectedTypeWork: 'Praca Zdalna',
    filterTargetWorkCity: 'Warszawa, Gdańsk, Bździn',
    filterExpectedContractType: 'BoB, Umowa zlecenie, Umowa o dzieło',
    filterExpectedSalary: 100,
    filterCanTakeApprenticeship: true,
    filterMonthsOfCommercialExp: 0,
  });

  const studentDetailsListOfStudentsForBooking: StudentDetails[] =
    dummyHrAllStudentsResponse;

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
