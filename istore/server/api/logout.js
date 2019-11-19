const express = require('express');
const app = express.Router();

app.route('/')
.get((req, res) => {
    req.session.user = null;
	req.session.isLogged = false;
	return res.status(200).json({
        "isLogged": false,
        "user": null
    });
})

module.exports = app;