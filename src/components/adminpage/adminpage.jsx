import React from "react";
import { TextField, Button } from "@mui/material";
import { styled } from "@mui/material/styles";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import AppleIcon from "@mui/icons-material/Apple";
import GoogleIcon from "@mui/icons-material/Google";
import { FormControlLabel, Switch } from "@mui/material";
const IOSSwitch = styled((props) => (
  <Switch focusVisibleClassName=".Mui-focusVisible" disableRipple {...props} />
))(({ theme }) => ({
  width: 37,
  height: 20,
  padding: 0,
  "& .MuiSwitch-switchBase": {
    padding: 0,
    margin: 2,
    transitionDuration: "200ms",
    "&.Mui-checked": {
      transform: "translateX(16px)",
      color: "#fff",
      "& + .MuiSwitch-track": {
        backgroundColor: theme.palette.mode === "dark" ? "#2ECA45" : "#00b0ff",
        opacity: 1,
        border: 0,
      },
      "&.Mui-disabled + .MuiSwitch-track": {
        opacity: 0.5,
      },
    },
    "&.Mui-focusVisible .MuiSwitch-thumb": {
      color: "#00b0ff",
      border: "6px solid #fff",
    },
    "&.Mui-disabled .MuiSwitch-thumb": {
      color:
        theme.palette.mode === "light"
          ? theme.palette.grey[100]
          : theme.palette.grey[600],
    },
    "&.Mui-disabled + .MuiSwitch-track": {
      opacity: theme.palette.mode === "light" ? 0.7 : 0.3,
    },
  },
  "& .MuiSwitch-thumb": {
    boxSizing: "border-box",
    width: 17,
    height: 17,
  },
  "& .MuiSwitch-track": {
    borderRadius: 26 / 2,
    backgroundColor: theme.palette.mode === "light" ? "#E9E9EA" : "#00b0ff",
    opacity: 1,
    transition: theme.transitions.create(["background-color"], {
      duration: 500,
    }),
  },
}));

const LoginButton = styled(Button)({
  padding: "12px",
  color: "white",
  borderRadius: "10px",
  fontSize: "12px",
});

const validationSchema = Yup.object({
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  password: Yup.string()
    .min(6)
    .required("password must be 6 character long")
    .required("Password is required"),
});

const Login = () => {
  const navigate = useNavigate();
  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues: {
        email: "",
        password: "",
      },
      onSubmit: (values, { resetForm }) => {
        if (
          values.email === "admin@gmail.com" &&
          values.password === "admin@123"
        ) {
          localStorage.setItem("email", values.email);
          localStorage.setItem("password", values.password);
          resetForm();
          navigate("/admin");
        }
      },
      validationSchema: validationSchema,
    });
  const label = { inputProps: { "aria-label": "Switch demo" } };

  return (
    <div className="loginpagecontainer">
      <div className="login-container">
        <div className="loginHeader">
          <h2>Login with</h2>
        </div>
        <div className="login-boxes">
          <button>
            <FacebookRoundedIcon className="img" />
          </button>
          <button>
            <AppleIcon className="img" />
          </button>
          <button>
            <GoogleIcon className="img" />
          </button>
        </div>
        <div className="or">
          <h4>or</h4>
        </div>
        <div className="loginBody">
          <form className="form" onSubmit={handleSubmit}>
            <label htmlFor="email">email</label>
            <TextField
              type="text"
              id="email"
              name="email"
              variant="outlined"
              placeholder="Your Full email"
              className="MuiTextField-root"
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
              error={touched.email && Boolean(errors.email)}
              helperText={touched.email && errors.email}
            />
            <label htmlFor="password">Password</label>
            <TextField
              type="password"
              id="password"
              name="password"
              placeholder="Your Password"
              variant="outlined"
              className="MuiTextField-root"
              value={values.password}
              onChange={handleChange}
              onBlur={handleBlur}
              error={touched.password && Boolean(errors.password)}
              helperText={touched.password && errors.password}
            />
            <FormControlLabel control={<IOSSwitch />} label="Remember Me" />

            <LoginButton variant="contained" color="dark" type="submit">
              Login
            </LoginButton>
          </form>
          {/* <div>Already Have An Account ? Sign In</div> */}
        </div>
      </div>
    </div>
  );
};

export default Login;
