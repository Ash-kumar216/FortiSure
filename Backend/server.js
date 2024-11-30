const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const Razorpay = require("razorpay");
const crypto = require("crypto");

const app = express();
app.use(express.json());
app.use(express.urlencoded());
app.use(cors());

// MongoDB Schema for user
const userSchema = new mongoose.Schema({
  fname: String,
  lname: String,
  email: String,
  password: String,
});

const paymentSchema = new mongoose.Schema({
  paymentId: String,
  orderId: String,
  amount: Number,
  status: String,
  createdAt: { type: Date, default: Date.now },
});

mongoose
  .connect("mongodb://localhost:27017/testdb", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("DB connected"))
  .catch((err) => console.error("DB connection error:", err));

const User = mongoose.model("User", userSchema);
const Payment = mongoose.model("Payment", paymentSchema);

// Initialize Razorpay instance
const razorpay = new Razorpay({
  key_id: "your_key_id", // Replace with your Razorpay Key ID
  key_secret: "your_key_secret", // Replace with your Razorpay Key Secret
});

// Login route
app.post("/login", async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email: email });
    if (user) {
      if (password === user.password) {
        res.send({ message: "Login successfully", user: user });
      } else {
        res.send({ message: "Password and confirm password didn't match" });
      }
    } else {
      res.send({ message: "User not registered. Please sign up." });
    }
  } catch (err) {
    res.status(500).send({ message: "Server error", error: err });
  }
});

// Signup route
app.post("/signup", async (req, res) => {
  const { fname, lname, email, password, cpassword } = req.body;
  try {
    const existingUser = await User.findOne({ email: email });
    if (existingUser) {
      return res.status(400).send({ message: "User is already registered" });
    }

    if (password !== cpassword) {
      return res.status(400).send({ message: "Passwords do not match" });
    }

    const user = new User({
      fname,
      lname,
      email,
      password,
    });

    await user.save();
    res.send({ message: "Account has been created!! Please Login" });
  } catch (err) {
    console.error("Error during signup:", err);
    res.status(500).send({ message: "Server error", error: err.message });
  }
});

// Create Razorpay order
app.post("/create-order", async (req, res) => {
  const { amount } = req.body; // Amount in INR
  try {
    const options = {
      amount: amount * 100, // Amount in paisa (100 paisa = 1 INR)
      currency: "INR",
      receipt: `receipt_${Date.now()}`,
    };

    const order = await razorpay.orders.create(options);
    res.send(order); // Send order details to frontend
  } catch (err) {
    console.error("Error creating Razorpay order:", err);
    res.status(500).send({ message: "Failed to create order", error: err.message });
  }
});

// Verify Razorpay payment
app.post("/verify-payment", async (req, res) => {
  const { razorpay_order_id, razorpay_payment_id, razorpay_signature, amount } = req.body;

  const generatedSignature = crypto
    .createHmac("sha256", "your_key_secret") // Replace with your Razorpay Key Secret
    .update(`${razorpay_order_id}|${razorpay_payment_id}`)
    .digest("hex");

  if (generatedSignature === razorpay_signature) {
    try {
      // Save payment details in MongoDB
      const payment = new Payment({
        paymentId: razorpay_payment_id,
        orderId: razorpay_order_id,
        amount: amount,
        status: "Success",
      });

      await payment.save();
      res.send({ message: "Payment verified and saved successfully" });
    } catch (err) {
      console.error("Error saving payment:", err);
      res.status(500).send({ message: "Failed to save payment", error: err.message });
    }
  } else {
    res.status(400).send({ message: "Payment verification failed" });
  }
});

// Fetch all payments for dashboard
app.get("/payments", async (req, res) => {
  try {
    const payments = await Payment.find();
    res.send(payments);
  } catch (err) {
    console.error("Error fetching payments:", err);
    res.status(500).send({ message: "Failed to fetch payments", error: err.message });
  }
});

// Start server
app.listen(8000, () => {
  console.log("Server running on port 8000");
});

