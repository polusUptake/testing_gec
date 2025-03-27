import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import connectDB from './db.js';  // MongoDB connection
import authRoutes from '../routes/authRoutes.js';  // Import auth routes
import itemRoutes from '../routes/itemRoutes.js';  // Import item routes
import protect from '../middleware/auth.js';  // Import protect middleware
import dotenv from 'dotenv';
dotenv.config();

const app = express();
const port = 5000;

app.use(cors());
app.use(bodyParser.json());

// Connect to MongoDB
connectDB();

// Use auth routes
app.use('/auth', authRoutes);

// Protect routes for CRUD operations
app.use('/items', protect, itemRoutes);  // Protect item routes

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
