import React, { useState } from 'react';
import './SingleStudent.css';
import upArrow from '../../../assets/images/upArrow.svg';
import { SingleStudentDetails } from './SingleStudentDetails/SingleStudentDetails';
import { FilteredAvailableStudent } from 'types';
import { useAxiosPrivate } from '../../../hooks/useAxiosPrivate';
import { AxiosError } from 'axios';

interface StudentDetails extends FilteredAvailableStudent {
  reservationDate?: string;
}

interface Props {
  student: StudentDetails;
  setError: React.Dispatch<React.SetStateAction<string>>;
}

export const SingleStudent = ({ student, setError }: Props) => {
  const [isActive, setActive] = useState(false);
  function hadleClickMoreInfo() {
    setActive(!isActive);
  }

  const axiosPrivate = useAxiosPrivate();

  const handleBookStudent = async () => {
    try {
      const res = await axiosPrivate.post('/hr/student', {
        userId: student.userId,
      });
      console.log({ res });
    } catch (err) {
      if (err instanceof AxiosError) {
        if (err?.response?.status === 417) {
          setError('Limit zarezerowanych rozmów został osiągnięty.');
        } else if (err?.response?.status === 409) {
          setError('Rozmowa z tym studentem jest już zarezerwowana.');
        } else {
          setError(
            'Przepreaszamy, coś poszło nie tak. Spróbuj ponownie później.',
          );
        }
      }
    }
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
