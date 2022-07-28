import React from 'react';
import { NavLink } from 'react-router-dom';
import './MenuAvailableTalk.css';

export const MenuAvailableTalk = () => {
  return (
    <>
      <div className="menu-available-talk">
        <NavLink
          to="/hr/all-students"
          className={({ isActive }) =>
            isActive
              ? 'menu-available-talk__selected menu-available-talk__link'
              : 'menu-available-talk__link'
          }
        >
          Dostępni kursanci
        </NavLink>
        <NavLink
          to="/hr/interview-students"
          className={({ isActive }) =>
            isActive
              ? 'menu-available-talk__selected menu-available-talk__link'
              : 'menu-available-talk__link'
          }
        >
          Do rozmowy
        </NavLink>
      </div>
    </>
  );
};
