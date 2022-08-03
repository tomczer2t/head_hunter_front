import React, { useState } from 'react';
import './SearchFilterBar.css';
import magnifier from '../../assets/images/magnifier.svg';
import filter from '../../assets/images/filter.svg';
import { Filter } from '../Filter/Filter';

export const SearchFilterBar = () => {
  const [search, setSearch] = useState('');

  function searchHandler(e: React.FormEvent) {
    e.preventDefault();
  }

  return (
    <div className="search-filter-bar">
      <div>
        <form onSubmit={SearchFilterBar}>
          <button className="search-filter-bar__bnt" onSubmit={SearchFilterBar}>
            <img src={magnifier} className="search-filter-bar__magnifier" />
          </button>
          <input
            type="text"
            placeholder="Szukaj"
            className="search-filter-bar__input"
            onChange={(e) => setSearch(e.target.value)}
          />
        </form>
      </div>
      <button className="search-filter-bar__filter">
        <img
          src={filter}
          alt="Filtrowanie"
          className="search-filter-bar__filter-ico"
        />
        Filter
      </button>
      {/*<Filter /> // @ToDo to jest filtrowanie popup*/}
    </div>
  );
};
