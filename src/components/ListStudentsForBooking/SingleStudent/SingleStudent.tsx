import React, { useState } from 'react';
import upArrow from '../../../assets/images/upArrow.svg';
import { SingleStudentDetails } from './SingleStudentDetails/SingleStudentDetails';
import { FilteredAvailableStudent } from 'types';
import './SingleStudent.css';
import { useAxiosPrivate } from '../../../hooks/useAxiosPrivate';

interface Props {
  student: FilteredAvailableStudent;
  fetchStudents: () => void;
}

export const SingleStudent = ({ student, fetchStudents }: Props) => {
  const [isActive, setActive] = useState(false);
  const axiosPrivate = useAxiosPrivate();
  function hadleClickMoreInfo() {
    setActive(!isActive);
  }

  const handleReserveStudent = async (userId: string) => {
    try {
      const { data } = await axiosPrivate.post<FilteredAvailableStudent[]>(
        '/hr/student',
        { userId },
      );
      fetchStudents();
    } catch (err) {}
  };

  return (
    <>
      <li className="single-student">
        <div className="single-student__name">
          {student.firstName} {student.lastName}
        </div>
        <div className="single-student__small-wrapper">
          <button
            className="single-student__btn"
            onClick={() => void handleReserveStudent(student.userId)}
          >
            Zarezerwuj rozmowę
          </button>
          <img
            onClick={hadleClickMoreInfo}
            src={upArrow}
            alt="More student info"
            className={
              isActive
                ? 'single-student__img single-student__img__more-info'
                : 'single-student__img'
            }
          />
        </div>
      </li>
      <li
        className={
          isActive
            ? 'single-student__more-info single-student__more-info--active'
            : 'single-student__more-info'
        }
      >
        <div
          className={
            isActive
              ? 'single-student__details single-student__details--active'
              : 'single-student__details'
          }
        >
          <SingleStudentDetails {...student} isActive={isActive} />
        </div>
      </li>
    </>
  );
};
