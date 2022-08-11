import React, { useCallback, useEffect, useState } from 'react';
import { TopBar } from '../TopBar/TopBar';
import { MenuAvailableTalk } from '../MenuAvailableTalk/MenuAvailableTalk';
import './HrAllStudents.css';
import { SearchFilterBar } from '../SearchFilterBar/SearchFilterBar';
import { ListStudentsForBooking } from '../ListStudentsForBooking/ListStudentsForBooking';
import {
  FilteredAvailableStudent,
  ExpectedWorkType,
  ExpectedContractType,
} from 'types';
import { useAxiosPrivate } from '../../hooks/useAxiosPrivate';

export interface Dummy {
  userId: string;
  courseEngagment: number;
  courseCompletion: number;
  studentInfoId: string;
  firstName: string;
  lastName: string;
  courseDegree: number;
  projectDegree: number;
  teamProjectDegree: number;
  expectedTypeWork: ExpectedWorkType;
  targetWorkCity: string;
  expectedContractType: ExpectedContractType;
  expectedSalary: number;
  canTakeApprenticeship: boolean;
  monthsOfCommercialExp: number;
}

export const HrAllStudents = () => {
  const [students, setStudents] = useState<FilteredAvailableStudent[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  const axiosPrivate = useAxiosPrivate();
  const fetchStudents = useCallback(async () => {
    setError('');
    try {
      const { data } = await axiosPrivate.get<FilteredAvailableStudent[]>(
        'hr/students/available',
      );
      setStudents(data);
    } catch (err) {
      setError('Coś poszło nie tak. Spróbuj ponownie później');
    } finally {
      setLoading(false);
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
        <ListStudentsForBooking
          students={students}
          fetchStudents={() => void fetchStudents()}
        />
        <p>PaginationBar</p>
      </div>
    </>
  );
};
