import React from 'react';
import './SearchFilterBar.css';
import magnifier from '../../assets/images/magnifier.svg';

export const SearchFilterBar = () => {
  function searchHandler(e: React.FormEvent) {
    e.preventDefault();
  }

  return (
    <div className="search-filter-bar">
      <div>
        <form>
          <img src={magnifier} className="search-filter-bar__magnifier" />
          <input
            type="text"
            placeholder="Szukaj"
            className="search-filter-bar__input"
          />
        </form>
      </div>
      <div>Filter</div>
    </div>
  );
};
