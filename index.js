require("dotenv").config();
const express = require("express");
const cors = require("cors");
const { connection } = require("./configs/db");

const app = express();

app.use(cors());
app.use(express.json());

const userRouter = require("./routes/User.route");
const productRouter = require("./routes/Product.route");
const orderRouter = require("./routes/Order.route");
const cartRouter = require("./routes/CartRoute");

// -------------------------------------------------------------

app.use("/user", userRouter);
app.use("/products", productRouter);
app.use("/orders", orderRouter);
app.use("/cart", cartRouter);

// -------------------------SERVER-------------------------------
app.listen(process.env.PORT, async () => {
  try {
    await connection;
    console.log("Connection with server Established");
  } catch (error) {
    console.log("Something went wrong", error.message);
  }
});
