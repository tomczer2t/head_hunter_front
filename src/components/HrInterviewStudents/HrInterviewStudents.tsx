import React, { useEffect, useState } from 'react';
import { TopBar } from '../TopBar/TopBar';
import { MenuAvailableTalk } from '../MenuAvailableTalk/MenuAvailableTalk';
import './HrInterviewStudents.css';
import { SearchFilterBar } from '../SearchFilterBar/SearchFilterBar';
import { ListStudentsForInterview } from '../ListStudentsForInterview/ListStudentsForInterview';
import {
  defaultRequestForStudents,
  HrAllStudentsRequest,
  StudentDetailsAndReservationDate,
} from '../../types/hr/hr';
import { dummyHrAllStudentsInterviewResponse } from '../../FakeResponses/FakeResponses';
import { fetchDataStudentsInterview } from '../../api/axiosFireToBE';
import { PaginationBar } from '../PaginationBar/PaginationBar';

export const HrInterviewStudents = () => {
  const [isErrorIn, setIsErrorIn] = useState(false); // @Todo co ma się stać jak jest błąd
  const [dataToAxiosForListOfStudentsIn, setDataToAxiosForListOfStudentsIn] =
    useState<HrAllStudentsRequest>(defaultRequestForStudents);

  const [allStudentsResDataIn, setAllStudentsResDataIn] = useState<
    StudentDetailsAndReservationDate[]
  >([]);

  // useEffect(() => {
  //   const ls = localStorage.getItem('dataToAxiosForListOfStudentsIn');
  //   if (ls !== null) {
  //     const items = JSON.parse(ls) as HrAllStudentsRequest;
  //     setDataToAxiosForListOfStudentsIn(items);
  //     console.log('inin', items);
  //   }
  //   console.log('in');
  // }, []);

  useEffect(() => {
    void (async (): Promise<void> => {
      await fetchDataStudentsInterview(
        setAllStudentsResDataIn,
        dataToAxiosForListOfStudentsIn,
      );
      // localStorage.setItem(
      //   'dataToAxiosForListOfStudentsIn',
      //   JSON.stringify(dataToAxiosForListOfStudentsIn),
      // );
      console.log('in1');
    })();
  }, [dataToAxiosForListOfStudentsIn]);
  // //@Todo podpiąć odpowiedź z BE do FE oraz pozmieniać typy podmienić (poniżej odkomentować i zakomentować)
  // const studentDetailsAndReservationDateListForBooking: StudentDetailsAndReservationDate[] =
  //   allStudentsResDataIn;
  const studentDetailsAndReservationDateListForBooking: StudentDetailsAndReservationDate[] =
    dummyHrAllStudentsInterviewResponse;

  return (
    <>
      <div className="hr-all-students">
        <TopBar />
        <MenuAvailableTalk />
        <SearchFilterBar
          dataToAxiosForListOfStudents={dataToAxiosForListOfStudentsIn}
          setDataToAxiosForListOfStudents={setDataToAxiosForListOfStudentsIn}
        />
        <ListStudentsForInterview
          {...studentDetailsAndReservationDateListForBooking}
        />
        <PaginationBar
          dataToAxiosForListOfStudents={dataToAxiosForListOfStudentsIn}
          setDataToAxiosForListOfStudents={setDataToAxiosForListOfStudentsIn}
        />
      </div>
    </>
  );
};
