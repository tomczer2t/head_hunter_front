import React, { useEffect, useState } from 'react';
import { TopBar } from '../TopBar/TopBar';
import { MenuAvailableTalk } from '../MenuAvailableTalk/MenuAvailableTalk';
import './HrAllStudents.css';
import { SearchFilterBar } from '../SearchFilterBar/SearchFilterBar';
import { ListStudentsForBooking } from '../ListStudentsForBooking/ListStudentsForBooking';
import {
  defaultRequestForStudents,
  HrAllStudentsRequest,
  StudentDetails,
} from '../../types/hr/hr';
import { dummyHrAllStudentsResponse } from '../../FakeResponses/FakeResponses';
import { PaginationBar } from '../PaginationBar/PaginationBar';
import { useFetchAllStudentsToHr } from '../../hooks/useFetchAllStudentsToHr';

export const HrAllStudents = () => {
  // const [isError, setIsError] = useState(false); // @Todo co ma się stać jak jest błąd
  const [dataToAxiosForListOfStudents, setDataToAxiosForListOfStudents] =
    useState<HrAllStudentsRequest>(defaultRequestForStudents);
  const fetchDataStudents = useFetchAllStudentsToHr();
  const [allStudentsData, setAllStudentsData] = useState<StudentDetails[]>([]);

  useEffect(() => {
    void (async (): Promise<void> => {
      await fetchDataStudents(setAllStudentsData, dataToAxiosForListOfStudents);
    })();
  }, [dataToAxiosForListOfStudents, fetchDataStudents]);

  // @Todo podpiąć odpowiedź z BE do FE oraz pozmieniać typy podmienić (poniżej odkomentować i zakomentować)
  // const studentDetailsListOfStudentsForBooking: StudentDetails[] =
  //   allStudentsData;
  const studentDetailsListOfStudentsForBooking: StudentDetails[] =
    dummyHrAllStudentsResponse;

  return (
    <>
      <div className="hr-all-students">
        <TopBar />
        <MenuAvailableTalk />
        <SearchFilterBar
          dataToAxiosForListOfStudents={dataToAxiosForListOfStudents}
          setDataToAxiosForListOfStudents={setDataToAxiosForListOfStudents}
        />
        <ListStudentsForBooking
          studentDetailsListOfStudentsForBooking={
            studentDetailsListOfStudentsForBooking
          }
        />
        <PaginationBar
          dataToAxiosForListOfStudents={dataToAxiosForListOfStudents}
          setDataToAxiosForListOfStudents={setDataToAxiosForListOfStudents}
        />
      </div>
    </>
  );
};
