import React, { useEffect, useState } from 'react';
import './FormForAddingHr.css';
import { Input } from '../common/Input/Input';

export const FormForAddingHr = () => {
  const [hrFormData, setHrFormData] = useState();

  useEffect(() => {}, []);

  const changedHandle = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    return setHrFormData((loginParams: any) => ({
      ...loginParams,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <div className="form-adding-hr">
      <form className="form-adding-hr__form" action="">
        <h3>Add HRV</h3>
        <Input />
        <button type="submit">Add</button>
      </form>
    </div>
  );
};
