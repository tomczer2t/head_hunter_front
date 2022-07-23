import React, { useEffect } from 'react';
import './AdminPanel.css';
import { Header } from '../common/Header/Header';
import { FormForAddingHr } from '../FormForAddingHr/FormForAddingHr';
import { FormForAddingCsv } from '../FormForAddingCsv/FormForAddingCsv';

export const AdminPanel = () => {
  useEffect(() => {}, []);

  return (
    <div className="admin-panel">
      <Header section="Admin Panel" />
      <FormForAddingHr />
      <FormForAddingCsv />
    </div>
  );
};
