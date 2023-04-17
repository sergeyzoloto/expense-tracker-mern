import User from '../models/User.js';

// login user
export const loginUser = async (req, res) => {
  res.json({ message: 'login user' });
};

// signup user
export const signupUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.signup(email, password);

    res.status(201).json({ email, user });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
