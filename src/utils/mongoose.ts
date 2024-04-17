import mongoose from "mongoose";

const connectMongo = async () =>
  mongoose.connect(process.env.MONGO_CONNECTION_URL as string, {
    dbName: "raffy",
  });

export default connectMongo;
