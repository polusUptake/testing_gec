import Item from "../models/item.js";
import Transaction from "../models/transaction.js";

// Borrow an item
export const borrowItem = async (req, res) => {
  const { borrower_name, due_date } = req.body;

  // Simple validation to check if all required fields are provided
  if (!borrower_name || !due_date) {
    return res.status(400).json({ message: "Both borrower_name and due_date are required" });
  }

  // Validate if due_date is a valid date
  if (isNaN(new Date(due_date))) {
    return res.status(400).json({ message: "Invalid due_date provided" });
  }

  try {
    const item = await Item.findById(req.params.itemId);

    if (!item) {
      return res.status(404).json({ message: "Item not found" });
    }

    if (item.status === 'Borrowed') {
      return res.status(400).json({ message: "Item is not available for borrowing." });
    }

    // Update item status to 'Borrowed'
    item.status = 'Borrowed';
    await item.save();

    // Create a new transaction
    const transaction = new Transaction({
      item: item._id,
      borrower_name,
      due_date,
    });

    await transaction.save();

    res.status(201).json({ message: "Item borrowed successfully", transaction });
  } catch (err) {
    console.error(err); // Log the error for debugging
    res.status(500).json({ message: "Server Error", error: err.message });
  }
};
