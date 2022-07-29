import React, { Dispatch, useEffect } from 'react';
import './StarButton.css';

interface Props {
  setOption: Dispatch<React.SetStateAction<any>>;
  description: string;
}

export const StarButton = (props: Props) => {
  return (
    <button className="star-button" onClick={props.setOption}>
      <span className="star-button__description">{props.description}</span>
      <span className="star-button__icon">★</span>
    </button>
  );
};
