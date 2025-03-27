import mongoose from "mongoose";

const itemSchema = new mongoose.Schema({
  name: String,
  description: String,
  quantity: Number,
  location: String,
  status: {
    type: String,
    enum: ['Available', 'Borrowed'],
    default: 'Available'
  },
  added_on: { type: Date, default: Date.now },
});

const Item = mongoose.model("Item", itemSchema);
export default Item;
