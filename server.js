const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");

dotenv.config();

const app = express();
const PORT = process.env.PORT || 8000;

// Middleware setup
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

// Routes
app.get("/api", (_req, res) => {
  res.json({ message: "Hey there!" });
});

app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});
