import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import { MainLayout } from './layout/MainLayout';
import { LoginView } from './views/LoginView';
import { CvView } from './views/CvView';
import { RequireAuthUser } from './components/RequireAuth/RequiraAuthUser';
import { RequireAuthAdmin } from './components/RequireAuth/RequireAuthAdmin';
import { RequireAuthHr } from './components/RequireAuth/RequireAuthHr';
import { ProfileView } from './views/ProfileView';
import { AllStudentsView } from './views/AllStudentsView';
import { StudentsInterviewListViews } from './views/StudentsInterviewListViews';
import { AdminPanelViews } from './views/AdminPanelViews';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route path="/login" element={<LoginView />} />
          {/*user auth require*/}
          <Route path="/user" element={<RequireAuthUser />}>
            <Route path="/user/cv" element={<CvView />} />
            <Route path="/user/profile" element={<ProfileView />} />
          </Route>
          {/*HR auth require*/}
          <Route path="/hr" element={<RequireAuthHr />}>
            <Route path="/hr/all-students" element={<AllStudentsView />} />
            <Route
              path="/hr/interview-students"
              element={<StudentsInterviewListViews />}
            />
          </Route>
          {/*Admin auth require*/}
          <Route path="/admin" element={<RequireAuthAdmin />}>
            <Route path="/admin/admin-panel" element={<AdminPanelViews />} />
          </Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;
