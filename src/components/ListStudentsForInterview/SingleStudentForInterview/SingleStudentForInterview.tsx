import React, { useState } from 'react';
import './SingleStudentForInterview.css';
import upArrow from '../../../assets/images/upArrow.svg';
import { SingleStudentDetails } from '../../ListStudentsForBooking/SingleStudent/SingleStudentDetails/SingleStudentDetails';
import defaultAvatar from '../../../assets/images/default_avatar.jpg';
import { StudentDetailsAndReservationDate } from '../../../types/hr/hr';

export const SingleStudentForInterview = (
  props: StudentDetailsAndReservationDate,
) => {
  const [isActive, setActive] = useState(false);
  function hadleClickMoreInfo() {
    setActive(!isActive);
  }

  return (
    <>
      <li className="single-student-interview">
        <div className="single-student-interview__reservation_name_wrapper">
          <div className="single-student-interview__reservation-date">
            <div>Rezerwacja do</div>
            <div>{props.reservationDate}</div>
          </div>
          <img src={defaultAvatar} alt="Zdjęcie kursanta" />
          <div className="single-student-interview__name">
            {props.firstName} , {props.lastName}
          </div>
        </div>
        <div className="single-student-interview__small-wrapper">
          <button className="single-student-interview__btni">Pokaż CV</button>
          <button className="single-student-interview__btni">
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
          <SingleStudentDetails {...props} isActive={isActive} />
        </div>
      </li>
    </>
  );
};
