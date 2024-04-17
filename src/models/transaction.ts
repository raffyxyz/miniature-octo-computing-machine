import { Schema, model, models } from "mongoose";

const TransactionSchema = new Schema({
  order: { type: Schema.Types.ObjectId, ref: "Order", required: true },
  amount: { type: Number, required: true },
  paymentMethod: { type: String, required: true },
  status: {
    type: String,
    required: true,
    enum: ["pending", "completed", "failed"],
  },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

const Transaction =
  models.Transaction || model("Transaction", TransactionSchema);

export default Transaction;
