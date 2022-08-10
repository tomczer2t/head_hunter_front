import React, { useEffect, useState } from 'react';
import { TopBar } from '../TopBar/TopBar';
import { Link, useParams } from 'react-router-dom';
import { UserDescription } from './UserDescription/UserDescription';
import { UserTable } from './UserTable/UserTable';
import { SingleStudentProfile } from 'types';

import './UserCv.css';
import { useAxiosPrivate } from '../../hooks/useAxiosPrivate';

export const UserCv = () => {
  const [student, setStudent] = useState<SingleStudentProfile | null>(null);
  const { studentId } = useParams();
  const axiosPrivate = useAxiosPrivate();

  const fetchStudent = async () => {
    if (!studentId) return;
    try {
      const { data } = await axiosPrivate.get<SingleStudentProfile>(
        `/student/${studentId}`,
      );
      setStudent(data);
    } catch (err) {}
  };

  useEffect(() => {
    void fetchStudent();
  }, []);

  if (!student) return null;

  return (
    <div className="UserCv">
      <TopBar />
      <Link
        className="UserCv__interview-student-link"
        to={'/hr/interview-students'}
      >
        wróć
      </Link>
      <main className="UserCv__container">
        <UserDescription student={student} />
        <UserTable student={student} />
      </main>
    </div>
  );
};
