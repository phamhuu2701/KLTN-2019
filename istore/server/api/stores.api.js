const express = require("express");
const router = express.Router();

const ProductDao = require("../dao/product.dao");
const StoreDao = require("../dao/store.dao");

router.route("/").get(async (req, res, next) => {
    const name = req.query.name;
    // console.log(name);

    if (!name) {
        const stores = await StoreDao.find();
        if (!stores) {
            res.json({});
        } else {
            res.json(stores);
        }
    } else {
        const store = await StoreDao.findByName(name);
        if (!store) {
            res.json({});
        } else {
            res.json(store);
        }
    }
});

router.route("/:id").get(async (req, res, next) => {
    let id = req.params.id;
    let store = await StoreDao.findById(id);
    if (!store) {
        res.json({});
    } else {
        res.json(store);
    }
});

module.exports = router;
