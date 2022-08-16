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
  const { numStudentsCountPerPage, numActualPage, numAllUsers } =
    dataToAxiosForListOfStudents;
  return (
    <>
      <div className="pagination">
        <div className="pagination__title">Ilość elementów</div>
        <div className="pagination__select">
          <select
            onChange={(event) => handleSelect(event.target.value)}
            defaultValue={
              numStudentsCountPerPage ? numStudentsCountPerPage : '10'
            }
          >
            <option value="10">10</option>
            <option value="20">20</option>
            <option value="40">40</option>
          </select>
        </div>
        <div className="pagination__details">
          {numActualPage} z {Math.ceil(numAllUsers / numStudentsCountPerPage)}
        </div>
        <button
          disabled={true}
          className={
            numActualPage < 2
              ? 'pagination__btn--back pagination__btn--back--disable'
              : 'pagination__btn--back'
          }
        >
          <img src={ArrowBack} alt="poprzednia strona" />
        </button>
        <button
          className={
            Math.ceil(numAllUsers / numStudentsCountPerPage) <= numActualPage
              ? 'pagination__btn--forward pagination__btn--forward--disable'
              : 'pagination__btn--forward'
          }
        >
          <img src={ArrowBack} alt="następna strona" />
        </button>
      </div>
    </>
  );
};
