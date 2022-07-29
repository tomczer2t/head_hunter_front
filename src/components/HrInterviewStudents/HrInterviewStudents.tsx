import React, { useState } from 'react';
import { TopBar } from '../TopBar/TopBar';
import { MenuAvailableTalk } from '../MenuAvailableTalk/MenuAvailableTalk';
import './HrInterviewStudents.css';
import { SearchFilterBar } from '../SearchFilterBar/SearchFilterBar';

export const HrInterviewStudents = () => {
  return (
    <>
      <div className="hr-all-students">
        <TopBar />
        <MenuAvailableTalk />
        <SearchFilterBar />
        <p>ListOfStudents</p>
        <p>PaginationBar</p>
      </div>
    </>
  );
};
