import React, { Dispatch, useEffect } from 'react';
import './Input.css';

interface Props {
  value: string;
  setValue: React.ChangeEventHandler<HTMLInputElement>;
  placeholder: string;
  type: string;
}

export const Input = (props: Props) => {
  useEffect(() => {}, []);

  return (
    <input type={props.type} value={props.value} onChange={props.setValue} />
  );
};
