import React, { useState } from 'react';
import { TopBar } from '../TopBar/TopBar';
import { MenuAvailableTalk } from '../MenuAvailableTalk/MenuAvailableTalk';
import './HrInterviewStudents.css';

export const HrInterviewStudents = () => {
  return (
    <>
      <div className="hr-all-students">
        <TopBar />
        <MenuAvailableTalk />
        <p>MenuSearchAndFilter</p>
        <p>ListOfStudents</p>
        <p>PaginationBar</p>
      </div>
    </>
  );
};
