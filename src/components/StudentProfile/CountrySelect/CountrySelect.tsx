import React, { Dispatch } from 'react';
import * as countryCode from './country.json';

interface Props {
  id: string;
  name: string;
  value: string;
  changeHandler: Dispatch<
    React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  >;
}

type Countries = [string, { code: string; name: string }];

export const CountrySelect = (props: Props) => {
  const countries = Object.entries(countryCode) as Countries[];

  const options = [];

  for (let i = 0; i < countries.length; i++) {
    options.push(
      <option key={i} value={countries[i][1].code}>
        {countries[i][1].name}
      </option>,
    );
  }

  return (
    <>
      <select
        id="countryCode"
        name="countryCode"
        value={props.value}
        onChange={(event) => props.changeHandler(event)}
      >
        {options}
      </select>
    </>
  );
};
