const express = require('express');
const app = express.Router();

app.route('/')
.get((req, res) => {
	req.session.isLogged = false;
	return res.status(200).json({"isLogged": false});
})

module.exports = app;