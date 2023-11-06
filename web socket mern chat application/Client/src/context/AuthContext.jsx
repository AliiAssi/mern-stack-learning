import { createContext, useCallback, useEffect, useState } from "react";
import { baseUrl, postRequest } from "../utils/services";


export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [registerError, setRegisterError] = useState(null);
  const [isRegisterLoading, setIsRegisterLoading] = useState(false);
  const [registerInfo, setRegisterInfo] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [loginInfo, setLoginInfo] = useState({
    email: "",
    password: "",
  });
  const [loginError, setLoginError] = useState(null);
  const [loginLoading, setLoginLoading] = useState(false);

  useEffect(()=>{
    const user = localStorage.getItem("User")
    setUser(JSON.parse(user))
  },[])
  const updateRegisterInfo = useCallback((info) => {
    setRegisterInfo(info);
  }, []);

  const registerUser = useCallback(async (e) => {
    e.preventDefault();

    setIsRegisterLoading(true);
    setRegisterError(null);

    try {
      const response = await postRequest(`${baseUrl}/users/register`, JSON.stringify(registerInfo));
      setIsRegisterLoading(false);

      if (response.error) {
        setRegisterError(response);
      } else {
        localStorage.setItem("User", JSON.stringify(response));
        setUser(response);
      }
    } catch (error) {
      // Handle any potential network or other errors here
      console.error("Error during registration:", error);
      setRegisterError({ error: "Network error", message: "An error occurred during registration." });
      setIsRegisterLoading(false);
    }
  }, [registerInfo]);

  const logoutUser = useCallback(()=>{
    localStorage.removeItem("User")
    setUser(null)
  },[])

  const loginUser = useCallback(async(e)=>{
    e.preventDefault()
    setLoginLoading(true);
    setLoginError(null)

    try {
      const response = await postRequest(`${baseUrl}/users/login`, JSON.stringify(loginInfo));
      setLoginLoading(false);

      if (response.error) {
        setLoginError(response);
      } else {
        localStorage.setItem("User", JSON.stringify(response));
        setUser(response);
      }
    } catch (error) {
      // Handle any potential network or other errors here
      console.error("Error during registration:", error);
      setLoginError({ error: "Network error", message: "An error occurred during registration." });
      setLoginLoading(false);
    }
  },[loginInfo])
  const updateLoginInfo = useCallback((info) => {
    setLoginInfo(info);
  }, []);
  return (
    <AuthContext.Provider
      value={{
        user,
        registerInfo,
        updateRegisterInfo,
        registerUser,
        registerError,
        isRegisterLoading,
        logoutUser,
        loginError,
        loginInfo,
        loginLoading,
        loginUser,
        updateLoginInfo
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
