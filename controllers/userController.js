import User from '../models/User.js';
import jwt from 'jsonwebtoken';

const createToken = (_id) => {
  return jwt.sign({ _id }, process.env.SECRET, { expiresIn: '3d' });
};

// login user
export const loginUser = async (req, res) => {
  res.json({ message: 'login user' });
};

// signup user
export const signupUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.signup(email, password);

    // create token
    const token = createToken(user._id);

    res.status(201).json({ email, token });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
