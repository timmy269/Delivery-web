import express from "express";
import multer from "multer";
import { addFood } from "../controllers/foodController.js";

const foodRouter = express.Router();

// Cấu hình Multer
const storage = multer.diskStorage({
  filename:(rep,file,cb) => {
    return cb(null, `${Date.now()} $ {file.originalname}`)
  }
})

const upload = multer({ storage: storage });

// Route
foodRouter.post("/add", upload.single("image"), addFood);

export default foodRouter;
