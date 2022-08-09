import React, { useCallback, useEffect } from 'react';
import './AdminPanel.css';
import { Header } from '../common/Header/Header';
import { FormForAddingHr } from '../FormForAddingHr/FormForAddingHr';
import { FormForAddingCsv } from '../FormForAddingCsv/FormForAddingCsv';
import { useRefresh } from '../../hooks/useRefresh';
import { useAuth } from '../../hooks/useAuth';

export const AdminPanel = () => {
  // const auth = useAuth();
  // const refresh = useRefresh();
  // const checkLogged = useCallback(async () => {
  //   const res = await refresh();
  // }, []);
  //
  // useEffect(() => {
  //   void checkLogged();
  // }, [checkLogged]);

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
