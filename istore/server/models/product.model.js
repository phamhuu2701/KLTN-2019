const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const options = {
    autoCreate: true
};

const productSchema = new Schema(
    {
        productCategory: {
            type: Schema.Types.ObjectId,
            ref: "ProductCategory"
        },
        store: { type: Schema.Types.ObjectId, ref: "Store" },
        name: { type: String, required: true, maxlength: 100, trim: true },
        nameRemoveAccents: {
            type: String,
            required: true,
            maxlength: 100,
            trim: true
        },
        description: {
            type: String,
            required: true,
            maxlength: 2500,
            trim: true
        },
        price: { type: Number, required: true, min: 0 },
        saleoff: { type: Number, required: true, default: 0 },
        images: [{ type: String, required: true, maxlength: 250, trim: true }],
        videos: [{ type: String, required: true, maxlength: 250, trim: true }],
        rates: [
            {
                fullname: {
                    type: String,
                    maxlength: 50,
                    trim: true,
                    unique: true
                },
                email: {
                    type: String,
                    maxlength: 50,
                    trim: true,
                    unique: true
                },
                content: {
                    type: String,
                    required: true,
                    maxlength: 250,
                    trim: true
                },
                stars: {
                    type: Number,
                    required: true,
                    min: 0,
                    max: 5,
                    default: 0
                },
                timestamp: { type: Date, required: true, default: Date.now }
            }
        ],
        rateAvg: { type: Number, required: true, default: 0 },
        timestamp: { type: Date, required: true, default: Date.now }
    },
    options
);

module.exports = mongoose.model("Product", productSchema);
