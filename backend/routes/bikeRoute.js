import express from "express";
import { isAdmin, requireSignIn } from "../middlewares/authMiddleware.js";
import {
  addBikeController,
  getBikeAllController,
  getSingleBikeController,
  bikePhotoController,
  deleteBikeController,
  updateBikeController,
  getSingleBikeControllerById,
  bikeFilterController,
  // bikeCountController,
  // bikeListController,
} from "../controllers/bikeController.js";
import formidable from "express-formidable";

const router = express.Router();

// routes

// Add bike
router.post(
  "/add-bike",
  requireSignIn,
  isAdmin,
  formidable(),
  addBikeController
);

// get bikes
router.get("/all", getBikeAllController);

// get single bike by slug for customer side
router.get("/single-bike/:slug", getSingleBikeController);

// get single bike by _id for admin side
router.get("/single-bike/read/:bid", getSingleBikeControllerById);

// update bike
router.put(
  "/update-bike/:bid",
  requireSignIn,
  isAdmin,
  formidable(),
  updateBikeController
);

// delete bike
router.delete(
  "/delete-bike/:bid",
  requireSignIn,
  isAdmin,
  deleteBikeController
);

// get bike photo
router.get("/bike-photo/:bid", bikePhotoController);

// filter bikes
router.post("/filter-bikes", bikeFilterController);

// bikes count
// router.get("/bikes-count", bikeCountController);

// bike per page
// router.get("/bike-list/:page", bikeListController);

export default router;
