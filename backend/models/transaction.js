import mongoose from "mongoose";

const transactionSchema = new mongoose.Schema({
  item: { 
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'Item',
    required: true // Ensure an item is associated with the transaction
  },
  borrower_name: {
    type: String,
    required: [true, 'Borrower name is required'], // Ensure borrower_name is provided
  },
  borrow_date: { 
    type: Date, 
    default: Date.now 
  },
  due_date: {
    type: Date,
    required: [true, 'Due date is required'], // Ensure a due date is provided
  },
  return_date: Date,
  status: { 
    type: String,
    enum: ['Borrowed', 'Returned'],
    default: 'Borrowed'
  }
});

// Indexing for performance optimization, especially for status and item
transactionSchema.index({ status: 1 });
transactionSchema.index({ item: 1 });

const Transaction = mongoose.model("Transaction", transactionSchema);

export default Transaction;

