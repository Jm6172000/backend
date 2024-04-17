import mongoose from "mongoose";

const MONGO_URL = "https://backend-3-ibpk.onrender.comlogin";

export const connectDB = async () => {
  try {
    await mongoose.connect(MONGO_URL);
    console.log("connect mongoDB");
  } catch (err) {
    console.log(err);
  }
};
