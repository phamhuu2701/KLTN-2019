const express = require("express");
const router = express.Router();

const Product = require("../models/product.model");
const ProductDao = require("../dao/product.dao");

const slug = require('../util/slug');

router
    .route("/")
    .get(async (req, res, next) => {

        const name = req.query.email;
        // console.log(name);
console.log(123)
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
/*
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
*/
router.route('/searchByName')
.get((req, res) => {
    const input = req.query.search;
    const search = '/' + slug(input, '|') + '/';
    console.log(search)
    ProductDao.searchByName(search)
    .then(products => {
        if (products.length > 0) {
            res.status(200).json(products);
        } else {
            res.status(201).json({"mesage": "Không tìm thấy sản phẩm mong muốn!"});
        }
    })
    .catch(err => console.log(err));
})

module.exports = router;