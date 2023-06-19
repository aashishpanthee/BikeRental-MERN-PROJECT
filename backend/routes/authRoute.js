import express from "express";
import {
  AllUsersController,
  forgotPasswordController,
  loginController,
  registerController,
} from "../controllers/authController.js";
import { isAdmin, requireSignIn } from "../middlewares/authMiddleware.js";

//  router object
const router = express.Router();

// routing
// REGISTER '' METHOD POST
router.post("/register", registerController);

// LOGIN '' METHOD POST
router.post("/login", loginController);

// Forgot Password || POST
router.post("/forgot-password", forgotPasswordController);

// Get '' METHOD GET
router.get("/getallusers", requireSignIn, isAdmin, AllUsersController);

// Protected Route Auth for User Dashboard
// router.get("/user-auth", requireSignIn, (req, res) => {
//   res.status(200).send({ ok: true });
// });

// Protected Route Auth for Admin Dashboard
router.get("/admin-auth", requireSignIn, isAdmin, (req, res) => {
  res.status(200).send({ ok: true });
});

export default router;
