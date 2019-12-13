const express = require("express");
const app = express.Router();
const md5 = require("md5");

const userDAO = require("../dao/user.dao");

app.route("/")
    .get((req, res) => {
        //res.cookie('csrfToken', req.csrfToken ? req.csrfToken() : null, { sameSite: true, httpOnly: false });
        if (req.session.isLogged === true) {
            return res
                .status(200)
                .json({ isLogged: true, user: req.session.user });
        }
        return res.status(201).json({ isLogged: false, user: null });
    })
    .post((req, res) => {
        const { email, password } = req.body;
        // Check user account
        userDAO
            .findOneByEmailAndPassword(email, md5(password))
            .then(user => {
                if (user) {
                    user.password = null;
                    req.session.isLogged = true;
                    req.session.user = user;
                    return res.status(200).json({ isLogged: true, user: user });
                }
                return res.status(201).json({ isLogged: false, user: null });
            })
            .catch(err => {
                if (err) {
                    console.log(err);
                }
                return res.status(201).json({ isLogged: false, user: null });
            });
    });

app.route("/facebook").post((req, res) => {
    LoginViaSocialAccount(req, res);
});

app.route("/google").post((req, res) => {
    LoginViaSocialAccount(req, res);
});

const LoginViaSocialAccount = (req, res) => {
    const user = req.body;
    user.password = md5(user.password);
    userDAO
        .findOrCreate(user)
        .then(result => {
            const user = result.doc;
            if (user.password) {
                user.password = null;
                req.session.isLogged = true;
                req.session.user = user;
            }
            return res.status(200).json(user);
        })
        .catch(err => console.log(err));
};

module.exports = app;
