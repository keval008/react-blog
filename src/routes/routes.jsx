import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ProtectedRoute from "./ProtectedRoutes";
import Adminlogin from "../pages/adminlogin";
import Afterlogin from "../pages/afterlogin";
import Layout from "../pages/layout";
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
        ></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
