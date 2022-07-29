import React from 'react';
import { Link } from 'react-router-dom';
import './TestFooter.css';

export const TestFooter = () => {
  return (
    <>
      <div className="test-footer">
        <Link to="/login">login </Link>
        <Link to="/register/x/x">register/x/x</Link>
        <Link to="/send-email">send-email</Link>
        <Link to="/user/cv">user/cv</Link>
        <Link to="/user/profile">user/profile</Link>
        <Link to="/hr/all-students">hr/all-students</Link>
        <Link to="/hr/interview-students"> hr/interview-students</Link>
        <Link to="/admin/admin-panel"> admin/admin-panel</Link>
      </div>
    </>
  );
};
