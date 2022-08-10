import React from 'react';
import redStar from '../../../../assets/images/star-solid-red.svg';
import grayStar from '../../../../assets/images/star-solid-gray.svg';

import './DegreeElement.css';

interface Props {
  title: string;
  stars: number;
}

export const DegreeElement = ({ title, stars }: Props) => {
  return (
    <div className="DegreeElement">
      <h4 className="DegreeElement__course-degree-title">{title}</h4>
      <div className="DegreeElement__course-degree-numbers-stars-container">
        <div className="DegreeElement__course-degree-numbers">
          <span className="DegreeElement__course-degree-number DegreeElement__course-degree-number--actual">
            {stars}{' '}
          </span>
          <span className="DegreeElement__course-degree-number DegreeElement__course-degree-number--max">
            / 5
          </span>
        </div>
        <div className="DegreeElement__course-degree-stars">
          <img
            className="DegreeElement__course-degree-star"
            src={stars > 0 ? redStar : grayStar}
            alt="red star"
          />
          <img
            className="DegreeElement__course-degree-star"
            src={stars > 1 ? redStar : grayStar}
            alt="red star"
          />
          <img
            className="DegreeElement__course-degree-star"
            src={stars > 2 ? redStar : grayStar}
            alt="red star"
          />
          <img
            className="DegreeElement__course-degree-star"
            src={stars > 3 ? redStar : grayStar}
            alt="red star"
          />
          <img
            className="DegreeElement__course-degree-star"
            src={stars === 5 ? redStar : grayStar}
            alt="red star"
          />
        </div>
      </div>
    </div>
  );
};
