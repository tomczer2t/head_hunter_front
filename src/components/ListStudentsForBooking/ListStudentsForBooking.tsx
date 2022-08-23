import React, { useState } from 'react';
import { SingleStudent } from './SingleStudent/SingleStudent';
import './ListStudentsForBooking.css';
import { FilteredAvailableStudent } from 'types';
import { MessageResponse } from '../common/MessageResponse/MessageResponse';

interface Props {
  students: FilteredAvailableStudent[];
}

export const ListStudentsForBooking = (props: Props) => {
  const [error, setError] = useState('');

  return (
    <>
      <div className="list-students-for-booking__wrapper">
        <ul className="list-students-for-booking">
          {props.students.map((student) => (
            <SingleStudent
              setError={setError}
              student={student}
              key={student.userId}
            />
          ))}
        </ul>
      </div>
      <MessageResponse
        closeMessage={() => setError('')}
        message={error}
        showMessageResponse={!!error}
      />
    </>
  );
};
