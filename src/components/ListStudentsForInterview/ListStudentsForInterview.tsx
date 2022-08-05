import React from 'react';
import './ListStudentsForInterview.css';
import { SingleStudentForInterview } from './SingleStudentForInterview/SingleStudentForInterview';
import { StudentDetailsAndReservationDate } from '../HrInterviewStudents/HrInterviewStudents';

export const ListStudentsForInterview = (
  props: StudentDetailsAndReservationDate[],
) => {
  const studentsList = [];
  for (let i = 0; i < Object.keys(props).length; i++) {
    studentsList.push(props[i]);
  }
  return (
    <>
      <div className="hr-all-students-interview__wrapper">
        <ul className="hr-all-students-interview">
          {studentsList.map((student, index) => (
            <SingleStudentForInterview {...student} key={index} />
          ))}
        </ul>
      </div>
    </>
  );
};
