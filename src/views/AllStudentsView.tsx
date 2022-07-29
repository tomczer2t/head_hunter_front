import React, { useState } from 'react';
import { FilterStudents } from '../components/FilterStudents/FilterStudents';

export const AllStudentsView = () => {
  const [filterStudents, setFilterStudents] = useState();

  return (
    <>
      <h1>AllStudentsView</h1>
      <FilterStudents active={true} setFilterData={setFilterStudents} />
    </>
  );
};
