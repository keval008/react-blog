import Login from "../components/adminpage/adminpage";
import "../css/loginpage.css";
import { styled, createTheme, ThemeProvider } from "@mui/material/styles";
import { Button } from "@mui/material";

const theme = createTheme({
  palette: {
    dark: {
      main: "#000022",
    },
  },
});

const Adminlogin = () => {
  return (
    <div className="main">
      <div className="container">
        <ThemeProvider theme={theme}>
          <Login />
        </ThemeProvider>
      </div>
    </div>
  );
};

export default Adminlogin;
