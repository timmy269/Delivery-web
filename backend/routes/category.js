import express from "express";
import multer from "multer";
import categoryModel from "../models/categoryModel.js";
import foodModel from "../models/foodModel.js";

const router = express.Router();

const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, "uploads/"),
  filename: (req, file, cb) => cb(null, Date.now() + "-" + file.originalname),
});
const upload = multer({ storage });


router.get("/", async (req, res) => {
  try {
    const categories = await categoryModel.find().limit(10);
    const foods = await foodModel.find();

    const result = categories.map((cat) => {
      const count = foods.filter((f) => f.category === cat.name).length;
      return {
        _id: cat._id,
        name: cat.name,
        image: "public/assets/menu_" + (categories.indexOf(cat) + 1) + ".png",
        items: count,
      };
    });

    res.json({ category: result });
  } catch (err) {
    res.status(500).json({
      message: "Lỗi lấy dữ liệu category",
      error: err.message,
    });
  }
});


router.get("/viewall", async (req, res) => {
  try {
    const categories = await categoryModel.find();
    const foods = await foodModel.find();

    const result = categories.map((cat) => {
      const count = foods.filter((f) => f.category === cat.name).length;
      return {
        _id: cat._id,
        name: cat.name,
        image: "public/assets/menu_" + (categories.indexOf(cat) + 1) + ".png",
        items: count,
      };
    });

    res.json({ category: result });
  } catch (err) {
    res.status(500).json({
      message: "❌ Lỗi lấy toàn bộ category",
      error: err.message,
    });
  }
});

router.post("/add", upload.single("image"), async (req, res) => {
  try {
    const name = req.body.name;
    const imagePath = req.file ? req.file.path : req.body.image || "";

    const category = await categoryModel.create({ name, image: imagePath });
    res.status(201).json({
      success: true,
      message: "Thêm category thành công",
      category,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "Lỗi thêm category",
      error: err.message,
    });
  }
});

export default router;
