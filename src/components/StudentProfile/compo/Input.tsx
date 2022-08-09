import React from 'react';

export const Input = ({ name, errorMessage, value, changeData }) => {
  console.log();
  return (
    <>
      <label htmlFor={name}>
        Imie: <p>{errorMessage}</p>
      </label>
      <input
        type="text"
        id={name}
        name={name}
        value={value}
        onChange={changeData}
      />
    </>
  );
};
