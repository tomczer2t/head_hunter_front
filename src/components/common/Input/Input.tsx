import React, { Dispatch, useEffect } from 'react';
import './Input.css';

interface Props {
  correct: boolean | null;
  name: string;
  value: string | number;
  setValue: React.ChangeEventHandler<HTMLInputElement>;
  placeholder: string;
  type: string;
  message: string;
}

export const Input = (props: Props) => {
  useEffect(() => {}, []);

  return (
    <div
      className={
        props.correct === null
          ? 'input-custom'
          : props.correct
          ? 'input-correct'
          : 'input-incorrect'
      }
    >
      <input
        name={props.name}
        value={props.value}
        onChange={props.setValue}
        placeholder={props.placeholder}
        type={props.type}
      />
      {props.correct === null ? null : <p>{props.message}</p>}
    </div>
  );
};
