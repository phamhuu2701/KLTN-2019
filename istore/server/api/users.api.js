const express = require("express");
const router = express.Router();

const User = require("../models/user.model");
const UserDao = require("../dao/user.dao");

router
    .route("/")
    .get(async (req, res, next) => {

        const email = req.query.email;
        const phone = req.query.phone;
        // console.log(email);
        // console.log(phone);

        if(!email && !phone){
            const users = await UserDao.find();
            if (!users) {
                res.json({});
            } else {
                res.json(users);
            }
        }
        else if(email != null){
            const user = await UserDao.findOneByEmail(email);
            if (!user) {
                res.json({});
            } else {
                res.json(user);
            }
        }
        else if(phone != null){
            const user = await UserDao.findOneByPhone(phone);
            if (!user) {
                res.json({});
            } else {
                res.json(user);
            }
        }

    });
    // .post(async (req, res, next) => {
    //     let user = new User();
    //     user.fullname = req.body.fullname;
    //     user.gender = req.body.gender;
    //     user.age = req.body.age;

    //     let userSave = await UserDao.save(user);
    //     res.json(userSave);
    // });

router
    .route("/:id")
    .get(async (req, res, next) => {
        let id = req.params.id;
        let user = await UserDao.findById(id);
        res.json(user);
    });
    // .put(async (req, res, next) => {
    //     let id = req.params.id;
    //     let user = await UserDao.findById(id);
    //     user.fullname = req.body.fullname;
    //     user.gender = req.body.gender;
    //     user.age = req.body.age;

    //     let userUpdate = await UserDao.update(user);
    //     res.json(userUpdate);
    // })
    // .delete(async (req, res, next) => {
    //     let id = req.params.id;
    //     let user = await UserDao.findById(id);
    //     let b = await UserDao.delete(user);
    //     res.json({ message: b });
    // });

module.exports = router;
