const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const options = {
    autoCreate: true
};

const userSchema = new Schema(
    {
        authorization: { type: Schema.Types.ObjectId, ref: "Authorization" },
        fullname: {
            firstname: {
                type: String,
                required: true,
                maxlength: 20,
                trim: true
            },
            lastname: {
                type: String,
                required: true,
                maxlength: 20,
                trim: true
            }
        },
        phone: { type: String, maxlength: 30, trim: true, unique: true },
        email: { type: String, maxlength: 50, trim: true, unique: true },
        password: { type: String, required: true, maxlength: 50, trim: true },
        address: { type: String, maxlength: 250, trim: true },
        gender: { type: Boolean, default: false },
        birthday: { type: Date, default: Date.now },
        timeRegister: { type: Date, required: true, default: Date.now },
        avatars: [{ type: String, required: true, maxlength: 250, trim: true, default: "https://pbs.twimg.com/profile_images/951624200787132417/qLdX4E-u.jpg" }]
    },
    options
);

module.exports = mongoose.model("User", userSchema);
