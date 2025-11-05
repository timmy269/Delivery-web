import mongoose from "mongoose";

const categorySchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    icon: { type: String, required: true },
  },
  {
    collection: "category",
  }
);

const categoryModel =
  mongoose.models.category || mongoose.model("category", categorySchema);

export default categoryModel;
