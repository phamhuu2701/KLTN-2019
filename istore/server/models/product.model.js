const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const options = {
  autoCreate: true
};

const productSchema = new Schema(
  {
    productCategory: { type: Schema.Types.ObjectId, ref: "ProductCategory" },
    name: { type: String, required: true, maxlength: 100, trim: true },
    description: { type: String, required: true, maxlength: 2500, trim: true },
    price: { type: Number, required: true },
    saleoff: {type: Number},
    images: [{ type: String, required: true, maxlength: 250, trim: true }],
    videos: [{ type: String, required: true, maxlength: 250, trim: true }],
    rates: [
      {
        user: { type: Schema.Types.ObjectId, ref: "User" },
        stars: { type: Number, required: true, min: 0, max: 5, default: 0 },
        timestamp: { type: Date, required: true, default: Date.now }
      }
    ]
  },
  options
);

module.exports = mongoose.model("Product", productSchema);
