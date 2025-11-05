import mongoose from "mongoose";

const cartItemSchema = new mongoose.Schema({
  food: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "food", 
    required: true
  },
  quantity: {
    type: Number,
    required: true,
    default: 1
  }
});

const cartSchema = new mongoose.Schema({
  userId: {
    type: String,
    required: true
  },
  items: [cartItemSchema]
});

const Cart = mongoose.models.Cart || mongoose.model("Cart", cartSchema);

export default Cart;