const express = require('express');
const router = express.Router();

const ProductDao = require('../dao/product.dao');
const StoreDao = require('../dao/store.dao');

const ProductModel = require('../models/product.model');

const slug = require('../util/slug');
const upload = require('../util/multer');

router
    .route('/')
    .get(async (req, res, next) => {
        if (req.query.search) {
            const { lat, lng, distance } = req.query;

            const search = slug(req.query.search, '.*');

            // Find product by product name
            ProductDao.searchByName(search)
                .then(products => {
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
                                    return res.status(201).json({
                                        mesage:
                                            'Không tìm thấy sản phẩm mong muốn!'
                                    });
                                }
                            }
                        );
                    } else {
                        return res.status(201).json({
                            mesage: 'Không tìm thấy sản phẩm mong muốn!'
                        });
                    }
                })
                .catch(err => console.log(err));
        } else {
            ProductDao.find()
                .then(products => {
                    res.json(products);
                })
                .catch(err => console.log(err));
        }
    })
    .post((req, res) => {
        upload.array('files', 10)(req, res, async err => {
            // Add new product
            const storeId = req.body.storeId;
            const images = await req.files.map(file => {
                const p = file.path;
                const index = p.indexOf('img');
                const path = '/' + p.slice(index);
                return path;
            });
            const product = {
                name: req.body.productName,
                nameRemoveAccents: slug(req.body.productName, ' '),
                productCategory: req.body.productCategory,
                description: req.body.productDecription,
                price: req.body.productPrice,
                saleoff: req.body.productseleOff,
                images: images,
                rateAvg: 0,
                timestamp: Date.now(),
                viewsCount: []
            };
            const productModel = new ProductModel(product);
            const newProduct = await ProductDao.save(productModel);

            // Push product id into store
            StoreDao.addProductIntoStore(storeId, newProduct._id)
                .then(result => {
                    res.status(200).json(result);
                })
                .catch(err => console.log(err));
        });
    });

router.route('/findRecentProducts').get((req, res) => {
    const ids = JSON.parse(req.query.ids);
    ProductDao.findByIds(ids)
        .then(products => {
            addStoreIntoRecentProduct(products, ids, async results => {
                if (results.length > 0) {
                    // const productArr = await ids.map(id => {
                    //     return results[
                    //         results.findIndex(result => {
                    //             return result._doc._id == id;
                    //         })
                    //     ];
                    // });
                    return res.status(200).json(results);
                } else {
                    return res.status(201).json({
                        mesage: 'Chưa có sản phẩm được xem gần đây!'
                    });
                }
            });
        })
        .catch(err => console.log(err));
});

router.route('/addProduct').post((req, res) => {
    multer.array('files', (req, res, next) => {
        // Add new product
        // Push product id into store
    });
});

router
    .route('/:id')
    .get(async (req, res, next) => {
        let id = req.params.id;
        let product = await ProductDao.findById(id);
        if (!product) {
            res.json(null);
        } else {
            res.json(product);
        }
    })
    .put(async (req, res, next) => {
        let id = req.params.id;
        let product = await ProductDao.findById(id);

        // update rate
        if (req.body.rate) {
            product.rates.push(req.body.rate);
        }

        let productUpdate = await ProductDao.update(product);
        res.json(productUpdate);
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
        return {
            ...product,
            store:
                stores[
                    stores.findIndex(store => {
                        return store.products.includes(product._id);
                    })
                ],
            distance: ''
        };
    });
    cb(results);
};

const addStoreIntoRecentProduct = async (products, ids, cb) => {
    let stores = [],
        results = [];
    stores = await StoreDao.findByProducts(ids);
    // Sort stores
    results = await ids.map(id => {
        return {
            ...products[
                products.findIndex(product => {
                    return product._doc._id == id;
                })
            ],
            store:
                stores[
                    stores.findIndex(sto => {
                        return sto.products.includes(id);
                    })
                ],
            distance: ''
        };
    });
    // results.forEach((result, index) => {
    //     console.log(ids[index], result._doc._id);
    //     console.log(result.store.name);
    // });
    cb(results);
};

module.exports = router;
