import React from 'react';

import './UserTableHeader.css';

interface Props {
  title: string;
}

export const UserTableHeader = ({ title }: Props) => {
  return <h2 className="UserTable__header">{title}</h2>;
};
