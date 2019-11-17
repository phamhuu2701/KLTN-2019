const express = require("express");
const router = express.Router();
const md5 = require("md5");

const User = require("../models/user.model");
const UserDao = require("../dao/user.dao");
const StoreDao = require("../dao/store.dao");

router
    .route("/")
    .get(async (req, res, next) => {
        const email = req.query.email;
        const phone = req.query.phone;
        // console.log(email);
        // console.log(phone);

        if (!email && !phone) {
            const users = await UserDao.find();
            if (!users) {
                res.json(null);
            } else {
                res.json(users);
            }
        } else if (email != null) {
            const user = await UserDao.findOneByEmail(email);
            if (!user) {
                res.json(null);
            } else {
                res.json(user);
            }
        } else if (phone != null) {
            const user = await UserDao.findOneByPhone(phone);
            if (!user) {
                res.json(null);
            } else {
                res.json(user);
            }
        }
    })
    .post(async (req, res, next) => {
        let user = req.body;
        user.password = md5(user.password);
        user = new User(user);

        let userSave = await UserDao.save(user);
        if (userSave) {
            userSave.password = null;
            return res
                .status(200)
                .json({ message: `Tài khoản đã được tạo thành công! Vui lòng kiểm tra <a href="https://mail.google.com/" target="_blank">mail</a> để xác thực!` });
        }
        return res
            .status(201)
            .json({ err: "Email hoặc số điện thoại đã tồn tại!" });
    });

router
    .route("/:id")
    .get(async (req, res, next) => {
        let id = req.params.id;
        let user = await UserDao.findById(id);
        res.json(user);
    })
    .put(async (req, res, next) => {
        let id = req.params.id;
        let user = await UserDao.findById(id);

        // update basic info
        user.fullname = req.body.fullname;
        user.gender = req.body.gender;
        user.birthday = req.body.birthday;
        user.address = req.body.address;

        // console.log(user);

        let userUpdate = await UserDao.update(user);
        // console.log(userUpdate);
        res.json(userUpdate);
    });
// .delete(async (req, res, next) => {
//     let id = req.params.id;
//     let user = await UserDao.findById(id);
//     let b = await UserDao.delete(user);
//     res.json({ message: b });
// });

router.route("/:id/stores").get(async (req, res, next) => {
    let id = req.params.id;
    let user = await UserDao.findById(id);
    let stores = await StoreDao.findByIdUser(user);
    res.json(stores);
});
module.exports = router;
