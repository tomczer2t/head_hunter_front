import React from 'react';
import './AdminPanel.css';
import { Header } from '../common/Header/Header';
import { FormForAddingHr } from '../FormForAddingHr/FormForAddingHr';
import { FormForAddingCsv } from '../FormForAddingCsv/FormForAddingCsv';

export const AdminPanel = () => {
  return (
    <div className="admin-panel">
      <Header section="Admin Panel" />
      <div className="admin-panel__box-helper">
        <FormForAddingHr />
        <FormForAddingCsv />
      </div>
    </div>
  );
};
