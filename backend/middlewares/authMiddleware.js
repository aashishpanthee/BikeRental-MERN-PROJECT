import JWT from "jsonwebtoken";
import userModel from "../models/userModel.js";

// Protected route for endpoints to check whether there is token coming/valid or not
export const requireSignIn = async (req, res, next) => {
  try {
    // console.log(
    //   req.headers.authorization.split(" ")[1],
    //   `yo split function chahi, postman ma check garda hatauna parxa, frontend bata garda, rakhna parxa req.headers.authorization.split(" ")[1]`
    // );
    if (!req.headers.authorization) {
      return res.status(404).json({ message: "Unauthorized User." });
    }
    const decode = JWT.verify(
      req.headers.authorization.split(" ")[1],
      process.env.JWT_SECRET
    );
    req.user = decode;
    next();
  } catch (error) {
    res.status(401).send({
      message: "Invalid or expired token",
      error: error,
    });
  }
};

// Protected Route for Admin Access
export const isAdmin = async (req, res, next) => {
  try {
    const user = await userModel.findById(req.user._id);
    if (user.role !== 1) {
      return res.status(401).send({
        success: false,
        message: "Unauthorized Access",
      });
    } else {
      next();
    }
  } catch (error) {
    res.status(500).send({
      success: false,
      error,
      message: "Error in admin middleware",
    });
  }
};
