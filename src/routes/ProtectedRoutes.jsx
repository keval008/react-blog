import { useNavigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  // const navigate = useNavigate();

  // const handleClose = () => {
  //   navigate("/login", { replace: true });
  //   setOpen(false);
  // };
  const email = localStorage.getItem("email");
  const password = localStorage.getItem("password");
  return email && password ? children : <h3>404</h3>;
};

export default ProtectedRoute;
