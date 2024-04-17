import { Schema, model, models } from "mongoose";

const ServiceSchema = new Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  category: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

const Service = models.Service || model("Service", ServiceSchema);

export default Service;
