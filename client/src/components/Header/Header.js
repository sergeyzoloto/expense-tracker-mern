import React from 'react';
import { Link } from 'react-router-dom';
import { useLogout } from '../../hooks/useLogout';
import { useAuthContext } from '../../hooks/useAuthContext';

export const Header = () => {
  const { logout } = useLogout();
  const { user } = useAuthContext();

  const handleClick = () => {
    logout();
  };

  return (
    <header>
      <Link to="/">
        <h1>Finance Tracker</h1>
      </Link>
      <nav>
        {user && (
          <div>
            <span>{user.email}</span>
            <button onClick={handleClick}>Log out</button>
          </div>
        )}
        {!user && (
          <div>
            <Link to="/signup">Sign Up</Link>
            <Link to="/login">Login</Link>
          </div>
        )}
      </nav>
    </header>
  );
};
