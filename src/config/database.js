const mongoose = require("mongoose");

const connectMongoDB = async (url) => {
  const connection = await mongoose
    .connect(url)
    .then(() => {
      console.log("Connected to MongoDB!");
    })
    .catch((error) => {
      console.error(`Error connecting to MongoDB: ${error}`);
    });

  return connection;
};

module.exports = { connectMongoDB };
