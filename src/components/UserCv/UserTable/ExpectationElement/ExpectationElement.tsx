import React from 'react';

import './ExpectationElement.css';

interface Props {
  title: string;
  value: string;
}

export const Expectation = ({ title, value }: Props) => {
  return (
    <div className="Expectation">
      <h4 className="Expectation__title">{title}</h4>
      <span className="Expectation__value">{value}</span>
    </div>
  );
};
