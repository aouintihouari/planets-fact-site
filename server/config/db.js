import mongoose from "mongoose";

const MONGO_URI = process.env.MONGO_URI;

mongoose.connection.on("connected", () =>
  console.log("Mongoose connected to DB")
);

mongoose.connection.on("error", (err) =>
  console.error("Mongoose connection error:", err)
);

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(MONGO_URI, { dbName: "planets" });
    console.log(`MongoDB Connected: ${conn.connection.host}`);
    return conn;
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }
};

export default connectDB;
