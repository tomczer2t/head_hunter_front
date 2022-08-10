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
          value={`${student.expectedSalary} zł`}
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

      {student.education && (
        <>
          <UserTableHeader title="Edukacja" />
          <TextDescription text={student.education} />
        </>
      )}

      {student.courses && (
        <>
          <UserTableHeader title="Kursy" />
          <TextDescription text={student.courses} />
        </>
      )}

      {student.workExperience && (
        <>
          <UserTableHeader title="Doświadczenie zawodowe" />
          <TextDescription text={student.workExperience} />
        </>
      )}

      {student.portfolioUrls && (
        <>
          <UserTableHeader title="Portfolio" />
          <div className="UserTable__links-container">
            {student.portfolioUrls.map((url) => (
              <ProjectLink link={url} />
            ))}
          </div>
        </>
      )}

      <UserTableHeader title="Projekt w zespole Scrumowym" />
      <div className="UserTable__links-container">
        <ProjectLink
          link={`https://github.com/tomczer2t/head_hunter_back/commits/develop?author=tomczer2t`}
        />
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
