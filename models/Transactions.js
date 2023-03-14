import mongoose from 'mongoose';

const TransactionSchema = new mongoose.Schema({
  text: {
    type: String,
    trim: true,
    required: [true, 'Please add some comment'],
  },
  amount: {
    type: Number,
    required: [true, 'Please add an amount'],
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

export default mongoose.model('Transaction', TransactionSchema);
