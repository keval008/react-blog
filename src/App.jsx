import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/layout";
import Adminlogin from "./pages/adminlogin";
import "./App.css";
import "./assets/react.svg";
import Routers from "./routes/routes";
function App() {
  return (
    <>
      <Routers />
    </>
  );
}

export default App;
