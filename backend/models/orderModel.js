import mongoose from "mongoose";

const orderSchema = new mongoose.Schema(
  {
    bikes: {
      type: mongoose.ObjectId,
      ref: "Bikes",
    },

    renter: {
      type: mongoose.ObjectId,
      ref: "Users",
    },
    status: {
      type: String,
      default: "Not Processed",
      enum: [
        "Not Processed",
        "Processing",
        "Shipped",
        "Delivered",
        "Cancelled",
      ],
    },
    totalAmt: {
      type: Number,
      required: true,
    },
    startDate: {
      type: String,
      required: true,
    },
    endDate: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);
export default mongoose.model("Orders", orderSchema);
