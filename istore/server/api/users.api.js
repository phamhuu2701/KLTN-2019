const express = require("express");
const router = express.Router();
const md5 = require("md5");
const uid = require('uid');

const User = require("../models/user.model");
const UserDao = require("../dao/user.dao");
const StoreDao = require("../dao/store.dao");

const mailer = require('../util/mailer');

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
        user.mailVerifyToken = uid(10);
        user = new User(user);

        let userSave = await UserDao.save(user);
        if (userSave) {
            userSave.password = null;

            // Send verify mail to user
            const mailOption = {
                from: 'Istore',
                to: userSave.email,
                subject: 'Xác thực tài khoản trên IStore',
                html: `Bạn vừa tạo thành công tài khoản trên IStore. Vui lòng click vào <a href="https://localhost:5000/api/users/verify?id=${userSave._id}&mailVerifyToken=${userSave.mailVerifyToken}">đây</a> để xác thực tài khoản và sử dụng trên IStore!`
            }
            mailer.sendMail(mailOption)
            .then(result => {
                console.log(result);
            })
            .catch(err => console.log(err))

            // Return result for user
            return res
                .status(200)
                .json({ message: `Tài khoản đã được tạo thành công! Vui lòng kiểm tra <a href="https://mail.google.com/" target="_blank">mail</a> để xác thực!` });
        }
        return res
            .status(201)
            .json({ err: "Email hoặc số điện thoại đã tồn tại!" });
    });

router.route('/verify')
.get((req, res) => {
    const {id, mailVerifyToken} = req.query;
    console.log(id, mailVerifyToken);
    UserDao.verify(id, mailVerifyToken)
    .then(result => {
        console.log(result);
    })
    .catch(err => console.log(err))
})


router
    .route("/:id")
    .get(async (req, res, next) => {
        console.log(123);
        let id = req.params.id;
        let user = await UserDao.findById(id);
        res.json(user);
    })
    .put(async (req, res, next) => {
        // console.log(req.body);
        let id = req.params.id;
        let user = await UserDao.findById(id);
        // console.log(user);

        const phone = req.body.phone;
        const email = req.body.email;

        if(phone && !email){ // update phone
            user.phone = phone;

            // console.log(user);

            let userUpdate = await UserDao.update(user);
            // console.log(userUpdate);
            res.json(userUpdate);
        }
        else if(email & !phone){ // update email           
            user.email = email;

            // console.log(user);

            let userUpdate = await UserDao.update(user);
            // console.log(userUpdate);
            res.json(userUpdate);
        } else {    // update basic info

            // update basic info
            user.fullname = req.body.fullname;
            user.gender = req.body.gender;
            user.birthday = req.body.birthday;
            user.address = req.body.address;

            // console.log(user);

            let userUpdate = await UserDao.update(user);
            // console.log(userUpdate);
            res.json(userUpdate);
        }
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
