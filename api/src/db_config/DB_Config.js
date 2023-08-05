import mongoose from "mongoose";
const MONGO = process.env.MONGO_URL;

// console.log(MONGO);
export const connectDb = async () => {
  try {
    const connect = await mongoose.connect(
      "mongodb+srv://akashisvaidya:book123@cluster0.2xvqqxt.mongodb.net/library?retryWrites=true&w=majority"
    );
    connect && console.log("DB connected");
  } catch (error) {
    return {
      status: "error",
      message: error.message,
    };
  }
};
