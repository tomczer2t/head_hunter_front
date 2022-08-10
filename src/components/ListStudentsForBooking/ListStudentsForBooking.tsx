import React from 'react';
import { SingleStudent } from './SingleStudent/SingleStudent';
import { FilteredAvailableStudent } from 'types';
import './ListStudentsForBooking.css';

interface Props {
  students: FilteredAvailableStudent[];
  fetchStudents: () => void;
}

export const ListStudentsForBooking = (props: Props) => {
  const studentsList = [];
  for (let i = 0; i < Object.keys(props.students).length; i++) {
    studentsList.push(props.students[i]);
  }

  return (
    <>
      <div className="list-students-for-booking__wrapper">
        <ul className="list-students-for-booking">
          {studentsList.map((student) => (
            <SingleStudent
              fetchStudents={props.fetchStudents}
              student={student}
              key={student.userId}
            />
          ))}
        </ul>
      </div>
    </>
  );
};
