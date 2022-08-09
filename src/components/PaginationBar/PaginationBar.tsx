import React, { useState } from 'react';
import {
  HrAllStudentsRequest,
  SearchFilterRequestState,
} from '../../types/hr/hr';
import ArrowBack from '../../assets/images/back.svg';
import './PaginationBar.css';

interface PaginationState {
  numActualPage: number;
  numStudentsCountPerPage: number;
}

export const PaginationBar = ({
  dataToAxiosForListOfStudents,
  setDataToAxiosForListOfStudents,
}: SearchFilterRequestState) => {
  function handleSelect(value: string) {
    const newPagi = JSON.parse(
      JSON.stringify(dataToAxiosForListOfStudents),
    ) as HrAllStudentsRequest;
    newPagi.numStudentsCountPerPage = Number(value);
    setDataToAxiosForListOfStudents(newPagi);
  }
  return (
    <>
      <div className="pagination">
        <div className="pagination__title">Ilość elementów</div>
        <div className="pagination__select">
          <select
            onChange={(event) => handleSelect(event.target.value)}
            defaultValue="10"
          >
            <option value="10">10</option>
            <option value="20">20</option>
            <option value="40">40</option>
          </select>
        </div>
        <div className="pagination__details">10 z 90</div>
        <button className="pagination__btn--back">
          <img src={ArrowBack} alt="poprzednia strona" />
        </button>
        <button className="pagination__btn--forward">
          <img src={ArrowBack} alt="następna strona" />
        </button>
      </div>
    </>
  );
};
