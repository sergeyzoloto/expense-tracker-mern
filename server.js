import express from 'express';
import dotenv from 'dotenv';
import colors from 'colors';
import morgan from 'morgan';
import connectDB from './config/db.js';

dotenv.config({ path: './config/.env' });

connectDB();

import transactions from './routes/transactions.js';

const app = express();

app.use(express.json()); // that allows us to use the parser

app.use('/api/v1/transactions', transactions);

const PORT = process.env.PORT || 5000;

app.listen(
  PORT,
  console.log(
    `Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow
      .bold,
  ),
);
