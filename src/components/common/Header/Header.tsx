import React, { useEffect } from 'react';
import './Header.css';

interface Props {
  section: string;
}

export const Header = (props: Props) => {
  useEffect(() => {}, []);

  return (
    <div className="header">
      <div className="header__logo"></div>
      <div className="header__section">
        <h2>{props.section}</h2>
      </div>
      <div className="header__content"></div>
    </div>
  );
};
