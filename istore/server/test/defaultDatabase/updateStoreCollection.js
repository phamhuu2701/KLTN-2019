const Store = require("../../models/store.model");
const StoreDao = require("../../dao/store.dao");
const ProductDao = require("../../dao/product.dao");

module.exports.updateCollection = async () => {

    const stores = await StoreDao.find(); //3
    if(stores.length > 0){

        if(stores[0].products.length > 0){
            console.log("Store.products document existed");
        }
        else {
            const products = await ProductDao.find(); //20
            if(products.length > 0){
                
                stores.map(async (store, i) => {

                    products.map(async (product, j) => {
                        if(j%(stores.length) == i){
                            store.products.push(products[j]);
                            StoreDao.update(store);
                        }
                    })
                    
                });
            }
            else {
                console.log("Product collection empty");
            }
        }
    }
    else {
        console.log("Store collection empty");
    }
};
