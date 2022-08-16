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
import { StudentOnInterviewList } from 'types';
import { PaginationBar } from '../PaginationBar/PaginationBar';
import { useFetchInterview } from '../../hooks/useFetchAllStudentsToHrInterview';

export const HrInterviewStudents = () => {
  const [isErrorIn, setIsErrorIn] = useState(false); // @Todo co ma się stać jak jest błąd
  const [dataToAxiosForListOfStudentsIn, setDataToAxiosForListOfStudentsIn] =
    useState<HrAllStudentsRequest>(defaultRequestForStudents);
  const fetchDataStudentsInterview = useFetchInterview();
  const [allStudentsResDataIn, setAllStudentsResDataIn] = useState<
    StudentOnInterviewList[]
  >([]);

  const fetchStudents = async () => {
    await fetchDataStudentsInterview(
      setAllStudentsResDataIn,
      dataToAxiosForListOfStudentsIn,
    );
  };

  useEffect(() => {
    void fetchStudents();
  }, []);

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
          students={allStudentsResDataIn}
          fetchStudents={fetchStudents}
        />
        <PaginationBar
          dataToAxiosForListOfStudents={dataToAxiosForListOfStudentsIn}
          setDataToAxiosForListOfStudents={setDataToAxiosForListOfStudentsIn}
        />
      </div>
    </>
  );
};
