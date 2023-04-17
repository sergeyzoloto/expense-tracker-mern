import express from 'express';
const transactions = express.Router();
import {
  getTransactions,
  addTransaction,
  deleteTransaction,
} from '../controllers/transactionsController.js';
import requireAuth from '../middleware/requireAuth.js';

// require authorization for all routes
transactions.use(requireAuth);

transactions.get('/', getTransactions);
transactions.post('/', addTransaction);
transactions.delete('/:id', deleteTransaction);

export default transactions;
