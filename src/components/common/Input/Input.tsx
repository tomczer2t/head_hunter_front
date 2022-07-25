import React, { Dispatch, useEffect } from 'react';
import './Input.css';

interface Props {
  description?: string;
  correct: boolean | null;
  name: string;
  value: string | number;
  setValue: React.ChangeEventHandler<HTMLInputElement>;
  placeholder: string;
  type: string;
  message: string;
}

export const Input = (props: Props) => {
  useEffect(() => {}, [props.correct]);

  return (
    <>
      {props.description ? (
        <p className="input-custom__description">{props.description}</p>
      ) : null}
      <div
        className={`input-custom
        ${
          props.correct === null
            ? ''
            : props.correct
            ? 'input-custom--correct'
            : 'input-custom--incorrect'
        }`}
      >
        <input
          name={props.name}
          value={props.value}
          onChange={props.setValue}
          placeholder={props.placeholder}
          type={props.type}
        />
        {props.correct === false ? <p>{props.message}</p> : null}
      </div>
    </>
  );
};
