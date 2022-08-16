import React from 'react';
import { SingleStudent } from './SingleStudent/SingleStudent';
import './ListStudentsForBooking.css';
import { FilteredAvailableStudent } from 'types';

interface Props {
  students: FilteredAvailableStudent[];
}

export const ListStudentsForBooking = (props: Props) => {
  return (
    <>
      <div className="list-students-for-booking__wrapper">
        <ul className="list-students-for-booking">
          {props.students.map((student) => (
            <SingleStudent student={student} key={student.userId} />
          ))}
        </ul>
      </div>
    </>
  );
};
