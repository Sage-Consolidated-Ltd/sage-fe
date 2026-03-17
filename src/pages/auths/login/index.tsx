import { useTitle } from "../../../hooks/useTitle";
import LoginPage from "../../../components/auths/login/LoginPage";

const Login = () => {
  useTitle("Login - SAGE SHIELD");
  return (
    <>
      <LoginPage />
    </>
  );
};

export default Login;
