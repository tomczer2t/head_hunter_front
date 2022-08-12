import React, { useState } from 'react';
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
  const [defSort, setDefSort] = useState<Sorted>(Sorted.courseCompletion_ASC);

  function handleSelect(value: Sorted) {
    setDefSort(value);
    const newSort = JSON.parse(
      JSON.stringify(dataToAxiosForListOfStudents),
    ) as HrAllStudentsRequest;
    newSort.sortedBy = value;
    setDataToAxiosForListOfStudents(newSort);
    setActiveSort(false);
  }
  return (
    <>
      <div className="sort-popup__back-wrapper"></div>
      <div className="sort-popup__wrapper">
        <div className="sort-popup__title">Sortuj po:</div>
        <button className="sort__cancel" onClick={() => setActiveSort(false)}>
          Anuluj
        </button>
        <div className="sort__select">
          <select
            onChange={(event) => {
              event.preventDefault();
              handleSelect(event.target.value as Sorted);
            }}
            defaultValue={defSort}
          >
            <option value={Sorted.noSort}>--------------------------</option>
            <option value={Sorted.courseCompletion_ASC}>
              Ocena przejścia kursu: rosnąco
            </option>
            <option value={Sorted.courseCompletion_DESC}>
              Ocena przejścia kursu: malejąco
            </option>
            <option value={Sorted.courseEngagement_ASC}>
              Ocena aktywności i zaangażowania na kursie: rosnąco
            </option>
            <option value={Sorted.courseEngagement_DESC}>
              Ocena aktywności i zaangażowania na kursie: malejąco
            </option>
            <option value={Sorted.projectDegree_ASC}>
              Ocena kodu w projekcie własnym: rosnąco
            </option>
            <option value={Sorted.projectDegree_DESC}>
              Ocena kodu w projekcie własnym: malejąco
            </option>
            <option value={Sorted.teamProjectDegree_ASC}>
              Ocena pracy w zespole w Scrum: rosnąco
            </option>
            <option value={Sorted.teamProjectDegree_DESC}>
              Ocena pracy w zespole w Scrum: malejąco
            </option>
            <option value={Sorted.expectedSalary_ASC}>
              Oczekiwane wynagrodzenie miesięczne netto: rosnąco
            </option>
            <option value={Sorted.expectedSalary_DESC}>
              Oczekiwane wynagrodzenie miesięczne netto: malejąco
            </option>
            <option value={Sorted.monthsOfCommercialExp_ASC}>
              Ilość miesięcy doświadczenia komercyjnego kandydata w
              programowaniu: rosnąco
            </option>
            <option value={Sorted.monthsOfCommercialExp_DESC}>
              Ilość miesięcy doświadczenia komercyjnego kandydata w
              programowaniu: malejąco
            </option>
          </select>
        </div>
      </div>
    </>
  );
};
