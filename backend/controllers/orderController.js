import orderModel from "../models/orderModel.js";

// registering orders from users
export const makeOrderController = async (req, res) => {
  try {
    console.log(req.user._id, "userid from orderController");
    const { bikeId, totalAmt, startDate, endDate } = req.body;
    // Validations
    if (!totalAmt) {
      return res.send({ error: "Amount is required" });
    }
    if (!startDate) {
      return res.send({ error: "Selection of day is required" });
    }
    if (!endDate) {
      return res.send({ error: "Selection of day is required" });
    }
    const order = new orderModel({
      renter: req.user._id,
      bike: bikeId,
      totalAmt: totalAmt,
      startDate: startDate,
      endDate: endDate,
    }).save();
    res.status(201).send({
      success: true,
      message: "Order created successfully",
      order,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Somethingwent wrong",
      error,
    });
  }
};
