import { Outlet, Link, useLocation } from "react-router-dom";
import { Home } from "@mui/icons-material";
import BarChartIcon from "@mui/icons-material/BarChart";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import BuildIcon from "@mui/icons-material/Build";
import PersonIcon from "@mui/icons-material/Person";
import RocketLaunchIcon from "@mui/icons-material/RocketLaunch";
import InsertDriveFileIcon from "@mui/icons-material/InsertDriveFile";

import sidebarImg from "../assets/sidebarImg.webp";
import { styled, createTheme, ThemeProvider } from "@mui/material/styles";
import { Button, ListItemButton } from "@mui/material";
import Header from "../components/Header/Header";
const SidebarButton = styled(Button)({
  width: "190px",
  padding: "12px",
  maxWidth: "190px",
  color: "white",
  fontSize: "10px",
  borderRadius: "10px",
  fontWeight: "bold",
});

const theme = createTheme({
  palette: {
    dark: {
      main: "#000022",
    },
    light: {
      main: "#4299e1",
    },
  },
});

const Layout = () => {
  const location = useLocation();

  return (
    <ThemeProvider theme={theme}>
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
              </div>

              <ul>
                <Link to="/admin/dashboard">
                  {" "}
                  <ListItemButton
                    sx={{
                      borderRadius: 3,
                      display: "flex",
                      gap: 1,
                      padding: "13px",
                      margin: "10px 0",
                    }}
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
                      fontSize={"16px"}
                    />
                    Dashboard{" "}
                  </ListItemButton>
                </Link>

                <Link to="/admin/categories">
                  <ListItemButton
                    sx={{
                      borderRadius: 3,
                      display: "flex",
                      gap: 1,
                      padding: "13px",
                      margin: "10px 0",
                    }}
                    className={
                      location.pathname === "/admin/categories" ? "active" : ""
                    }
                  >
                    <CreditCardIcon
                      fontSize={"16px"}
                      className={
                        location.pathname === "/admin/categories"
                          ? "activeicon "
                          : "navicon"
                      }
                    />
                    Categories
                  </ListItemButton>
                </Link>

                <Link to="/admin/Subcategories">
                  <ListItemButton
                    sx={{
                      borderRadius: 3,
                      display: "flex",
                      gap: 1,
                      padding: "13px",
                      margin: "10px 0",
                    }}
                    className={
                      location.pathname === "/admin/Subcategories"
                        ? "active"
                        : ""
                    }
                  >
                    <BarChartIcon
                      className={
                        location.pathname === "/admin/Subcategories"
                          ? "activeicon "
                          : "navicon"
                      }
                      fontSize={"16px"}
                    />
                    Sub Categories
                  </ListItemButton>
                </Link>

                <Link to="/admin/Blog">
                  <ListItemButton
                    sx={{
                      borderRadius: 3,
                      display: "flex",
                      gap: 1,
                      padding: "13px",
                      margin: "10px 0",
                    }}
                    className={
                      location.pathname === "/admin/Blog" ? "active" : ""
                    }
                  >
                    <BuildIcon
                      className={
                        location.pathname === "/admin/Blog"
                          ? "activeicon "
                          : "navicon"
                      }
                      fontSize={"16px"}
                    />
                    Blog
                  </ListItemButton>
                </Link>
              </ul>

              <h3 className="sidebar-middle">ACCOUNT PAGES</h3>

              <ul>
                <Link to="/admin/profile">
                  <ListItemButton
                    sx={{
                      borderRadius: 3,
                      display: "flex",
                      gap: 1,
                      padding: "13px",
                      margin: "10px 0",
                    }}
                    className={
                      location.pathname === "/admin/profile" ? "active" : ""
                    }
                  >
                    <PersonIcon
                      className={
                        location.pathname === "/admin/profile"
                          ? "activeicon"
                          : "navicon"
                      }
                      fontSize={"16px"}
                    />
                    Profile{" "}
                  </ListItemButton>
                </Link>

                <Link to="/login">
                  <ListItemButton
                    sx={{
                      borderRadius: 3,
                      display: "flex",
                      gap: 1,
                      padding: "13px",
                      margin: "10px 0",
                    }}
                    className={location.pathname === "/login" ? "active" : ""}
                  >
                    <InsertDriveFileIcon
                      fontSize={"16px"}
                      className={
                        location.pathname === "/login"
                          ? "activeicon"
                          : "navicon"
                      }
                    />
                    Sign In{" "}
                  </ListItemButton>
                </Link>

                <Link to="/login">
                  <ListItemButton
                    sx={{
                      borderRadius: 3,
                      display: "flex",
                      gap: 1,
                      padding: "13px",
                      margin: "10px 0",
                    }}
                    className={location.pathname === "/login" ? "active" : ""}
                  >
                    <RocketLaunchIcon
                      fontSize={"16px"}
                      className={
                        location.pathname === "/login"
                          ? "activeicon"
                          : "navicon"
                      }
                    />
                    Sign Up{" "}
                  </ListItemButton>
                </Link>
              </ul>
              <div className="sidebarbottom-container">
                <img
                  src={sidebarImg}
                  alt="Sidebar image"
                  height={90}
                  width={120}
                />
                <div className="imgdesc">
                  <p className="sidebarBottom-bold">Need Help?</p>
                  <p className="sidebarBottom-desc">Please Check Our Docs</p>
                </div>
                <div className="sidebarBtn">
                  <SidebarButton variant="contained" color="light">
                    DOCUMENTATION
                  </SidebarButton>

                  <SidebarButton variant="contained" color="dark">
                    UPGRADE TO PRO
                  </SidebarButton>
                </div>
              </div>
            </nav>
            <main className="main-content">
              <Header />
              <Outlet />
            </main>
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
};

export default Layout;
