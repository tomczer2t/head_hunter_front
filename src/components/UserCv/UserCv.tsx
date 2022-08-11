import React from 'react';
import { UserDescription } from './UserDescription/UserDescription';
import { UserTable } from './UserTable/UserTable';
import { SingleStudentProfile } from 'types';

import './UserCv.css';

interface Props {
  student: SingleStudentProfile;
}

export const UserCv = ({ student }: Props) => {
  return (
    <main className="UserCv__container">
      <UserDescription student={student} />
      <UserTable student={student} />
    </main>
  );
};
