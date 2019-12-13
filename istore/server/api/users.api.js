const express = require("express");
const router = express.Router();
const md5 = require("md5");
const uid = require("uid");
const config = require("config");

const User = require("../models/user.model");
const UserDao = require("../dao/user.dao");
const StoreDao = require("../dao/store.dao");

const mailer = require("../util/mailer");

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
                from: config.get("domainName"),
                to: userSave.email,
                subject: `Xác thực tài khoản trên ${config.get("domainName")}`,
                html: `Bạn vừa tạo thành công tài khoản trên ${config.get(
                    "domainName"
                )}. Vui lòng click vào <a href="${config.get(
                    "localhost"
                )}/verify?id=${userSave._id}&mailVerifyToken=${
                    userSave.mailVerifyToken
                }">đây</a> để xác thực tài khoản và sử dụng trên ${config.get(
                    "domainName"
                )}!`
            };
            mailer
                .sendMail(mailOption)
                .then(result => {
                    // Return result for user
                    return res
                        .status(200)
                        .json({
                            message: `Tài khoản đã được tạo thành công! Một thư xác thực đã gửi tới <a href="https://mail.google.com" target="_blank">${result.accepted[0]}</a>!`
                        });
                })
                .catch(err => console.log(err));
        } else {
            return res
                .status(201)
                .json({ err: "Email hoặc số điện thoại đã tồn tại!" });
        }
    });

router
    .route("/forgotpassword-:email")
    .get(async (req, res) => {
        // Check email existing
        const email = req.params.email;
        const user = await UserDao.findOneByEmail(email);
        if (user) {
            // Update token and token expire
            const token = uid(10);
            UserDao.updateForgetPasswordToken(email, token)
                .then(result => {
                    // Send token to email
                    const mailOption = {
                        from: config.get("domainName"),
                        to: email,
                        subject: `Lấy lại mật khẩu - ${config.get(
                            "domainName"
                        )}`,
                        html: `Bạn vừa yêu cầu cấp lại mật khẩu trên ${config.get(
                            "domainName"
                        )}. Vui lòng nhập token dể cập nhật lại mật khẩu!
                Token: ${token}`
                    };
                    mailer
                        .sendMail(mailOption)
                        .then(result => {
                            // Response to client
                            return res
                                .status(200)
                                .json({ isMatch: true, err: null });
                        })
                        .catch(err =>
                            res
                                .status(202)
                                .json({
                                    isMatch: false,
                                    err: "Xảy ra lỗi. Vui lòng thử lại!"
                                })
                        );
                    //return res.status(200).json({isMatch: true, err: null});
                })
                .catch(err => {
                    return res
                        .status(202)
                        .json({
                            isMatch: false,
                            err: "Xảy ra lỗi. Vui lòng thử lại!"
                        });
                });
        } else {
            return res
                .status(201)
                .json({ isMatch: false, err: "*Email không trùng khớp!" });
        }
    })
    .put(async (req, res) => {
        // Update new password for user
        const email = req.params.email;
        const { token, password } = req.body;
        const user = await UserDao.findOneByEmail(email);
        if (user.forgetPasswordToken === token) {
            if (user.forgetPasswordTokenExpire - Date.now() <= 0) {
                // Expire
                return res.status(201).json({ err: "Token đã hết hạn!" });
            } else {
                // Success
                UserDao.updateNewPassword(email, md5(password))
                    .then(result => {
                        return res.status(200).json({ err: "" });
                    })
                    .catch(err => {
                        return res
                            .status(201)
                            .json({ err: "Xảy ra lỗi. Vui lòng thử lại!" });
                    });
            }
        } else {
            // Don't same token
            return res.status(201).json({ err: "Token không trùng khớp!" });
        }
    });

router.route("/verify").put((req, res) => {
    const { id, mailVerifyToken } = req.query;
    UserDao.findById(id)
        .then(result => {
            if (!result.isEmailActivated) {
                // Need verify email
                return UserDao.verify(id, mailVerifyToken).then(verified => {
                    if (verified) {
                        return res
                            .status(200)
                            .json(verified.email + " đã xác thực thành công!");
                    } else
                        return res
                            .status(202)
                            .json("Mã xác thực không chính xác!");
                });
            } else {
                // Email is actived on IStore
                return res
                    .status(201)
                    .json("Tài khoản của bạn đã được xác thực!");
            }
        })
        .catch(err => console.log(err));
});

router
    .route("/:id")
    .get(async (req, res, next) => {
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

        if (phone && !email) {
            // update phone
            user.phone = phone;

            // console.log(user);

            let userUpdate = await UserDao.update(user);
            // console.log(userUpdate);
            res.json(userUpdate);
        } else if (email & !phone) {
            // update email
            user.email = email;

            // console.log(user);

            let userUpdate = await UserDao.update(user);
            // console.log(userUpdate);
            res.json(userUpdate);
        } else {
            // update basic info

            // update basic info
            user.fullname = req.body.fullname;
            user.gender = req.body.gender;
            user.birthday = req.body.birthday;
            user.address = req.body.address;

            // console.log(user);

            let userUpdate = await UserDao.update(user);
            //console.log(userUpdate);
            req.session.user = userUpdate;
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
    let stores = await StoreDao.findByUser(user);
    res.json(stores);
});

module.exports = router;
