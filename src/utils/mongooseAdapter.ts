import { MongodbAdapter } from "@lucia-auth/adapter-mongodb";
import mongoose from "mongoose";

export const mongooseAdapter = new MongodbAdapter(
  mongoose.connection.collection("sessions"),
  mongoose.connection.collection("users")
);
