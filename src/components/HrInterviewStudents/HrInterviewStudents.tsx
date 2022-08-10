import React, { useCallback, useEffect, useState } from 'react';
import { TopBar } from '../TopBar/TopBar';
import { MenuAvailableTalk } from '../MenuAvailableTalk/MenuAvailableTalk';
import { SearchFilterBar } from '../SearchFilterBar/SearchFilterBar';
import { ListStudentsForInterview } from '../ListStudentsForInterview/ListStudentsForInterview';
import { useAxiosPrivate } from '../../hooks/useAxiosPrivate';
import { StudentOnInterviewList } from 'types';
import './HrInterviewStudents.css';

export const HrInterviewStudents = () => {
  const [students, setStudents] = useState<StudentOnInterviewList[]>([]);

  const axiosPrivate = useAxiosPrivate();
  const fetchStudents = useCallback(async () => {
    try {
      const { data } = await axiosPrivate.get<StudentOnInterviewList[]>(
        '/hr/students',
      );
      setStudents(data);
    } catch (err) {
      console.log(err);
    }
  }, [axiosPrivate]);

  useEffect(() => {
    void fetchStudents();
  }, [fetchStudents]);

  return (
    <>
      <div className="hr-all-students">
        <TopBar />
        <MenuAvailableTalk />
        <SearchFilterBar />
        <ListStudentsForInterview
          students={students}
          fetchStudents={() => void fetchStudents()}
        />
        <p style={{ color: 'cadetblue' }}>PaginationBar</p>
      </div>
    </>
  );
};
