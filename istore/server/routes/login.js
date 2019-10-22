const express = require('express');
const app = express.Router();

app.route('/')
.get((req, res) => {
	if (req.session.isLogged) {
		return res.status(200).json({"isLogged": true});
	} return res.status(203).json({"isLogged": false});
})
.post((req, res) => {
	// Do login
})

module.exports = app;