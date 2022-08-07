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
import { fetchDataStudents } from '../../api/axiosFireToBE';

export const HrAllStudents = () => {
  // const [isError, setIsError] = useState(false); // @Todo co ma się stać jak jest błąd
  const [dataToAxiosForListOfStudents, setDataToAxiosForListOfStudents] =
    useState<HrAllStudentsRequest>(defaultRequestForStudents);

  const [allStudentsData, setAllStudentsData] = useState<StudentDetails[]>([]);

  useEffect(() => {
    console.log('useEff1');
    void (async (): Promise<void> => {
      await fetchDataStudents(setAllStudentsData, dataToAxiosForListOfStudents);
    })();
  }, [dataToAxiosForListOfStudents]);

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
        <p>PaginationBar</p>
      </div>
    </>
  );
};
