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
import { PaginationBar } from '../PaginationBar/PaginationBar';
import { useFetchAllStudentsToHr } from '../../hooks/useFetchAllStudentsToHr';
import { StudentOnInterviewList } from 'types';

export const HrAllStudents = () => {
  // const [isError, setIsError] = useState(false); // @Todo co ma się stać jak jest błąd
  const [dataToAxiosForListOfStudents, setDataToAxiosForListOfStudents] =
    useState<HrAllStudentsRequest>(defaultRequestForStudents);
  const fetchDataStudents = useFetchAllStudentsToHr();
  const [allStudentsData, setAllStudentsData] = useState<
    StudentOnInterviewList[]
  >([]);

  const fetchStudents = async () => {
    await fetchDataStudents(setAllStudentsData, dataToAxiosForListOfStudents);
  };

  useEffect(() => {
    void (async (): Promise<void> => {
      await fetchStudents();
    })();
  }, [dataToAxiosForListOfStudents]);

  return (
    <>
      <div className="hr-all-students">
        <TopBar />
        <MenuAvailableTalk />
        <SearchFilterBar
          fetchStudents={fetchStudents}
          dataToAxiosForListOfStudents={dataToAxiosForListOfStudents}
          setDataToAxiosForListOfStudents={setDataToAxiosForListOfStudents}
        />
        <ListStudentsForBooking students={allStudentsData} />
        <PaginationBar
          dataToAxiosForListOfStudents={dataToAxiosForListOfStudents}
          setDataToAxiosForListOfStudents={setDataToAxiosForListOfStudents}
        />
      </div>
    </>
  );
};
