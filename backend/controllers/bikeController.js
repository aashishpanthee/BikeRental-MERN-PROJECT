import bikeModel from "../models/bikeModel.js";
import fs from "fs";
import path from "path";
import slugify from "slugify";

export const addBikeController = async (req, res) => {
  try {
    const { name, number, slug, description, price, category, shipping } =
      req.fields;
    const { photo } = req.files;
    //    validation
    switch (true) {
      case !name:
        return res.status(422).send({ message: "Name is required" });
      case !number:
        return res.status(422).send({ message: "Bike_Number is required" });
      case !description:
        return res.status(422).send({ message: "Description is required" });
      case !price:
        return res.status(422).send({ message: "Price is required" });
      case !category:
        return res.status(422).send({ message: "Category is required" });
      case !photo && photo.size > 40000:
        return res
          .status(422)
          .send({ message: "Image is required & should be less than 5Mb" });
    }
    // bike or received vako bikeproduct ko euta copy banauxam.
    // kina bhani, photo ko data ma path lai sync garni, ani balla bike lai save garni database ma.
    const bike = new bikeModel({ ...req.fields, slug: slugify(name) });
    if (photo) {
      // console.dir(photo);
      bike.photo.data = fs.readFileSync(photo.path);
      bike.photo.contentType = photo.type;
    }
    await bike.save();
    res.status(201).send({
      success: true,
      message: "Bike added successfully",
      bike,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error in adding bike",
      error,
    });
  }
};

// get all bikes

export const getBikeAllController = async (req, res) => {
  try {
    // const { category } = req.query;
    // let query = bikeModel.find({});
    // if (category) {
    //   query = query.populate({
    //     path: "category",
    //     match: { name: category },
    //   });
    // } else {
    //   query = query.populate("category");
    // }
    // const bikes = await query.select("-photo").sort({ createdAt: -1 });
    // const filteredBikes = bikes.filter((bike) => bike.category !== null);
    const bikes = await bikeModel
      .find({})
      .populate("category")
      .select("-photo")
      .limit(10)
      .sort({ createdAt: -1 });
    res.status(200).send({
      success: true,
      total: bikes.length,
      message: "Successfully fetched all bikes",
      bikes,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Unsuccessful fetching all bikes",
      error,
    });
  }
};

// get single bike by slug : for admin side
export const getSingleBikeController = async (req, res) => {
  try {
    const bike = await bikeModel
      .findOne({ slug: req.params.slug })
      .select("-photo")
      .populate("category");
    res.status(200).send({
      success: true,
      message: "Successfully fetched bike",
      bike,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Something went wrong",
      error,
    });
  }
};

// get single bike by bid : for customer side
export const getSingleBikeControllerById = async (req, res) => {
  try {
    console.log(req.params, "params id");
    const bike = await bikeModel
      .findOne({ _id: req.params.bid })
      .select("-photo")
      .populate("category");
    res.status(200).send({
      success: true,
      message: "Successfully fetched bike",
      bike,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Something went wrong",
      error,
    });
  }
};

// updatebikecontroller
export const updateBikeController = async (req, res) => {
  try {
    const { name, slug, description, price, category, shipping } = req.fields;
    const { photo } = req.files;
    //    validation
    switch (true) {
      case !name:
        return res.status(422).send({ message: "Name is required" });
      case !description:
        return res.status(422).send({ message: "Description is required" });
      case !price:
        return res.status(422).send({ message: "Price is required" });
      case !category:
        return res.status(422).send({ message: "Category is required" });
      case !photo && photo.size > 50000:
        return res
          .status(422)
          .send({ message: "Image is required & should be less than 5Mb" });
    }
    const bike = await bikeModel.findByIdAndUpdate(
      req.params.bid,
      { ...req.fields, slug: slugify(name) },
      { new: true }
    );
    if (photo) {
      bike.photo.data = fs.readFileSync(photo.path);
      bike.photo.contentType = photo.type;
    }
    await bike.save();
    res.status(200).send({
      success: true,
      message: "Bike updated successfully",
      bike,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error in updating bike",
      error,
    });
  }
};

export const deleteBikeController = async (req, res) => {
  try {
    await bikeModel.findByIdAndDelete(req.params.bid).select("-photo");
    res.status(200).send({
      success: true,
      message: "Bike deleted successfully",
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error in deleting bike",
      error,
    });
  }
};

export const bikePhotoController = async (req, res) => {
  try {
    const bike = await bikeModel.findById(req.params.bid).select("photo");
    if (bike.photo.data) {
      res.set("Content-type", bike.photo.contentType);
      return res.status(200).send(bike.photo.data);
    }
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error while getting bike image",
      error,
    });
  }
};

// bikefilter controller
export const bikeFilterController = async (req, res) => {
  try {
    const { checked, radio } = req.body;
    let args = {};
    if (checked.length > 0) args.category = checked;
    if (radio.length) args.price = { $gte: radio[0], $lte: radio[1] };
    const bikes = await bikeModel
      .find(args)
      .populate("category")
      .select("-photo");
    res.status(200).send({
      success: true,
      message: "Successfully fetched filtered bikes",
      bikes,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error while filtering bikes",
      error,
    });
  }
};

// bike count
// export const bikeCountController = async (req, res) => {
//   try {
//     const total = await bikeModel.find({}).estimatedDocumentCount();
//     res.status(200).send({
//       success: true,
//       total,
//     });
//   } catch (error) {
//     console.log(error);
//     res.status(500).send({
//       success: false,
//       message: "Something went wrong",
//       error,
//     });
//   }
// };

// bike per page
// export const bikeListController = async (req, res) => {
//   try {
//     const perPage = 8;
//     const page = req.params.page ? req.params.page : 1;
//     const bikes = await bikeModel
//       .find({})
//       .select("-photo")
//       .skip((page - 1) * perPage)
//       .limit(perPage)
//       .sort({ createdAt: -1 });
//     res.status(200).send({
//       success: true,
//       message: "Successfully fetched products per page",
//       bikes,
//     });
//   } catch (error) {
//     console.log(error);
//     res.status(400).send({
//       success: false,
//       message: "Error in fetching per page",
//       error,
//     });
//   }
// };
