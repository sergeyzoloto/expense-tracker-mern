import { useState } from 'react';

const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault(); // prevent page refresh

    console.log('email', email);
    console.log('password', password);
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

      <button type="submit">Signup</button>
    </form>
  );
};

export default Signup;
