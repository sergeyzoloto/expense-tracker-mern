import Transaction from '../models/Transactions.js';

// @desc    Add transaction
// @route   POST /api/v1/transactions
// @access  Public
export async function addTransaction(request, response, next) {
  try {
    const user_id = request.user._id;
    const transaction = await Transaction.create({ ...request.body, user_id });
    return response.status(201).json({
      success: true,
      data: transaction,
    });
  } catch (error) {
    if (error.name === 'ValidationError') {
      const messages = Object.values(error.errors).map(
        (value) => value.message,
      );
      return response.status(400).json({
        success: false,
        error: messages,
      });
    } else {
    }
    return response.status(500).json({
      success: false,
      error: `${error.message}`,
    });
  }
}

// @desc    Delete transactions
// @route   DELETE /api/v1/transactions
// @access  Public
export async function deleteTransaction(request, response, next) {
  try {
    const transaction = await Transaction.findById(request.params.id);
    if (!transaction) {
      return response
        .status(404)
        .json({ success: false, error: 'No transaction found' });
    }
    await transaction.deleteOne();
    return response.status(200).json({
      success: true,
      data: {},
    });
  } catch (error) {
    return response.status(500).json({
      success: false,
      error: `${error.message}`,
    });
  }
}

// @desc    Get all transactions
// @route   GET /api/v1/transactions
// @access  Public
export async function getTransactions(request, response, next) {
  try {
    const email = request.user.email;

    const transactions = await Transaction.find({ user_id });
    return response.status(200).json({
      success: true,
      count: transactions.length,
      data: transactions,
    });
  } catch (error) {
    return response.status(500).json({
      success: false,
      error: `${error.message}`,
    });
  }
}
