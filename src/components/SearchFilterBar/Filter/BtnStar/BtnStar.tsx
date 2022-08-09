import starWhite from '../../../../assets/images/star-white.svg';
import starRed from '../../../../assets/images/star-red.svg';
import React from 'react';
import { FiltState, StarNames } from '../../../../types/hr/hr';

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
    // newState[starName][starIndex] = !newState[starName][starIndex];
    const nS = newState[starName];
    if (nS !== null) {
      nS[starIndex] = !nS[starIndex];
    }
    handleStat(newState);
  }

  for (let i = 4; i > -1; i--) {
    const fS = filterState[nameVar];

    btn.push(
      <button
        className={
          fS !== null
            ? fS[i]
              ? 'filter-popup-btn-star filter-popup-btn-star--active'
              : 'filter-popup-btn-star'
            : 'filter-popup-btn-star'
        }
        onClick={() => handleStarClicked(i, nameVar)}
        key={i}
      >
        {i + 1}{' '}
        <img
          src={fS !== null ? (fS[i] ? starWhite : starRed) : starWhite}
          alt="star"
          className="star"
        />
      </button>,
    );
  }
  return <>{btn}</>;
};
