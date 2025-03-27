import express from "express";
import { borrowItem } from "../controllers/transactionController.js";
import { returnItem } from "../controllers/transactionController.js";  // Assuming you have a returnItem function
import { getTransactionHistory } from "../controllers/transactionController.js";  // Assuming you have a getTransactionHistory function

const router = express.Router();

// Route for borrowing an item
router.post("/borrow/:itemId", borrowItem);

// Route for returning an item
router.post("/return/:itemId", returnItem);  // Route to return an item

// Route for viewing transaction history
router.get("/transactions", getTransactionHistory);  // View all transactions

export default router;
