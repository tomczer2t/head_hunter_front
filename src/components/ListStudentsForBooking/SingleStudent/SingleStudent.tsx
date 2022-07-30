import React, { useState } from 'react';
import { Dummy } from '../../HrAllStudents/HrAllStudents';
import './SingleStudent.css';
import upArrow from '../../../assets/images/upArrow.svg';
import { SingleStudentDetails } from './SingleStudentDetails/SingleStudentDetails';

export const SingleStudent = (props: Dummy) => {
  const [isActive, setActive] = useState(false);
  function hadleClickMoreInfo() {
    setActive(!isActive);
  }

  return (
    <>
      <li className="single-student">
        <div className="single-student__name">{props.fullName}</div>
        <div className="single-student__small-wrapper">
          <button className="single-student__btn">Zarezerwuj rozmowę</button>
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
          <SingleStudentDetails {...props} isActive={isActive} />
        </div>
      </li>
    </>
  );
};
