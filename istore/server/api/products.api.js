const express = require("express");
const router = express.Router();

const Product = require("../models/product.model");
const ProductDao = require("../dao/product.dao");

router
    .route("/")
    .get(async (req, res, next) => {

        const name = req.query.email;
        // console.log(name);

        if(!name){
            const products = await ProductDao.find();
            if (!products) {
                res.json({});
            } else {
                res.json(products);
            }
        }
        else {
            const product = await ProductDao.findByName(name);
            if (!product) {
                res.json({});
            } else {
                res.json(product);
            }
        }

    });

router
    .route("/:id")
    .get(async (req, res, next) => {
        let id = req.params.id;
        let product = await ProductDao.findById(id);
        if(!product){
            res.json({});
        }
        else {
            res.json(product);
        }
    });

module.exports = router;
