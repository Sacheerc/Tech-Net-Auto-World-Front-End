// Global imports
import { useEffect, useState, useContext, FormEventHandler } from "react";

// Project dependencies
import useApi from "../../hooks/api/useApi";
import AuthContext from "../../context/AuthContextProvier";
import { validatePasswordLength, validateEmailFormat } from "./validations";
import { AuthData } from "../../hooks/api/apiData/AuthData";
import { useLocation } from "react-router-dom";
import LoginForm from "./LoginForm";
import Login from "./Login";
// import RegisterForm from "./RegisterForm";

interface AuthProps {
  toggleTheme: () => void;
}

const Auth: React.FC<AuthProps> = ({ toggleTheme }) => {
  const [authData, setAuthData] = useState<AuthData>();
  const { request, setError } = useApi();
  const { globalLogInDispatch } = useContext(AuthContext);
  const location = useLocation();
  const currentPathArray = location.pathname.split('/');
  const isLogin = currentPathArray[currentPathArray.length - 1] === 'login';

  // Upon successful response from the api for login user, dispatch global auth LOG_IN event
  useEffect(() => {
    if (authData) {
      globalLogInDispatch({
        authToken: authData.user.auth_token,
        email: authData.user.email,
        name: authData.user.name,
        userId: authData.user.user_id
      });
    }
  }, [authData, globalLogInDispatch]);

  const authHandler: FormEventHandler<HTMLFormElement> = async (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    // Validations first!
    const userEmail = data.get("email");
    const userPassword = data.get("password");
    const userName = data.get("name");
    try {
      if (
        !validateEmailFormat(userEmail?.toString() || "") ||
        !validatePasswordLength(userPassword?.toString() || "")
      ) {
        throw new Error("Incorrect credential format!");
      }
      const params = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: userEmail,
          password: userPassword
        }),
      };

      const endpoint = `/auth/login`
      await request(endpoint, params, setAuthData);
    } catch (error: any) {
      setError(error.message || error);
    }
  };

  return (
    <Login toggleTheme={toggleTheme} onSubmit={authHandler} />
  );
};

export default Auth;