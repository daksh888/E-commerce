import { useDispatch, useSelector } from "react-redux";
import { setLoginData } from "./loginSlice";
import { useLoginMutation } from "../serveces/auth";


export const useLoginAuth = () => {
  const [login, { isLoading }] = useLoginMutation();
  const dispatch = useDispatch();
  const select = useSelector((state) => state.login.accessToken);

  const handleLogin = async (loginData) => {
    try {
      const responseData = await login(loginData).unwrap();
      if (responseData) {
        // console.log("local", responseData);
        localStorage.setItem("accessToken", responseData.access_token);
        // console.log("token from local storage",localStorage.getItem("accessToken"))
        const respo = dispatch(setLoginData(responseData));

        console.log("accessToken",select);
        // console.log("respo", respo.payload.access_token)
        return respo; // Return response data upon successful login
      }
    } catch (error) {
      console.error("Failed to login:", error);
      throw error; // Throw error to be caught by the component
    }
  };

  return { handleLogin, isLoading };
};
