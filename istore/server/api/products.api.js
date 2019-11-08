const express = require("express");
const router = express.Router();

const ProductDao = require("../dao/product.dao");
const StoreDao = require("../dao/store.dao");

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
    const {lat, lng, distance} = req.query;
    
    const search = slug(req.query.search, '.*');

    // Find product by product name
    ProductDao.searchByName(search)
    .then(products => {
        if (products.length > 0) {
            // Get product ids
            
            let results;
            // Find store by products list
            addStoreIntoProduct(products, [parseFloat(lng), parseFloat(lat)], distance, (results) => {
                if (results.length > 0) {
                    return res.status(200).json(results);
                } else {
                    return res.status(201).json({"mesage": "Không tìm thấy sản phẩm mong muốn!"});
                }
            })
        } else {
            return res.status(201).json({"mesage": "Không tìm thấy sản phẩm mong muốn!"});
        }
    })
    .catch(err => console.log(err));
})

const addStoreIntoProduct = async (products, latlng, distance, cb) => {
    let stores = [], results = [];
    for (var i = 0; i < products.length; i++) {
        await StoreDao.findByProduct(products[i]._id, latlng, distance)
        .then(store => {
            if (store) {
                stores.push(store);
            } else {
                products.splice(i, 1);
                i--;
            }
        })
        .catch(err => console.log(err))
    }

    results = products.map((product, index) => {
        return {...product, store: stores[index], distance: ''}
    })
    cb(results);
}

module.exports = router;