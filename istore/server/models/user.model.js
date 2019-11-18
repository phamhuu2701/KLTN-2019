const mongoose = require("mongoose");
const findOrCreate = require('mongoose-findorcreate');
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
                maxlength: 30,
                trim: true
            }
        },
        phone: { type: String, maxlength: 10, trim: true, unique: true },
        isPhoneActivated: { type: Boolean, required: true, default: false },
        email: { type: String, maxlength: 30, trim: true, unique: true },
        isEmailActivated: { type: Boolean, required: true, default: false },
        password: { type: String, required: true, maxlength: 50, trim: true },
        address: { type: String, maxlength: 100, trim: true },
        gender: { type: Boolean, default: false },
        birthday: { type: Date, default: Date.now },
        timeRegister: { type: Date, required: true, default: Date.now },
        avatars: { 
            type: Array,
            default: ["https://i0.wp.com/www.winhelponline.com/blog/wp-content/uploads/2017/12/user.png?fit=256%2C256&quality=100&ssl=1"]
        }
    },
    options
);

userSchema.plugin(findOrCreate);

module.exports = mongoose.model("User", userSchema);
