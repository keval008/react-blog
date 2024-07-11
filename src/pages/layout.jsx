import { Outlet, Link } from "react-router-dom";
import { Home } from "@mui/icons-material";
import BarChartIcon from "@mui/icons-material/BarChart";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import BuildIcon from "@mui/icons-material/Build";
import PersonIcon from "@mui/icons-material/Person";
import RocketLaunchIcon from "@mui/icons-material/RocketLaunch";
import InsertDriveFileIcon from "@mui/icons-material/InsertDriveFile";
import "../css/layout.css";

const Layout = () => {
  return (
    <div className="container">
      <div className="Homepage">
        <nav className="sidebar">
          <ul>
            <li>
              <Home />
              <Link to="/admin/dashboard">dashboard</Link>
            </li>
            <li>
              <BarChartIcon />
              <Link to="/admin/tables">Tables</Link>
            </li>
            <li>
              <CreditCardIcon />
              <Link to="/admin/billing">Billing</Link>
            </li>
            <li>
              <BuildIcon />
              <Link to="/admin/RTL">RTL</Link>
            </li>
          </ul>
          <h3>Account Pages</h3>
          <ul>
            <li>
              <PersonIcon />
              <Link to="/admin/profile">Profile</Link>
            </li>
            <li>
              <InsertDriveFileIcon />
              <Link to="/login">Sign In</Link>
            </li>
            <li>
              <RocketLaunchIcon />

              <Link to="/login">Sign Up</Link>
            </li>
          </ul>
        </nav>
        <main className="main-content">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default Layout;
