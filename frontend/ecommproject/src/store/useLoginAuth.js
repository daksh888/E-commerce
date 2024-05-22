import { useDispatch } from 'react-redux';
import { setLoginData } from './loginSlice';
import { useLoginMutation } from '../serveces/auth';

export const useLoginAuth = () => {
  const dispatch = useDispatch();
  const [login, { isLoading }] = useLoginMutation();

  const handleLogin = async (loginData) => {
    try {
      const responseData = await login(loginData).unwrap();
      dispatch(setLoginData(responseData));
      return responseData; // Return response data upon successful login
    } catch (error) {
      console.error('Failed to login:', error);
      throw error; // Throw error to be caught by the component
    }
  };

  return { handleLogin, isLoading };
};
