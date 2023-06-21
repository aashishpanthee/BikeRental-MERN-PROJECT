import express from "express";
import { requireSignIn } from "../middlewares/authMiddleware.js";
import { makeOrderController } from "../controllers/orderController.js";
const router = express.Router();

router.post("/make-order", requireSignIn, makeOrderController);

export default router;
