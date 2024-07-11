import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ProtectedRoute from "./ProtectedRoutes";
import Adminlogin from "../pages/adminlogin";
import Afterlogin from "../pages/afterlogin";
import Layout from "../pages/layout";
import Dashboard from "../components/dashboard/dashboard";
import Tables from "../components/tables/tables";
import Billing from "../components/Billing/Billing";
import Profile from "../components/profile/profile";
import RTL from "../components/RTL/RTL";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Adminlogin />} />
        <Route
          path="/admin"
          element={
            <ProtectedRoute>
              <Layout />
            </ProtectedRoute>
          }
        >
          <Route path="/admin/dashboard" element={<Dashboard />} />
          <Route path="/admin/tables" element={<Tables />} />
          <Route path="/admin/billing" element={<Billing />} />
          <Route path="/admin/profile" element={<Profile />} />
          <Route path="/admin/RTL" element={<RTL />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
