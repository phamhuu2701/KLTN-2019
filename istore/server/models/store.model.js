const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const options = {
  autoCreate: true
};

const storeSchema = new Schema(
  {
    user: { type: Schema.Types.ObjectId, ref: "User" },
    phone: {type: String, maxlength: 10, trim: true, required: true},
    storeCategory: { type: Schema.Types.ObjectId, ref: "StoreCategory" },
    city: { type: Schema.Types.ObjectId, ref: "City" },
    district: { type: Schema.Types.ObjectId, ref: "District" },
    street: { type: Schema.Types.ObjectId, ref: "Street" },
    houseNumber: { type: String, required: true, maxlength: 20, trim: true },
    location: {
      type: { type: String, required: true, trim: true, default: "Point" },
      coordinates: []
    },
    title: { type: String, required: true, maxlength: 100, trim: true },
    description: { type: String, required: true, maxlength: 2500, trim: true },
    timestamp: { type: Date, required: true, default: Date.now },
    products: [{ type: Schema.Types.ObjectId, ref: "Product" }],
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

module.exports = mongoose.model("Store", storeSchema);
