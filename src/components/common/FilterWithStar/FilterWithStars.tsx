import React, { Dispatch, useEffect, useState } from 'react';
import './FilterWithStars.css';

interface Props {
  description: boolean;
  setEvaluation: Dispatch<React.SetStateAction<number>>;
}

console.log('is success');
export const FilterStudents = (props: Props) => {
  const [params, setParams] = useState();

  return (
    <div className="filter-with-stars">
      <p>{props.description}</p>
      <div className="filter-with-stars__helper-box">
        {/*<StarButton description={} />*/}
      </div>
    </div>
  );
};
