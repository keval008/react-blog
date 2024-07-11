import { Outlet, Link, useLocation } from "react-router-dom";
import { Home } from "@mui/icons-material";
import BarChartIcon from "@mui/icons-material/BarChart";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import BuildIcon from "@mui/icons-material/Build";
import PersonIcon from "@mui/icons-material/Person";
import RocketLaunchIcon from "@mui/icons-material/RocketLaunch";
import InsertDriveFileIcon from "@mui/icons-material/InsertDriveFile";
import SearchIcon from "@mui/icons-material/Search";
import SettingsIcon from "@mui/icons-material/Settings";
import NotificationsIcon from "@mui/icons-material/Notifications";
import "../css/layout.css";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";

const Layout = () => {
  const location = useLocation();
  const currentPageName = location.pathname.split("/").pop();
  const currentpage =
    currentPageName.charAt(0).toUpperCase() + currentPageName.slice(1);
  return (
    <div className="main-section">
      <div className="container">
        <div className="Homepage">
          <nav className="sidebar">
            <div className="sidebar-header">
              <div>
                <svg
                  width="74"
                  height="27"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M2.72 15.552.465 11.643 3.1 7.1l5.254-.01 2.256 3.908 4.208.002 2.603 4.507-2.651 4.518-4.194.024-2.117 3.62-5.239.036-2.602-4.507 2.103-3.645Zm11.178 2.96 1.772-3.003-1.745-3.022-3.487.033-1.585 2.721 1.896 3.283 3.149-.011Zm-6.312 3.644 1.585-2.72-1.895-3.284-3.15.012-1.772 3.003L4.1 22.19l3.487-.034Zm-.153-7.553 1.772-3.004L7.46 8.577l-3.487.033L2.2 11.613l1.745 3.023 3.488-.034Z"
                    fill="#1A202C"
                  ></path>
                  <path
                    d="M29.076 10.956c-2.088 0-3.78 1.044-4.356 2.664l2.322 1.116c.288-.882 1.08-1.44 2.034-1.44.9 0 1.512.486 1.512 1.224v.324l-3.078.648c-1.998.414-3.15 1.368-3.15 2.826 0 1.638 1.404 2.898 3.636 2.898 1.134 0 2.034-.342 2.772-1.116v.9h2.52v-6.48c0-2.106-1.71-3.564-4.212-3.564Zm-.666 8.28c-.774 0-1.26-.36-1.26-.954 0-.45.288-.792.846-.918l2.592-.576v.468c0 1.098-.954 1.98-2.178 1.98Zm11.14-8.172c-1.206 0-2.16.36-2.664 1.584v-1.476h-2.52V21h2.7v-5.292c0-1.458.9-2.304 2.214-2.304h1.296v-2.34H39.55Zm9.023.108v1.044c-.684-.792-1.692-1.26-2.97-1.26-2.502 0-4.842 1.782-4.842 4.752 0 2.898 2.232 4.806 4.896 4.806 1.098 0 2.052-.342 2.736-.99v.954c0 1.278-1.008 2.088-2.358 2.088-1.188 0-2.016-.63-2.322-1.692l-2.304 1.134c.576 1.8 2.376 2.988 4.626 2.988 2.736 0 5.058-1.764 5.058-4.518v-9.306h-2.52ZM46 18.066c-1.386 0-2.448-.954-2.448-2.322 0-1.404 1.098-2.358 2.448-2.358 1.35 0 2.394.954 2.394 2.358 0 1.368-1.008 2.322-2.394 2.322Zm11.242 3.15c2.916 0 5.256-2.16 5.256-5.13 0-2.97-2.34-5.13-5.256-5.13-2.916 0-5.256 2.16-5.256 5.13 0 2.97 2.34 5.13 5.256 5.13Zm0-2.43c-1.476 0-2.466-1.116-2.466-2.7 0-1.566.99-2.7 2.466-2.7 1.476 0 2.466 1.134 2.466 2.7 0 1.584-.99 2.7-2.466 2.7Zm11.43-7.83c-1.242 0-2.25.45-2.754 1.404v-1.188h-2.52V21h2.7v-5.742c0-1.134.739-1.872 1.8-1.872 1.063 0 1.8.738 1.8 1.872V21h2.7v-6.318c0-2.232-1.512-3.726-3.726-3.726Z"
                    fill="#1A202C"
                  ></path>
                </svg>
              </div>
              |
              <div>
                <svg
                  width="82"
                  height="21"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M31.92 9.422c1.448 0 2.093.933 2.308 1.77l2.034-.74c-.391-1.517-1.8-3.111-4.36-3.111-2.739 0-4.87 2.1-4.87 5.017 0 2.878 2.131 5.037 4.928 5.037 2.503 0 3.93-1.614 4.38-3.092l-1.994-.72c-.215.72-.9 1.75-2.386 1.75-1.428 0-2.66-1.069-2.66-2.975 0-1.906 1.232-2.936 2.62-2.936Zm7.92 2.119c.04-1.205.724-2.139 1.976-2.139 1.427 0 1.956.934 1.956 2.1v5.601h2.268v-5.99c0-2.08-1.134-3.753-3.48-3.753-.998 0-2.074.35-2.72 1.186V3.023h-2.268v14.08h2.269v-5.562Zm7.593 2.995c0 1.498 1.232 2.859 3.226 2.859 1.545 0 2.484-.778 2.934-1.497 0 .758.078 1.147.097 1.205h2.112c-.02-.097-.117-.66-.117-1.517V10.88c0-1.886-1.115-3.54-4.048-3.54-2.347 0-3.833 1.46-4.009 3.093l2.073.467c.098-.953.763-1.712 1.956-1.712 1.251 0 1.799.642 1.799 1.44 0 .33-.157.602-.704.68l-2.445.37c-1.623.233-2.874 1.166-2.874 2.858Zm3.656 1.09c-.9 0-1.388-.584-1.388-1.226 0-.778.567-1.167 1.271-1.283l2.484-.37v.428c0 1.847-1.096 2.45-2.367 2.45Zm15.473-7.994H63.55l-3.656 3.832v-8.44h-2.25v14.08h2.25v-2.645l1.173-1.226 2.796 3.87h2.777l-3.99-5.464 3.912-4.007Zm6.511-.058a3.265 3.265 0 0 0-.606-.058c-1.252 0-2.308.603-2.758 1.633V7.632H67.5v9.471h2.269v-4.512c0-1.77.802-2.78 2.562-2.78.234 0 .489.019.743.058V7.574Zm.544 6.962c0 1.498 1.232 2.859 3.226 2.859 1.545 0 2.484-.778 2.934-1.497 0 .758.078 1.147.097 1.205h2.112c-.02-.097-.117-.66-.117-1.517V10.88c0-1.886-1.115-3.54-4.048-3.54-2.347 0-3.833 1.46-4.009 3.093l2.073.467c.098-.953.763-1.712 1.956-1.712 1.251 0 1.799.642 1.799 1.44 0 .33-.157.602-.704.68l-2.445.37c-1.623.233-2.874 1.166-2.874 2.858Zm3.656 1.09c-.899 0-1.388-.584-1.388-1.226 0-.778.567-1.167 1.271-1.283l2.484-.37v.428c0 1.847-1.095 2.45-2.367 2.45Z"
                    fill="#374152"
                  ></path>
                  <path
                    d="M21.116 10.5C21.116 4.701 16.39 0 10.558 0 4.727 0 0 4.701 0 10.5S4.727 21 10.558 21c5.831 0 10.558-4.701 10.558-10.5Z"
                    fill="url(#Group__a)"
                  ></path>
                  <path
                    d="m5.715 10.948 7.197-7.108c.134-.133.35.029.26.194l-2.679 4.883c-.06.109.02.242.145.242h4.629c.149 0 .221.181.112.282l-8.112 7.53c-.145.134-.362-.056-.245-.216l3.84-5.268a.163.163 0 0 0-.133-.26H5.83a.163.163 0 0 1-.116-.279Z"
                    fill="#fff"
                  ></path>
                  <defs>
                    <linearGradient
                      id="Group__a"
                      x1="10.558"
                      y1="0"
                      x2="10.558"
                      y2="21"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#7BCBD4"></stop>
                      <stop offset="1" stopColor="#29C6B7"></stop>
                    </linearGradient>
                  </defs>
                </svg>
              </div>
            </div>

            <ul>
              <li
                className={
                  location.pathname === "/admin/dashboard" ? "active" : ""
                }
              >
                <Home
                  className={
                    location.pathname === "/admin/dashboard"
                      ? "activeicon "
                      : "navicon"
                  }
                />
                <Link to="/admin/dashboard">Dashboard</Link>
              </li>
              <li
                className={
                  location.pathname === "/admin/tables" ? "active" : ""
                }
              >
                <BarChartIcon
                  className={
                    location.pathname === "/admin/tables"
                      ? "activeicon "
                      : "navicon"
                  }
                />
                <Link to="/admin/tables">Tables</Link>
              </li>
              <li
                className={
                  location.pathname === "/admin/billing" ? "active" : ""
                }
              >
                <CreditCardIcon
                  className={
                    location.pathname === "/admin/billing"
                      ? "activeicon "
                      : "navicon"
                  }
                />
                <Link to="/admin/billing">Billing</Link>
              </li>
              <li
                className={location.pathname === "/admin/RTL" ? "active" : ""}
              >
                <BuildIcon
                  className={
                    location.pathname === "/admin/RTL"
                      ? "activeicon "
                      : "navicon"
                  }
                />
                <Link to="/admin/RTL">RTL</Link>
              </li>
            </ul>

            <h3>ACCOUNT PAGES</h3>

            <ul>
              <li>
                <PersonIcon
                  className={
                    location.pathname === "/admin/profile"
                      ? "activeicon"
                      : "navicon"
                  }
                />
                <Link
                  to="/admin/profile"
                  className={
                    location.pathname === "/admin/profile" ? "active" : ""
                  }
                >
                  Profile
                </Link>
              </li>
              <li>
                <InsertDriveFileIcon className="navicon" />
                <Link to="/login">Sign In</Link>
              </li>
              <li>
                <RocketLaunchIcon className="navicon" />

                <Link to="/login">Sign Up</Link>
              </li>
            </ul>
          </nav>
          <main className="main-content">
            <header className="header">
              <nav className="navbar">
                <div className="navbar-brand">
                  <Link to="/admin/dashboard">
                    <span>Pages</span> / {currentpage}
                  </Link>
                  <Link to="/admin/dashboard">
                    <h3>{currentpage}</h3>
                  </Link>
                </div>
                <div className="navbar-right">
                  <div className="search">
                    <Paper
                      component="form"
                      sx={{
                        padding: "0px",
                        display: "flex",
                        alignItems: "center",
                        width: 210,
                        borderRadius: "8px",
                        boxShadow: "0",
                        height: "40px",
                      }}
                    >
                      <IconButton
                        type="button"
                        sx={{ p: "10px" }}
                        aria-label="search"
                      >
                        <SearchIcon />
                      </IconButton>

                      <InputBase
                        sx={{ ml: 1, flex: 1, color: "grey", fontSize: "13px" }}
                        placeholder="Type here..."
                        inputProps={{ "aria-label": "Type here..." }}
                      />
                    </Paper>
                  </div>
                  <div className="signin">
                    <PersonIcon />
                    <Link to="/login">Sign In</Link>
                  </div>
                  <div className="settingBtn">
                    <button>
                      <SettingsIcon />
                    </button>
                  </div>
                  <div className="notificationBtn">
                    <button>
                      <NotificationsIcon />
                    </button>
                  </div>
                </div>
              </nav>
            </header>
            <Outlet />
          </main>
        </div>
      </div>
    </div>
  );
};

export default Layout;
