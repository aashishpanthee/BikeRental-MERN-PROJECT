import express from "express";
import { requireSignIn, isAdmin } from "../middlewares/authMiddleware.js";
import {
  createCategoryController,
  deleteCategoryController,
  getAllCategoriesController,
  getSingleCategoryController,
  getSingleCategoryControllerById,
  updateCategoryController,
} from "../controllers/categoryController.js";
const router = express.Router();

// routes

// create-category
router.post(
  "/create-category",
  requireSignIn,
  isAdmin,
  createCategoryController
);

// update category
// update garda, put rakhna parxa.
router.put(
  "/update-category/:_id",
  requireSignIn,
  isAdmin,
  updateCategoryController
);

// get all categories
router.get("/all", requireSignIn, isAdmin, getAllCategoriesController);

// get single category by slug
router.get("/single-category/:slug", getSingleCategoryController);

// get single category by id
router.get("/single-category-id/:id", getSingleCategoryControllerById);

// delete category controller
router.delete(
  "/delete-category/:id",
  requireSignIn,
  isAdmin,
  deleteCategoryController
);

export default router;
