import React from 'react';
import { Dummy } from '../HrAllStudents/HrAllStudents';

export const ListStudentsForBooking = (props: Dummy[]) => {
  const listStudents = props;
  const listStudentsFullName = [];
  for (let i = 0; i < 6 ; i++) {
    listStudentsFullName.push(listStudents[i])
  }
  console.log(listStudentsFullName);
  return (
    <>
      <div>ListStudentsForBooking</div>
    </>
  );
};
