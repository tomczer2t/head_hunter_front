import React, { useState } from 'react';
import './SingleStudent.css';
import upArrow from '../../../assets/images/upArrow.svg';
import { SingleStudentDetails } from './SingleStudentDetails/SingleStudentDetails';
import { FilteredAvailableStudent } from 'types';
import { useAxiosPrivate } from '../../../hooks/useAxiosPrivate';

interface StudentDetails extends FilteredAvailableStudent {
  reservationDate?: string;
}

interface Props {
  student: StudentDetails;
}

export const SingleStudent = ({ student }: Props) => {
  const [isActive, setActive] = useState(false);
  function hadleClickMoreInfo() {
    setActive(!isActive);
  }

  const axiosPrivate = useAxiosPrivate();

  const handleBookStudent = async () => {
    const res = await axiosPrivate.post('/hr/student', {
      userId: student.userId,
    });
    console.log({ res });
  };

  return (
    <>
      <li className="single-student">
        <div className="single-student__name">
          {student.firstName} {student.lastName}.
        </div>
        <div className="single-student__small-wrapper">
          <button
            className="single-student__btn"
            onClick={() => void handleBookStudent()}
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
