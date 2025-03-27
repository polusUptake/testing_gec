import Item from "../models/item.js";

export const getItems = async (req, res) => {
  try {
    const items = await Item.find();
    res.json(items);
  } catch (err) {
    res.status(400).send(err);
  }
};

export const addItem = async (req, res) => {
  const { name, description, quantity, location, status } = req.body;
  const newItem = new Item({ name, description, quantity, location, status });

  try {
    await newItem.save();
    res.json(newItem);
  } catch (err) {
    res.status(400).send(err);
  }
};
