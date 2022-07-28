import React from 'react';
import { UserTableHeader } from './UserTableHeader/UserTableHeader';
import { DegreeElement } from './DegreeElement/DegreeElement';

import './UserTable.css';

export const UserTable = () => {
  return (
    <div className="UserTable">
      <UserTableHeader title="Oceny" />
      <div className="UserTable__degrees-container">
        <DegreeElement title="Ocena przejścia kursu" stars={5} />
        <DegreeElement
          title="Ocena aktywności i zaangażowania na kursie"
          stars={3}
        />
        <DegreeElement title="Ocena kodu w projekcie własnym" stars={4} />
        <DegreeElement title="Ocena pracy w zespole w Scrum" stars={5} />
      </div>
      <UserTableHeader title="Oczekiwanie w stosunku do zatrudnienia" />
      <UserTableHeader title="Edukacja" />
      <UserTableHeader title="Kursy" />
      <UserTableHeader title="Doświadczenie zawodowe" />
      <UserTableHeader title="Portfolio" />
      <UserTableHeader title="Projekt w zespole Scrumowym" />
      <UserTableHeader title="Projekt na zaliczenie" />
    </div>
  );
};
