const express = require('express');
const app = express.Router();

app.route('/')
.get((req, res) => {
	//res.cookie('csrfToken', req.csrfToken ? req.csrfToken() : null, { sameSite: true, httpOnly: false });
	console.log(req.session.isLogged);
	if (req.session.isLogged === true) {
		return res.status(200).json({"isLogged": true});
	} 
	return res.status(201).json({"isLogged": false});
})
.post((req,res) => {
    const {email, password} = req.body;
    // Check user account
    if (email ==='nancy' && password === '123') {
    	req.session.isLogged = true;
		return res.status(200).json({"firstname": "Nancy"})
    }
});

module.exports = app;