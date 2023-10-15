const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const path = require("path");
const generatePdfRoutes = require("./src/routes/generatePdfRoutes");
const openAIRoutes = require("./src/routes/openaiRoutes");
const puppeteerRoutes = require("./src/routes/puppeteerPdfRoutes");
const { logRequestResponse } = require("./src/middlewares/index");
const { connectMongoDB } = require("./src/config/database");

dotenv.config();

const app = express();
const PORT = process.env.PORT || 8000;
const MONGO_URL = process.env.MONGO_URL;

// Mongoose Connection
// connectMongoDB(MONGO_URL);

// Middleware setup
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(logRequestResponse("logs/log.txt"));

// Routes
app.use("/api/chart", generatePdfRoutes);
app.use("/api/puppeteer", puppeteerRoutes);
app.use("/api/ai", openAIRoutes);

app.get("/api", (_req, res) => {
  res.json({ message: "Hey there!" });
});

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "/frontend/build")));

  app.get("*", (_req, res) => {
    res.sendFile(path.resolve(__dirname, "frontend", "build", "index.html"));
  });
}

app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});
