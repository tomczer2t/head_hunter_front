import React from 'react';
import { SingleStudent } from './SingleStudent/SingleStudent';
import './ListStudentsForBooking.css';
import { HrAllStudentsRequestState } from '../../types/hr/hr';

export const ListStudentsForBooking = (props: HrAllStudentsRequestState) => {
  const studentsList = [];
  for (
    let i = 0;
    i < Object.keys(props.studentDetailsListOfStudentsForBooking).length;
    i++
  ) {
    studentsList.push(props.studentDetailsListOfStudentsForBooking[i]);
  }

  return (
    <>
      <div className="list-students-for-booking__wrapper">
        <ul className="list-students-for-booking">
          {studentsList.map((student, index) => (
            <SingleStudent {...student} key={index} />
          ))}
        </ul>
      </div>
    </>
  );
};
