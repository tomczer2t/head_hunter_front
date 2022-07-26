import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { MainLayout } from './layout/MainLayout';
import { LoginView } from './views/LoginView';
import { HrUserCvView } from './views/HrUserCvView';
import { RequireAuthUser } from './components/RequireAuth/RequiraAuthUser';
import { RequireAuthAdmin } from './components/RequireAuth/RequireAuthAdmin';
import { RequireAuthHr } from './components/RequireAuth/RequireAuthHr';
import { ProfileView } from './views/ProfileView';
import { AllStudentsView } from './views/AllStudentsView';
import { StudentsInterviewListViews } from './views/StudentsInterviewListViews';
import { AdminPanelViews } from './views/AdminPanelViews';
import { RegisterView } from './views/RegisterView';
import { EmailPasswordRecoveryView } from './views/EmailPasswordRecoveryView';

import './App.css';
import { StudentCvView } from './views/StudentCvView';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route path="login" element={<LoginView />} />
          <Route
            path="register/:id/:verificationToken"
            element={<RegisterView />}
          />
          <Route path="send-email" element={<EmailPasswordRecoveryView />} />
          {/*user auth require*/}
          <Route path="student" element={<RequireAuthUser />}>
            <Route index element={<StudentCvView />} />
            <Route path="profile" element={<ProfileView />} />
          </Route>
          {/*HR auth require*/}
          <Route path="hr" element={<RequireAuthHr />}>
            <Route index element={<AllStudentsView />} />
            <Route path="interview-students">
              <Route index element={<StudentsInterviewListViews />} />
              <Route path=":studentId" element={<HrUserCvView />} />
            </Route>
          </Route>
          {/*Admin auth require*/}
          <Route path="admin" element={<RequireAuthAdmin />}>
            <Route index element={<AdminPanelViews />} />
          </Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;
