import React, { useEffect, useState } from 'react';
import './SearchFilterBar.css';
import magnifier from '../../assets/images/magnifier.svg';
import filter from '../../assets/images/filter.svg';
import { Filter } from './Filter/Filter';
import { HrAllStudentsRequest } from '../../types/hr/hr';
import { Sort } from './Sort/Sort';

interface Props {
  dataToAxiosForListOfStudents: HrAllStudentsRequest;
  setDataToAxiosForListOfStudents: React.Dispatch<
    React.SetStateAction<HrAllStudentsRequest>
  >;
  fetchStudents: () => Promise<void>;
}

export const SearchFilterBar = ({
  dataToAxiosForListOfStudents,
  setDataToAxiosForListOfStudents,
  fetchStudents,
}: Props) => {
  const [search, setSearch] = useState('');
  const [activeFilter, setActiveFilter] = useState(false);
  const [activeSort, setActiveSort] = useState(false);
  function searchHandler(e: React.FormEvent) {
    e.preventDefault();
  }

  useEffect(() => {
    const keyDownHandler = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && activeFilter) {
        event.preventDefault();
        setActiveFilter(false);
      }
    };
    document.addEventListener('keydown', keyDownHandler);
    return () => {
      document.removeEventListener('keydown', keyDownHandler);
    };
  }, [activeFilter]);

  useEffect(() => {
    const keyDownHandler = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && activeSort) {
        event.preventDefault();
        setActiveSort(false);
      }
    };
    document.addEventListener('keydown', keyDownHandler);
    return () => {
      document.removeEventListener('keydown', keyDownHandler);
    };
  }, [activeSort]);

  function handleSearch(event: React.FormEvent<HTMLFormElement>) {
    const newState = JSON.parse(
      JSON.stringify(dataToAxiosForListOfStudents),
    ) as HrAllStudentsRequest;
    newState.search = search;
    setDataToAxiosForListOfStudents(newState);
    event.preventDefault();
  }
  return (
    <>
      <div className="search-filter-bar">
        <div>
          <form onSubmit={handleSearch}>
            <button className="search-filter-bar__bnt">
              <img src={magnifier} className="search-filter-bar__magnifier" />
            </button>
            <input
              type="text"
              placeholder="Szukaj"
              className="search-filter-bar__input"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </form>
        </div>
        <button
          className="search-filter-bar__filter"
          onClick={() => setActiveSort(true)}
        >
          Sortowanie
        </button>
        {activeSort ? (
          <Sort
            setActiveSort={setActiveSort}
            dataToAxiosForListOfStudents={dataToAxiosForListOfStudents}
            setDataToAxiosForListOfStudents={setDataToAxiosForListOfStudents}
          />
        ) : null}

        <button
          className="search-filter-bar__filter"
          onClick={() => setActiveFilter(true)}
        >
          <img
            src={filter}
            alt="Filtrowanie"
            className="search-filter-bar__filter-ico"
          />
          Filtrowanie
        </button>
      </div>
      {activeFilter ? (
        <Filter
          fetchStudents={fetchStudents}
          setActiveFilter={setActiveFilter}
          dataToAxiosForListOfStudents={dataToAxiosForListOfStudents}
          setDataToAxiosForListOfStudents={setDataToAxiosForListOfStudents}
        />
      ) : null}
    </>
  );
};
