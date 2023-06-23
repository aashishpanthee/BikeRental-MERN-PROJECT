import { comparePassword, hashPassword } from "../helpers/authHelper.js";
import userModel from "../models/userModel.js";
import JWT from "jsonwebtoken";

// POST REGISTER
export const registerController = async (req, res) => {
  try {
    const { name, email, password, role, answer } = req.body;
    // Validations
    if (!name) {
      return res.send({ error: "Name is required" });
    }
    if (!email) {
      return res.send({ error: "Email is required" });
    }
    if (!password) {
      return res.send({ error: "Password is required" });
    }
    if (!answer) {
      return res.send({ error: "Security Question field is required" });
    }
    // check user
    const existingUser = await userModel.findOne({ email });
    // existing user
    if (existingUser) {
      return res.status(409).send({
        success: false,
        message: "Email already exists !!!",
      });
    }
    // register user
    const hashedPassword = await hashPassword(password);
    // save
    const user = await new userModel({
      name,
      email,
      password: hashedPassword,
      answer,
    }).save();
    res.status(201).send({
      success: true,
      message: "User registration successfull",
      user: {
        user: user.name,
        email: user.email,
        _id: user._id,
      },
    });
  } catch (error) {
    resizeBy.status(500).send({
      success: false,
      message: "Registration error",
      error,
    });
  }
};

// POST LOGIN
export const loginController = async (req, res) => {
  try {
    const { email, password } = req.body;
    // Validation
    if (!email || !password) {
      return res.status(400).send({
        success: false,
        message: "Invalid or missing credentials",
      });
    }
    // check user
    const user = await userModel.findOne({ email });
    if (!user) {
      return res.status(401).send({
        success: false,
        message: "Invalid credentials",
      });
    }
    const match = await comparePassword(password, user.password);
    if (!match) {
      return res.status(401).send({
        success: false,
        message: "Invalid credentials",
      });
    }
    // token
    const token = JWT.sign(
      { _id: user._id, name: user.name, role: user.role },
      process.env.JWT_SECRET,
      {
        expiresIn: "7d",
      }
    );
    res.status(200).send({
      success: true,
      message: "Login successfull",
      user: {
        name: user.name,
        email: user.email,
        _id: user._id,
        role: user.role,
      },
      token,
    });
  } catch (error) {
    res.status(500).send({
      success: false,
      message: "Login failed",
      error,
    });
  }
};

// Fetch all the users
export const AllUsersController = async (req, res) => {
  try {
    const allUsers = await userModel.find({}, { password: 0 });
    if (!allUsers) {
      return res.status(204).send({
        success: true,
        message: "No data was found",
      });
    }
    res.status(200).send({
      success: true,
      users: allUsers,
    });
  } catch (error) {
    res.status(500).send({
      success: false,
      message: "Something went wrong",
      error,
    });
  }
};

// Forgot Password Controller
export const forgotPasswordController = async (req, res) => {
  try {
    const { email, answer, newPassword } = req.body;
    if (!email) {
      return res.status(400).send({ message: "Email is required" });
    }
    if (!answer) {
      return res
        .status(400)
        .send({ message: "Security question field is required" });
    }
    if (!newPassword) {
      return res.status(400).send({ message: "New Password is required" });
    }

    const user = await userModel.findOne({ email });
    // validation
    if (!user) {
      return res.status(400).send({
        success: false,
        message: "Invalid Credentials",
      });
    }
    if (user.answer == answer) {
      const hashed = await hashPassword(newPassword);
      await userModel.findOneAndUpdate({ email }, { password: hashed });
      // token
      const token = JWT.sign({ _id: user._id }, process.env.JWT_SECRET, {
        expiresIn: "7d",
      });
      res.status(200).send({
        success: true,
        message: "Password updated successfully",
        user: {
          name: user.name,
          email: user.email,
          _id: user._id,
          role: user.role,
        },
        token,
      });
    } else {
      return res.status(401).send({
        success: false,
        message: "Security answer did not match !!",
      });
    }

    // check
  } catch (error) {
    res
      .status(500)
      .send({ success: false, message: "Something went wrong", error });
  }
};

// update profile or get the status of LoggedInUser

export const userProfileController = async (req, res) => {
  try {
    const user = await userModel.findById(req.user._id);
    if (!user) {
      res.status(400).send({
        success: false,
        message: "User not found ",
      });
      res.status(200).send({
        success: false,
        user,
        message: "Userinfo fetched successfully",
      });
    }
  } catch (error) {
    res.status(500).send({
      success: false,
      error,
      message: "Something went wrong",
    });
  }
};
