import cartModel from "../models/cartModel.js";

// Thêm món vào giỏ hàng
const addToCart = async (req, res) => {
  try {
    const { userId, foodId, quantity } = req.body;

    let cart = await cartModel.findOne({ userId });

    if (!cart) {
      cart = new cartModel({ userId, items: [] });
    }

    const existingItemIndex = cart.items.findIndex(item => item.food.toString() === foodId);

    if (existingItemIndex > -1) {
      cart.items[existingItemIndex].quantity += quantity;
    } else {
      cart.items.push({ food: foodId, quantity });
    }

    await cart.save();
    res.json({ success: true, message: "Đã thêm vào giỏ hàng!", cart: cart.items });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: "Lỗi khi thêm vào giỏ hàng!" });
  }
};

// Xóa món khỏi giỏ hàng
const removeFromCart = async (req, res) => {
  try {
    const { userId, foodId } = req.body;

    const cart = await cartModel.findOne({ userId });
    if (!cart) {
      return res.status(404).json({ success: false, message: "Không tìm thấy giỏ hàng!" });
    }

    cart.items = cart.items.filter(item => item.food.toString() !== foodId);

    await cart.save();
    res.json({ success: true, message: "Đã xóa món khỏi giỏ hàng!", cart: cart.items });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: "Lỗi khi xóa món khỏi giỏ hàng!" });
  }
};

// Lấy giỏ hàng
const getCart = async (req, res) => {
  try {
    const { userId } = req.body;

    const cart = await cartModel.findOne({ userId }).populate("items.food");
    if (!cart) {
      return res.status(404).json({ success: false, message: "Không tìm thấy giỏ hàng!" });
    }

    const total = cart.items.reduce((sum, item) => {
      return sum + item.food.price * item.quantity;
    }, 0);

    res.json({ success: true, cart: cart.items, total });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: "Lỗi khi lấy giỏ hàng!" });
  }
};

export { addToCart, removeFromCart, getCart };