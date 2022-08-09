import React from 'react';
import { HrAllStudentsRequest, Sorted } from '../../../types/hr/hr';
import './Sort.css';

export const Sort = ({
  setActiveSort,
  dataToAxiosForListOfStudents,
  setDataToAxiosForListOfStudents,
}: {
  setActiveSort: React.Dispatch<React.SetStateAction<boolean>>;
  dataToAxiosForListOfStudents: HrAllStudentsRequest;
  setDataToAxiosForListOfStudents: React.Dispatch<
    React.SetStateAction<HrAllStudentsRequest>
  >;
}) => {
  function handleSelect(value: Sorted) {
    console.log(value); // @Todo dodać co się stanie
    const newSort = JSON.parse(
      JSON.stringify(dataToAxiosForListOfStudents),
    ) as HrAllStudentsRequest;
    newSort.sortedBy = value;
    setDataToAxiosForListOfStudents(newSort);
  }

  return (
    <>
      <div className="sort-popup__back-wrapper"></div>
      <div className="sort-popup__wrapper">
        <div className="sort-popup__title">Sortuj po:</div>
        <div className="sort__select">
          <select
            onChange={(event) => handleSelect(event.target.value as Sorted)}
            defaultValue="courseCompletion_ASC"
          >
            <option value="courseCompletion_ASC">
              Ocena przejścia kursu: rosnąco
            </option>
            <option value="courseCompletion_DESC">
              Ocena przejścia kursu: malejąco
            </option>
            <option value="courseEngagement_ASC">
              Ocena aktywności i zaangażowania na kursie: rosnąco
            </option>
            <option value="courseEngagement_DESC">
              Ocena aktywności i zaangażowania na kursie: malejąco
            </option>
            <option value="projectDegree_ASC">
              Ocena kodu w projekcie własnym: rosnąco
            </option>
            <option value="projectDegree_DESC">
              Ocena kodu w projekcie własnym: malejąco
            </option>
            <option value="teamProjectDegree_ASC">
              Ocena pracy w zespole w Scrum: rosnąco
            </option>
            <option value="teamProjectDegree_DESC">
              Ocena pracy w zespole w Scrum: malejąco
            </option>
            <option value="expectedSalary_ASC">
              Oczekiwane wynagrodzenie miesięczne netto: rosnąco
            </option>
            <option value="expectedSalary_DESC">
              Oczekiwane wynagrodzenie miesięczne netto: malejąco
            </option>
            <option value="monthsOfCommercialExp_ASC">
              Ilość miesięcy doświadczenia komercyjnego kandydata w
              programowaniu: rosnąco
            </option>
            <option value="monthsOfCommercialExp_DESC">
              Ilość miesięcy doświadczenia komercyjnego kandydata w
              programowaniu: malejąco
            </option>
          </select>
        </div>
      </div>
    </>
  );
};
