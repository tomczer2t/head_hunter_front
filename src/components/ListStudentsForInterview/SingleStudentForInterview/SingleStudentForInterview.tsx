import React, { useState } from 'react';
import './SingleStudentForInterview.css';
import upArrow from '../../../assets/images/upArrow.svg';
import { SingleStudentDetails } from '../../ListStudentsForBooking/SingleStudent/SingleStudentDetails/SingleStudentDetails';
import { DummyAndReservationDate } from '../../HrInterviewStudents/HrInterviewStudents';

export const SingleStudentForInterview = (props: DummyAndReservationDate) => {
  const [isActive, setActive] = useState(false);
  function hadleClickMoreInfo() {
    setActive(!isActive);
  }
  return (
    <>
      <li className="single-student-interview">
        <div className="single-student-interview__reservation-date">
          <div>Rezerwacja do</div>
          <div>{props.reservationDate}</div>
        </div>
        <div className="single-student-interview__name">{props.fullName}</div>
        <div className="single-student-interview__small-wrapper">
          <button className="single-student-interview__btn">
            Zarezerwuj rozmowę
          </button>
          <img
            onClick={hadleClickMoreInfo}
            src={upArrow}
            alt="More student info"
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
          <SingleStudentDetails {...props} isActive={isActive} />
        </div>
      </li>
    </>
  );
};
