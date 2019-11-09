const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const options = {
    autoCreate: true
};

const storeSchema = new Schema(
    {
        storeCategory: { type: Schema.Types.ObjectId, ref: "StoreCategory" },
        user: { type: Schema.Types.ObjectId, ref: "User" },
        city: { type: Schema.Types.ObjectId, ref: "City" },
        district: { type: Schema.Types.ObjectId, ref: "District" },
        street: { type: Schema.Types.ObjectId, ref: "Street" },
        houseNumber: {
            type: String,
            required: true,
            maxlength: 20,
            trim: true
        },
        location: {
            type: {
                type: String,
                required: true,
                trim: true,
                default: "Point"
            },
            coordinates: [{ type: Number, required: true }] //[lng, lat]
        },
        phone: { type: String, maxlength: 30, trim: true, required: true },
        email: { type: String, maxlength: 50, trim: true, required: true },
        name: { type: String, required: true, maxlength: 50, trim: true },
        description: {
            type: String,
            required: true,
            maxlength: 2500,
            trim: true
        },
        timestamp: { type: Date, required: true, default: Date.now },
        products: [{ type: Schema.Types.ObjectId, ref: "Product" }],
        logo: {
            type: String,
            maxlength: 250,
            trim: true,
            default:
                "https://musicplanetradio.com/wp-content/uploads/2015/07/2BKKR-Shop-Local-Logo1.png"
        },
        images: [{ type: String, required: true, maxlength: 250, trim: true }],
        videos: [{ type: String, required: true, maxlength: 250, trim: true }],
        website: {
            hasWebsite: { type: Boolean, required: true, default: false },
            url: { type: String, maxlength: 250, trim: true }
        },
        facebook: { type: String, maxlength: 250, trim: true },
        youtube: { type: String, maxlength: 250, trim: true },
        twitter: { type: String, maxlength: 250, trim: true },
        instagram: { type: String, maxlength: 250, trim: true },
        googlePlus: { type: String, maxlength: 250, trim: true },
        pinterest: { type: String, maxlength: 250, trim: true }
    },
    options
);
storeSchema.index({location: "2dsphere"});

module.exports = mongoose.model("Store", storeSchema);
