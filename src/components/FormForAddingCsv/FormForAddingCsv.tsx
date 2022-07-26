import React, { useEffect } from 'react';
import './FormForAddingCsv.css';

export const FormForAddingCsv = () => {
  useEffect(() => {}, []);

  const sendForm = () => {};

  return (
    <div className="form-adding-csv">
      <form
        onSubmit={() => {
          void sendForm();
        }}
        className="form-adding-csv__form"
      >
        <h3 className="form-adding-csv__form__title">
          Dodawanie CSV z Kursantami
        </h3>
        <input type="file" />
        <button>Wyślij plik CSV</button>
      </form>
    </div>
  );
};
