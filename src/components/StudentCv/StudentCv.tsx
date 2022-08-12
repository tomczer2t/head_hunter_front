import { UserCv } from '../UserCv/UserCv';
import React, { useEffect, useState } from 'react';
import { useAxiosPrivate } from '../../hooks/useAxiosPrivate';
import { SingleStudentProfile } from 'types';
import { TopBar } from '../TopBar/TopBar';
import { Link } from 'react-router-dom';

export const StudentCv = () => {
  const [student, setStudent] = useState<SingleStudentProfile | null>(null);
  const axiosPrivate = useAxiosPrivate();

  const fetchStudent = async () => {
    try {
      const { data } = await axiosPrivate.get<SingleStudentProfile>(
        `/student/cv`,
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
      <Link className="UserCv__interview-student-link" to="/student/profile">
        Profil
      </Link>
      <UserCv student={student} />
    </div>
  );
};
