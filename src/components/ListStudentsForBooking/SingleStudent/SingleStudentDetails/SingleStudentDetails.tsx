import React from 'react';
import './SingleStudentDetails.css';
import { PickedStudentInfoProperties } from 'types';

interface StudentDetailsIsActive extends PickedStudentInfoProperties {
  isActive: boolean;
  reservationDate?: string;
}

export const SingleStudentDetails = ({
  courseCompletion,
  courseEngagment,
  projectDegree,
  teamProjectDegree,
  expectedTypeWork,
  targetWorkCity,
  expectedContractType,
  expectedSalary,
  canTakeApprenticeship,
  monthsOfCommercialExp,
  isActive,
}: StudentDetailsIsActive) => {
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
            <td>
              {courseCompletion}
              <span className="single-student-details__number"> /5</span>
            </td>
            <td>
              {courseEngagment}
              <span className="single-student-details__number"> /5</span>
            </td>
            <td>
              {projectDegree}
              <span className="single-student-details__number"> /5</span>
            </td>
            <td>
              {teamProjectDegree}
              <span className="single-student-details__number"> /5</span>
            </td>
            <td>{expectedTypeWork}</td>
            <td>{targetWorkCity}</td>
            <td>{expectedContractType}</td>
            <td>{expectedSalary}</td>
            <td>{canTakeApprenticeship ? 'Tak' : 'Nie'}</td>
            <td>{monthsOfCommercialExp}</td>
          </tr>
        </tbody>
      </table>
    </>
  );
};
