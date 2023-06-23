import orderModel from "../models/orderModel.js";

// registering orders from users
export const makeOrderController = async (req, res) => {
  try {
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
      bikes: bikeId,
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
    res.status(500).send({
      success: false,
      message: "Somethingwent wrong",
      error,
    });
  }
};

// order of single user : getting in customer your order,{customer orders in their your orders}
export const getOrdersController = async (req, res) => {
  try {
    const orders = await orderModel
      .find({ renter: req.user._id })
      .populate("bikes", "-photo")
      .populate("renter", "name");
    res.status(200).send({
      success: true,
      message: "Successfully fetched all orders of this user",
      orders,
    });
  } catch (error) {
    res.status(500).send({
      success: false,
      error,
      message: "Something went wrong",
    });
  }
};

// All the orders to be shown in dashboard
export const AllOrdersController = async (req, res) => {
  try {
    const orders = await orderModel
      .find({})
      .populate("bikes", "-photo")
      .populate("renter", "name")
      .sort({ createdAt: "-1" });
    res.json(orders);
  } catch (error) {
    res.status(500).send({
      success: false,
      message: "Something went wrong while fetching user orders",
      error,
    });
  }
};

// Update status of the order by admin
export const updateStatusController = async (req, res) => {
  try {
    const { orderId } = req.params;
    const { status } = req.body;
    const orders = await orderModel.findByIdAndUpdate(
      orderId,
      { status },
      { new: true }
    );
    res.json(orders);
  } catch (error) {
    res.status(500).send({
      success: false,
      message: "Something went wrong while updating user order status",
      error,
    });
  }
};
