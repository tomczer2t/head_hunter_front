import React from 'react';
import { Dummy } from '../HrAllStudents/HrAllStudents';
import { SingleStudent } from './SingleStudent/SingleStudent';
import './ListStudentsForBooking.css';

export const ListStudentsForBooking = (props: Dummy[]) => {
  const studentsList = [];
  for (let i = 0; i < Object.keys(props).length; i++) {
    studentsList.push(props[i]);
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
