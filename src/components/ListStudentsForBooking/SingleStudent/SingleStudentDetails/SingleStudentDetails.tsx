import React from 'react';
import './SingleStudentDetails.css';
import { Dummy } from '../../../HrAllStudents/HrAllStudents';

interface DummyIsActive extends Dummy {
  isActive: boolean;
}

export const SingleStudentDetails = (props: DummyIsActive) => {
  const {
    courseDegree,
    courseEngagement,
    projectDegree,
    teamProjectDegree,
    expectedTypeWork,
    targetWorkCity,
    expectedContractType,
    expectedSalary,
    canTakeApprenticeship,
    monthsOfCommercialExp,
    isActive,
  }: DummyIsActive = props;
  return (
    <>
      <table
        className={
          isActive
            ? 'single-student-details single-student-details--active'
            : 'single-student-details'
        }
      >
        <thead>
          <tr>
            <th>Ocena przejścia kursu</th>
            <th>Ocena aktywności i zaangażowania na kursie</th>
            <th>Ocena kodu w projekcie własnym</th>
            <th>Ocena pracy w zespole w Scrum</th>
            <th>Preferowane miejsce pracy</th>
            <th>Docelowe miasto, gdzie chce pracować kandydat</th>
            <th>Oczekiwany typ kontraktu</th>
            <th>Oczekiwane wynagrodzenie miesięczne netto</th>
            <th>Zgoda na odbycie bezpłatnych praktyk/stażu na początek</th>
            <th>Komercyjne doświadczenie w programowaniu</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{courseDegree} /5</td>
            <td>{courseEngagement} /5</td>
            <td>{projectDegree} /5</td>
            <td>{teamProjectDegree} /5</td>
            <td>{expectedTypeWork}</td>
            <td>{targetWorkCity}</td>
            <td>{expectedContractType}</td>
            <td>{expectedSalary}</td>
            <td>{canTakeApprenticeship}</td>
            <td>{monthsOfCommercialExp}</td>
          </tr>
        </tbody>
      </table>
    </>
  );
};
