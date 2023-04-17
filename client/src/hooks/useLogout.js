import { useAuthContext } from './useAuthContext.js';

export const useLogout = () => {
  const { dispatch } = useAuthContext();

  const logout = () => {
    // remove the user from local storage
    localStorage.removeItem('user');

    // update the auth context
    dispatch({ type: 'LOGOUT' });
  };

  return { logout };
};
