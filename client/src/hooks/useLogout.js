import { useAuthContext } from './useAuthContext.js';
import { useGlobalContext } from './useGlobalContext.js';

export const useLogout = () => {
  const { dispatch } = useAuthContext();
  const { clearTransactions } = useGlobalContext();

  const logout = () => {
    // remove the user from local storage
    localStorage.removeItem('user');

    // update the auth context
    dispatch({ type: 'LOGOUT' });
    clearTransactions();
  };

  return { logout };
};
