import mongoose from "mongoose";

const MONGO_URL = "mongodb+srv://Manuel25:Manuel90345@cluster0.hahhggr.mongodb.net/";

export const connectDB = async () => {
  try {
    await mongoose.connect(MONGO_URL);
    console.log("connect mongoDB");
  } catch (err) {
    console.log(err);
  }
};
