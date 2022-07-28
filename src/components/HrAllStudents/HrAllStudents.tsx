import React, { useState } from 'react';
import { TopBar } from '../TopBar/TopBar';
import { MenuAvailableTalk } from '../MenuAvailableTalk/MenuAvailableTalk';

export const HrAllStudents = () => {
  return (
    <>
      <TopBar />
      <MenuAvailableTalk />
      <p>MenuSearchAndFilter</p>
      <p>ListOfStudents</p>
      <p>PaginationBar</p>
    </>
  );
};
