import React, { useState } from 'react';
import './SingleStudentForInterview.css';
import upArrow from '../../../assets/images/upArrow.svg';
import { SingleStudentDetails } from '../../ListStudentsForBooking/SingleStudent/SingleStudentDetails/SingleStudentDetails';
import defaultAvatar from '../../../assets/images/default_avatar.jpg';
import { StudentOnInterviewList } from 'types';
import { useAxiosPrivate } from '../../../hooks/useAxiosPrivate';
import { Link } from 'react-router-dom';

interface Props {
  student: StudentOnInterviewList;
  fetchStudents: () => void;
}

export const SingleStudentForInterview = ({
  student,
  fetchStudents,
}: Props) => {
  const [isActive, setActive] = useState(false);
  const axiosPrivate = useAxiosPrivate();
  function hadleClickMoreInfo() {
    setActive(!isActive);
  }

  const handleNotInterested = async () => {
    try {
      await axiosPrivate.delete(`/hr/student/${student.userId}`);
      fetchStudents();
    } catch (err) {}
  };

  return (
    <>
      <li className="single-student-interview">
        <div className="single-student-interview__reservation_name_wrapper">
          <div className="single-student-interview__reservation-date">
            <div>Rezerwacja do</div>
            <div>{student.bookedUntil}</div>
          </div>
          <img src={defaultAvatar} alt="Zdjęcie kursanta" />
          <div className="single-student-interview__name">
            {student.firstName} {student.lastName}
          </div>
        </div>
        <div className="single-student-interview__small-wrapper">
          <Link to={`${student.userId}`}>
            <button className="single-student-interview__btni">Pokaż CV</button>
          </Link>
          <button
            className="single-student-interview__btni"
            onClick={() => void handleNotInterested()}
          >
            Brak zainteresowania
          </button>
          <button className="single-student-interview__btni">
            Zatrudniony
          </button>
          <img
            onClick={hadleClickMoreInfo}
            src={upArrow}
            alt="Pokaż więcej informacji o studencie"
            className={
              isActive
                ? 'single-student-interview__img single-student-interview__img__more-info'
                : 'single-student-interview__img'
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
