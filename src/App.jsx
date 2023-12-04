import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// Import your pages
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Masters from "./pages/Masters";
import Organization from "./pages/Organization";
import AcademicSession from "./pages/AcademicSession";
import SchoolRegistration from "./pages/SchoolRegistration";
import Users from "./pages/Users";
import Sidebar from "./components/Sidebar";

const PageWithSidebar = ({ children }) => {
  return (
    <main className="w-full h-screen flex">
      <Sidebar />
      <section className="w-full h-full p-4">{children}</section>
    </main>
  );
};

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route
          path="/dashboard"
          element={
            <PageWithSidebar>
              <Dashboard />
            </PageWithSidebar>
          }
        />
        <Route
          path="/masters"
          element={
            <PageWithSidebar>
              <Masters />
            </PageWithSidebar>
          }
        />
        <Route
          path="/organization"
          element={
            <PageWithSidebar>
              <Organization />
            </PageWithSidebar>
          }
        />
        <Route
          path="/academicSession"
          element={
            <PageWithSidebar>
              <AcademicSession />
            </PageWithSidebar>
          }
        />
        <Route
          path="/schoolRegistration"
          element={
            <PageWithSidebar>
              <SchoolRegistration />
            </PageWithSidebar>
          }
        />
        <Route
          path="/users"
          element={
            <PageWithSidebar>
              <Users />
            </PageWithSidebar>
          }
        />
      </Routes>
    </Router>
  );
};

export default App;
