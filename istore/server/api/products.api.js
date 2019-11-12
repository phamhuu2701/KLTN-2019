const express = require("express");
const router = express.Router();

const ProductDao = require("../dao/product.dao");
const StoreDao = require("../dao/store.dao");

const slug = require("../util/slug");

router.route("/").get(async (req, res, next) => {
    const { lat, lng, distance } = req.query;

    const search = slug(req.query.search, ".*");
    console.log(123);

    // Find product by product name
    ProductDao.searchByName(search)
        .then(products => {
            console.log(products);
            if (products.length > 0) {
                // Get product ids

                let results;
                // Find store by products list
                addStoreIntoProduct(
                    products,
                    [parseFloat(lng), parseFloat(lat)],
                    distance,
                    results => {
                        if (results.length > 0) {
                            return res.status(200).json(results);
                        } else {
                            return res
                                .status(201)
                                .json({
                                    mesage: "Không tìm thấy sản phẩm mong muốn!"
                                });
                        }
                    }
                );
            } else {
                return res
                    .status(201)
                    .json({ mesage: "Không tìm thấy sản phẩm mong muốn!" });
            }
        })
        .catch(err => console.log(err));
});

router.route("/:id").get(async (req, res, next) => {
    let id = req.params.id;
    let product = await ProductDao.findById(id);
    if (!product) {
        res.json({});
    } else {
        res.json(product);
    }
});

const addStoreIntoProduct = async (products, latlng, distance, cb) => {
    let stores = [],
        results = [];
    for (var i = 0; i < products.length; i++) {
        const store = await StoreDao.findByProduct(
            products[i]._id,
            latlng,
            distance
        );
        if (store) {
            stores.push(store);
        } else {
            products.splice(i, 1);
            i--;
        }
    }

    results = products.map((product, index) => {
        return { ...product, store: stores[index], distance: "" };
    });
    cb(results);
};

module.exports = router;
