import mongoose from "mongoose";

export const dbConnect = async () => {
  try {
    mongoose.set("strictQuery", true);
    const conn = await mongoose.connect(process.env.MONGO_CLIENT);
    conn?.connections
      ? console.log("Db Connected")
      : console.log("Unable to connect to Db");
  } catch (error) {
    console.log(error);
  }
};
