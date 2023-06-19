import slugify from "slugify";
import categoryModel from "../models/categoryModel.js";

export const createCategoryController = async (req, res) => {
  try {
    const { name } = req.body;
    if (!name) {
      return res.status(400).send({
        message: "Name is required",
      });
    }
    const existingCategory = await categoryModel.findOne({ name });
    if (existingCategory) {
      return res.status(409).json({
        success: false,
        message: "Category already exists",
      });
    }
    const category = await new categoryModel({
      name,
      slug: slugify(name),
    }).save();
    res.status(201).send({
      success: true,
      message: "Category created",
      category,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      error,
      message: "Error in creating category",
    });
  }
};

export const updateCategoryController = async (req, res) => {
  try {
    console.log(req.body);
    const { name } = req.body;
    const { _id } = req.params;
    if (!name) {
      return res.status(400).send({
        message: "Name is required",
      });
    }
    const existingCategory = await categoryModel.findOne({ name });
    if (existingCategory) {
      return res.status(409).json({
        success: false,
        message: "Category already exists",
      });
    }
    const category = await categoryModel.findByIdAndUpdate(
      _id,
      { name, slug: slugify(name) },
      { new: true }
    );
    if (!category) {
      return res.status(404).send({
        success: false,
        message: "Category not found",
      });
    }
    res.status(200).send({
      success: true,
      messsage: "Category Updated Successfully",
      category,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      error,
      message: "Error while updating category",
    });
  }
};

export const getAllCategoriesController = async (req, res) => {
  try {
    const categories = await categoryModel.find({});
    res.status(200).send({
      success: true,
      message: "Successfully fetched all categories",
      categories,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      message: "Error in getting all categories",
      error,
      success: false,
    });
  }
};

export const getSingleCategoryController = async (req, res) => {
  try {
    const category = await categoryModel.findOne({ slug: req.params.slug });
    if (!category) {
      return res.status(400).send({
        message: "No category existing by that name/slug",
        success: false,
      });
    }
    res.status(200).send({
      success: true,
      message: "Successfully fetched single category",
      category,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      error,
      message: "Error in getting single category",
    });
  }
};
// by id
export const getSingleCategoryControllerById = async (req, res) => {
  try {
    const category = await categoryModel.findOne({ _id: req.params.id });
    if (!category) {
      return res.status(400).send({
        message: "No category existing by that id",
        success: false,
      });
    }
    res.status(200).send({
      success: true,
      message: "Successfully fetched single category",
      category,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      error,
      message: "Error in getting single category",
    });
  }
};

export const deleteCategoryController = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedCategory = await categoryModel.findByIdAndDelete(id);
    res.status(200).send({
      success: true,
      message: `Deleted category successfully`,
      deletedCategory,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error in deleting category",
      error,
    });
  }
};
