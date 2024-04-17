import { Schema, model, models } from "mongoose";

const OrderSchema = new Schema({
  client: { type: Schema.Types.ObjectId, ref: "User", required: true },
  service: { type: Schema.Types.ObjectId, ref: "Service", required: true },
  provider: { type: Schema.Types.ObjectId, ref: "User", required: true },
  status: {
    type: String,
    required: true,
    enum: ["pending", "in_progress", "completed", "cancelled"],
  },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
  details: {
    startingRank: { type: String },
    targetRank: { type: String },
    paymentAmount: { type: Number, required: true },
  },
});

const Order = models.Order || model("Order", OrderSchema);

export default Order;
