import mongoose from 'mongoose';
import bcrypt from 'bcrypt';
import validator from 'validator';

const UserSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
});

// static signup static method
UserSchema.statics.signup = async function (email, password) {
  // validation
  if (!email || !password) {
    throw new Error('Email and password are required');
  }
  if (!validator.isEmail(email)) {
    throw new Error('Invalid email');
  }
  if (!validator.isStrongPassword(password)) {
    throw new Error('Password is not strong enough');
  }

  const exists = await this.findOne({ email });

  if (exists) {
    throw new Error('Email already in use');
  }

  const salt = await bcrypt.genSalt(10);
  const hash = await bcrypt.hash(password, salt);

  const user = await this.create({ email, password: hash });
  return user;
};

// login static method
UserSchema.statics.login = async function (email, password) {
  // validation
  if (!email || !password) {
    throw new Error('email and password are required');
  }

  const user = await this.findOne({ email });

  if (!user) {
    throw new Error('Invalid email');
  }

  const isValid = await bcrypt.compare(password, user.password);

  if (!isValid) {
    throw new Error('Invalid password');
  }

  return user;
};

export default mongoose.model('User', UserSchema);
