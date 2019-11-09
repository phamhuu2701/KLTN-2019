const express = require("express");
const router = express.Router();

const citiesCollection = require("../test/defaultDatabase/cityCollection");
const districtsCollection = require("../test/defaultDatabase/districtCollection");
const streetCollection = require("../test/defaultDatabase/streetCollection");
const authorizationCollection = require("../test/defaultDatabase/authorizationCollection");
const userCollection = require("../test/defaultDatabase/userCollection");
const productCategoryCollection = require("../test/defaultDatabase/productCategoryCollection");
const productCollection = require("../test/defaultDatabase/productCollection");
const storeCategoryCollection = require("../test/defaultDatabase/storeCategoryCollection");
const storeCollection = require("../test/defaultDatabase/storeCollection");
const updateStoreCollection = require("../test/defaultDatabase/updateStoreCollection");

/* GET home page. */
router.get("/", function(req, res, next) {
    
    console.log("================================");
    citiesCollection.createDefaultCollection();
    districtsCollection.createDefaultCollection();
    streetCollection.createDefaultCollection();
    authorizationCollection.createDefaultCollection();
    userCollection.createDefaultCollection();
    productCategoryCollection.createDefaultCollection();
    productCollection.createDefaultCollection();
    storeCategoryCollection.createDefaultCollection();
    storeCollection.createDefaultCollection();
    updateStoreCollection.updateCollection();


    res.send("Check server console.log");
});

module.exports = router;
