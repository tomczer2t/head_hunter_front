import starWhite from '../../../assets/images/star-white.svg';
import starRed from '../../../assets/images/star-red.svg';
import React from 'react';
import { FiltState, StarNames } from '../../../types/hr/hr';

export const BtnStar = ({
  nameVar,
  filterState,
  handleStat,
}: {
  nameVar: StarNames;
  filterState: FiltState;
  handleStat: (s: FiltState) => void;
}) => {
  const btn = [];
  function handleStarClicked(starIndex: number, starName: StarNames) {
    const newState = JSON.parse(JSON.stringify(filterState)) as FiltState;
    newState[starName][starIndex] = !newState[starName][starIndex];
    handleStat(newState);
  }

  for (let i = 5; i > 0; i--) {
    btn.push(
      <button
        className={
          filterState[nameVar][i]
            ? 'filter-popup-btn-star filter-popup-btn-star--active'
            : 'filter-popup-btn-star'
        }
        onClick={() => handleStarClicked(i, nameVar)}
        key={i}
      >
        {i}{' '}
        <img
          src={filterState[nameVar][i] ? starWhite : starRed}
          alt="star"
          className="star"
        />
      </button>,
    );
  }
  return <>{btn}</>;
};
