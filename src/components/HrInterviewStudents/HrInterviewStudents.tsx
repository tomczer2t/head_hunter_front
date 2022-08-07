import React, { useEffect, useState } from 'react';
import { TopBar } from '../TopBar/TopBar';
import { MenuAvailableTalk } from '../MenuAvailableTalk/MenuAvailableTalk';
import './HrInterviewStudents.css';
import { SearchFilterBar } from '../SearchFilterBar/SearchFilterBar';
import { ListStudentsForInterview } from '../ListStudentsForInterview/ListStudentsForInterview';
import {
  defaultRequestForStudents,
  ExpectedTypeWork,
  HrAllStudentsRequest,
  StudentDetails,
  StudentDetailsAndReservationDate,
} from '../../types/hr/hr';
import { fetchDataStudentsInterview } from '../../api/axiosFireToBE';
import { dummyHrAllStudentsInterviewResponse } from '../../FakeResponses/FakeResponses';

export const HrInterviewStudents = () => {
  const [isError, setIsError] = useState(false); // @Todo co ma się stać jak jest błąd
  const [dataToAxiosForListOfStudents, setDataToAxiosForListOfStudents] =
    useState<HrAllStudentsRequest>(defaultRequestForStudents);

  const [allStudentsResData, setAllStudentsResData] = useState<
    StudentDetailsAndReservationDate[]
  >([]);

  useEffect(() => {
    console.log('useEff', dataToAxiosForListOfStudents);
    void (async (): Promise<void> => {
      await fetchDataStudentsInterview(
        setAllStudentsResData,
        dataToAxiosForListOfStudents,
      );
    })();
  }, [dataToAxiosForListOfStudents]);
  // @Todo podpiąć odpowiedź z BE do FE oraz pozmieniać typy podmienić (poniżej odkomentować i zakomentować)
  // const studentDetailsAndReservationDateListForBooking: StudentDetailsAndReservationDate[] =
  //   allStudentsResData;
  const studentDetailsAndReservationDateListForBooking: StudentDetailsAndReservationDate[] =
    dummyHrAllStudentsInterviewResponse;

  return (
    <>
      <div className="hr-all-students">
        <TopBar />
        <MenuAvailableTalk />
        <SearchFilterBar
          dataToAxiosForListOfStudents={dataToAxiosForListOfStudents}
          setDataToAxiosForListOfStudents={setDataToAxiosForListOfStudents}
        />
        <ListStudentsForInterview
          {...studentDetailsAndReservationDateListForBooking}
        />
        <p style={{ color: 'cadetblue' }}>PaginationBar</p>
      </div>
    </>
  );
};
