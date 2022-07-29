import React from 'react';
import { Dummy } from '../../HrAllStudents/HrAllStudents';
import './SingleStudent.css';

interface DummyAndKey extends Dummy {
  indexKey: number;
}

export const SingleStudent = (props: Dummy) => {
  return (
    <>
      <li className="single-student">
        <div className="single-student__name">{props.fullName}</div>
        <button>Zarezerwuj rozmowę</button>
      </li>
    </>
  );
};
