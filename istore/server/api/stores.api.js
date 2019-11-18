const express = require("express");
const router = express.Router();

const ProductDao = require("../dao/product.dao");
const StoreDao = require("../dao/store.dao");

router
    .route("/")
    .get(async (req, res, next) => {
        const name = req.query.name;
        // console.log(name);

        if (!name) {
            const stores = await StoreDao.find();
            if (!stores) {
                res.json(null);
            } else {
                res.json(stores);
            }
        } else {
            const store = await StoreDao.findByName(name);
            if (!store) {
                res.json(null);
            } else {
                res.json(store);
            }
        }
    })
    .post(async (req, res, next) => {
        let store = req.body;
        store = new Store(store);

        let storeSave = await StoreDao.save(store);
        if (storeSave) {
            storeSave.password = null;
            return res.status(200).json({
                message: `Thêm cửa hàng thành công!`
            });
        }
        return res.status(201).json({ err: "Thêm cửa hàng thất bại." });
    });

router.route("/:id").get(async (req, res, next) => {
    let id = req.params.id;
    let store = await StoreDao.findById(id);
    if (!store) {
        res.json(null);
    } else {
        res.json(store);
    }
});

module.exports = router;
