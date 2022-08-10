import React from 'react';

import './ExpectationElement.css';

interface Props {
  title: string;
  value: string;
  isMonthsExp?: boolean;
}

export const Expectation = ({ title, value, isMonthsExp }: Props) => {
  let val: string | number = value;
  if (isMonthsExp && isFinite(Number(val))) {
    val = Number(val);
    if (val === 1) {
      val = `${val} miesiąc`;
    }
    if (val > 1 && val < 5) {
      val = `${val} miesiące`;
    }
    if (val < 4) {
      val = `${val} miesięcy`;
    }
  }

  return (
    <div className="Expectation">
      <h4 className="Expectation__title">{title}</h4>
      <span className="Expectation__value">{val}</span>
    </div>
  );
};
