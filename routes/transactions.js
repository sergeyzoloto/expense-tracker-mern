import express from 'express';
const transactions = express.Router();
import {
  getTransactions,
  addTransaction,
  deleteTransaction,
} from '../controllers/transactionsController.js';

transactions.get('/', getTransactions);
transactions.post('/', addTransaction);
transactions.delete('/:id', deleteTransaction);

export default transactions;
