import React from 'react';

import './TextDescription.css';

interface Props {
  text: string;
}

export const TextDescription = ({ text }: Props) => {
  return (
    <div className="TextDescription">
      <p className="TextDescription__text">{text}</p>
    </div>
  );
};
