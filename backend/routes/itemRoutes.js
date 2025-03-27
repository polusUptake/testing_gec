import express from "express";
import { getItems, addItem } from "../controllers/itemController.js";

const router = express.Router();

router.get("/", getItems);
router.post("/", addItem);
// You can add PUT and DELETE routes here for updating and deleting items

export default router;
