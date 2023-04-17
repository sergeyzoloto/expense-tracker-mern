import { useState } from 'react';
import { useSignup } from '../hooks/useSignup';

const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { signupError, isLoading, signup } = useSignup();

  const handleSubmit = async (e) => {
    e.preventDefault(); // prevent page refresh

    await signup(email, password); // signup the user
  };

  return (
    <form className="signup" onSubmit={handleSubmit}>
      <h3>Signup</h3>

      <label>Email</label>
      <input
        type="email"
        onChange={(e) => setEmail(e.target.value)}
        value={email}
      />
      <label>Password</label>
      <input
        type="password"
        onChange={(e) => setPassword(e.target.value)}
        value={password}
      />

      <button type="submit" disabled={isLoading}>
        Signup
      </button>
      {signupError && <div className="error">{signupError}</div>}
    </form>
  );
};

export default Signup;
