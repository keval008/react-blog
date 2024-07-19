import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ProtectedRoute from "./ProtectedRoutes";
import Adminlogin from "../pages/adminlogin";
import Afterlogin from "../pages/afterlogin";
import Layout from "../pages/layout";
import Dashboard from "../components/dashboard/dashboard";
import Tables from "../components/Subcategories/Subcategories";
import Categories from "../components/Categories/Categories";
import Profile from "../components/profile/profile";
import Blog from "../components/Blog/Blog";
import { Navigate } from "react-router-dom";
import Subcategories from "../components/Subcategories/Subcategories";
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
          <Route index element={<Navigate to="dashboard" replace />} />
          <Route path="/admin/dashboard" element={<Dashboard />} />
          <Route path="/admin/Subcategories" element={<Subcategories />} />
          <Route path="/admin/categories" element={<Categories />} />
          <Route path="/admin/profile" element={<Profile />} />
          <Route path="/admin/Blog" element={<Blog />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
