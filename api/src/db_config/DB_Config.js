import mongoose from "mongoose";
const MONGO = process.env.mongo_URL;
export const connectDb = async () => {
  const connect = await mongoose.connect(MONGO);
  connect && console.log("DB connected");
};
