import { Button } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import { loginUser } from "../redux/auth/action";
import styles from "./styles.module.css";
function Login() {
  const { isAuth } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const handleLogin = () => {
    dispatch(loginUser());
  };

  if (isAuth) {
    return <Redirect to="/" />;
  }
  return (
    <div>
      <Button
        onClick={handleLogin}
        className={styles.button}
        variant="outlined"
      >
        Login
      </Button>
    </div>
  );
}
export default Login;
