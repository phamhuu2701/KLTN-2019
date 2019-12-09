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
const updateProductsView = require("../test/defaultDatabase/updateProductsView");

const cityDao = require("../dao/city.dao");
const districtDao = require("../dao/district.dao");
const streetDao = require("../dao/street.dao");
const authorizationDao = require("../dao/authorization.dao");
const userDao = require("../dao/user.dao");
const storeCategoryDao = require("../dao/storeCategory.dao");
const storeDao = require("../dao/store.dao");
const productCategotyDao = require("../dao/productCategory.dao");
const productDao = require("../dao/product.dao");

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
    updateProductsView.updateProductsView();

    var myVar = setInterval(() => {
        console.log("Database is creating..");
    }, 1000);

    setTimeout(async () => {
        
        clearInterval(myVar);
        
        let cities = await cityDao.find();
        let districts = await districtDao.find();
        let streets = await streetDao.find();
        let authorizations = await authorizationDao.find();
        let users = await userDao.find();
        let storeCategories = await storeCategoryDao.find();
        let stores = await storeDao.find();
        let productCategories = await productCategotyDao.find();
        let products = await productDao.find();

        if (
            cities.length === 63 &&
            districts.length === 24 &&
            streets.length === 46 &&
            authorizations.length === 4 &&
            users.length === 20 &&
            storeCategories.length === 13 &&
            stores.length === 13 &&
            productCategories.length === 12 &&
            products.length === 48
        ) {
            console.log("================================");
            console.log("Database created!");
        } else {
            console.log("================================");
            console.log(
                "Creating database not success. Try again: to refresh page 'http://localhost:5000/create-database'"
            );
        }
    }, 10000);

    res.send("Check server console.log");
});

module.exports = router;
