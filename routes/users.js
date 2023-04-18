import express from 'express';

// controller functions
import { loginUser, signupUser } from '../controllers/userController.js';

const users = express.Router();

// login route
users.post('/login', loginUser);

// signup route
users.post('/signup', signupUser);

export default users;
