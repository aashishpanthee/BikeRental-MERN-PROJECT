import express from "express";
import { isAdmin, requireSignIn } from "../middlewares/authMiddleware.js";
import {
  AllOrdersController,
  getOrdersController,
  makeOrderController,
  updateStatusController,
} from "../controllers/orderController.js";
const router = express.Router();

router.post("/make-order", requireSignIn, makeOrderController);

// orders of particular user in customer your order's section
router.get("/orders", requireSignIn, getOrdersController);

// orders of users in admin dashboard
router.get("/allorders", requireSignIn, isAdmin, AllOrdersController);

// order status update by admin
router.put(
  "/order-status/:orderId",
  requireSignIn,
  isAdmin,
  updateStatusController
);
export default router;
