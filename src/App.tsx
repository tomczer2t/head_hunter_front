import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route path="/login" element={<LoginView />} />
          {/*user auth require*/}
          <Route path="/" element={<RequireAuthUser />}>
            <Route path="/cv" element={<CvView />} />
            <Route path="/profile" element={<ProfileView />} />
          </Route>
          {/*HR auth require*/}
          <Route path="/" element={<RequireAuthHr />}>
            <Route path="/all-students" element={<AllStudentsView />} />
            <Route
              path="/interview-students"
              element={<StudentsInterviewViews />}
            />
          </Route>
          {/*Admin auth require*/}
          <Route path="/" element={<RequireAuthAdmin />}>
            <Route path="/admin-panel" element={<AdminPanelViews />} />
          </Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;
