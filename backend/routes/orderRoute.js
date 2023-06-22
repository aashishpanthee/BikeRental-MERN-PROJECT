import express from "express";
import { requireSignIn } from "../middlewares/authMiddleware.js";
import {
  getOrdersController,
  makeOrderController,
} from "../controllers/orderController.js";
const router = express.Router();

router.post("/make-order", requireSignIn, makeOrderController);
router.get("/orders", requireSignIn, getOrdersController);

export default router;
