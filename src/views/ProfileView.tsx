import React from 'react';
import { StudentProfile } from '../components/StudentProfile/StudentProfile';
import { TopBar } from '../components/TopBar/TopBar';
import '../components/StudentProfile/StudentProfile.css';

export const ProfileView = () => {
  return (
    <>
      <div className="studentProfile">
        <TopBar />
        <StudentProfile />
      </div>
    </>
  );
};
