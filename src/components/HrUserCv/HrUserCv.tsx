import React, { useEffect, useState } from 'react';
import { TopBar } from '../TopBar/TopBar';
import { Link, useParams } from 'react-router-dom';
import { SingleStudentProfile } from 'types';
import { useAxiosPrivate } from '../../hooks/useAxiosPrivate';
import { UserCv } from '../UserCv/UserCv';

export const HrUserCv = () => {
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
      <UserCv student={student} />
    </div>
  );
};
