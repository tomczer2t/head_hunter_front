import React from 'react';
import { UserTableHeader } from './UserTableHeader/UserTableHeader';
import { DegreeElement } from './DegreeElement/DegreeElement';
import { Expectation } from './ExpectationElement/ExpectationElement';
import { TextDescription } from './TextDescription/TextDescription';
import { ProjectLink } from './ProjectLink/ProjectLink';
import { SingleStudentProfile } from 'types';

import './UserTable.css';

interface Props {
  student: SingleStudentProfile;
}

export const UserTable = ({ student }: Props) => {
  return (
    <div className="UserTable">
      <UserTableHeader title="Oceny" />
      <div className="UserTable__container">
        <DegreeElement
          title="Ocena przejścia kursu"
          stars={student.courseCompletion}
        />
        <DegreeElement
          title="Ocena aktywności i zaangażowania na kursie"
          stars={student.courseEngagment}
        />
        <DegreeElement
          title="Ocena kodu w projekcie własnym"
          stars={student.projectDegree}
        />
        <DegreeElement
          title="Ocena pracy w zespole w Scrum"
          stars={student.teamProjectDegree}
        />
      </div>

      <UserTableHeader title="Oczekiwanie w stosunku do zatrudnienia" />
      <div className="UserTable__container">
        <Expectation
          title="Preferowane miejsce pracy"
          value={student.expectedTypeWork}
        />
        <Expectation
          title="Docelowe miasto, gdzie chce pracować kandydat"
          value="Warszawa"
        />
        <Expectation
          title="Oczekiwany typ kontraktu"
          value={student.expectedContractType}
        />
        <Expectation
          title="Oczekiwane wynagrodzenie miesięczne netto"
          value="8000 zł"
        />
        <Expectation
          title="Zgoda na odbycie bezpłatnych praktyk/stażu na początek"
          value={student.canTakeApprenticeship ? 'Tak' : 'Nie'}
        />
        <Expectation
          title="Komercyjne doświadczenie w programowaniu"
          value={student.workExperience}
          isMonthsExp={true}
        />
      </div>

      <UserTableHeader title="Edukacja" />
      <TextDescription text="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet." />

      <UserTableHeader title="Kursy" />
      <TextDescription text="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet." />

      <UserTableHeader title="Doświadczenie zawodowe" />
      <TextDescription text="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet." />

      <UserTableHeader title="Portfolio" />
      <div className="UserTable__links-container">
        <ProjectLink link="https://Loremipsum/dolor/sit/amet" />
      </div>

      <UserTableHeader title="Projekt w zespole Scrumowym" />
      <div className="UserTable__links-container">
        <ProjectLink link="https://github.com/Ami777/MegaKursTest/commits?author=Ami777" />
        <ProjectLink link="https://github.com/Ami777/MegaKursTest/pulls?q=is%3Apr+reviewed-by%3AAmi777" />
      </div>

      <UserTableHeader title="Projekt na zaliczenie" />
      <div className="UserTable__links-container">
        <ProjectLink link="https://Loremipsum/dolor/sit/amet" />
        <ProjectLink link="https://Loremipsum/dolor/sit/amet" />
      </div>
    </div>
  );
};
