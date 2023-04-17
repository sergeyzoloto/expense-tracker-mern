import React from 'react';
import { Link } from 'react-router-dom';
import { useLogout } from '../../hooks/useLogout';

export const Header = () => {
  const { logout } = useLogout();
  const handleClick = () => {
    logout();
  };

  return (
    <header>
      <Link to="/">
        <h1>Finance Tracker</h1>
      </Link>
      <nav>
        <div>
          <button onClick={handleClick}>Log out</button>
        </div>
        <div>
          <Link to="/signup">Sign Up</Link>
          <Link to="/login">Login</Link>
        </div>
      </nav>
    </header>
  );
};
