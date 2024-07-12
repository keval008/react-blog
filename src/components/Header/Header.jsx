import { Link } from "react-router-dom";
import PersonIcon from "@mui/icons-material/Person";
import SearchIcon from "@mui/icons-material/Search";
import SettingsIcon from "@mui/icons-material/Settings";
import NotificationsIcon from "@mui/icons-material/Notifications";
import "/src/css/layout.css";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";
import { useLocation } from "react-router-dom";
function Header() {
  const location = useLocation();
  const currentPageName = location.pathname.split("/").pop();
  const currentpage =
    currentPageName.charAt(0).toUpperCase() + currentPageName.slice(1);
  return (
    <>
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
                  id="search"
                  sx={{
                    ml: 1,
                    flex: 1,
                    color: "grey",
                    fontSize: "13px",
                  }}
                  placeholder="Type here..."
                  inputProps={{ "aria-label": "Type here..." }}
                />
              </Paper>
            </div>
            <div className="signin">
              <Link to="/login">
                <PersonIcon />
                Sign In
              </Link>
            </div>
            <div className="settingBtn">
              <IconButton>
                <SettingsIcon />
              </IconButton>
            </div>
            <div className="notificationBtn">
              <IconButton>
                <NotificationsIcon />
              </IconButton>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
}

export default Header;
