const express = require("express");
const router = express.Router();

const citiesCollection = require("../test/defaultDatabase/cityCollection");
const districtsCollection = require("../test/defaultDatabase/districtCollection");
const streetCollection = require("../test/defaultDatabase/streetCollection");
const authorizationCollection = require("../test/defaultDatabase/authorizationCollection");
const userCollection = require("../test/defaultDatabase/userCollection");
const storeCategoryCollection = require("../test/defaultDatabase/storeCategoryCollection");

/* GET home page. */
router.get("/", function(req, res, next) {

    citiesCollection.createDefaultCollection();
    districtsCollection.createDefaultCollection();
    streetCollection.createDefaultCollection();
    authorizationCollection.createDefaultCollection();
    userCollection.createDefaultCollection();
    storeCategoryCollection.createDefaultCollection();

    res.send("Check server console.log");
});

module.exports = router;
