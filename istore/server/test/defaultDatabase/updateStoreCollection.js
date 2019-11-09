const Store = require("../../models/store.model");
const StoreDao = require("../../dao/store.dao");
const ProductDao = require("../../dao/product.dao");

module.exports.updateCollection = async () => {
    const store = await StoreDao.findByName("E-Shop");
    if(store != null){
        if(store.products.length > 0){
            console.log("Store.products document existed: ", store.products.length, "/20 products");
        }
        else {
            const products = await ProductDao.find();
            if(products.length > 0){
                products.map(async (product, i) => {
                    store.products.push(product);
                });
                const storeUpdate = await StoreDao.update(store);
                console.log("All Store documents updated: ", store.products.length, "/20 products");
            }
            else{
                console.log("Update Stores documents fail");
            }
        }
    }
    else{
        console.log("Store collection empty");
    }
};
