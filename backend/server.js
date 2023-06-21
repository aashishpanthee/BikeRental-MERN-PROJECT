import express from "express";
import colors from "colors";
import dotenv from "dotenv";
import morgan from "morgan";
import ConnectDb from "./config/ConnectDb.js";
import authRoutes from "./routes/authRoute.js";
import categoryRoutes from "./routes/categoryRoute.js";
import bikeRoutes from "./routes/bikeRoute.js";
import orderRoutes from "./routes/orderRoute.js";

import cors from "cors";
// configure env
dotenv.config();

// database config
ConnectDb();

// rest object
const app = express();

// middleware

app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

// routes
app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/category", categoryRoutes);
app.use("/api/v1/bike", bikeRoutes);
app.use("/api/v1/order", orderRoutes);
//  rest api
app.get("/", (req, res) => {
  res.send({
    message: "Welcome to this website",
  });
});

const PORT = process.env.PORT;

// run listen
app.listen(PORT, () => {
  console.log(
    `Server running on mode ${process.env.DEV_MODE} on ${PORT}`.bgWhite.black
  );
});
