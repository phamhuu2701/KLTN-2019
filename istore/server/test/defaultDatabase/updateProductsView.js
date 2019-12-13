const ProductDao = require("../../dao/product.dao");
const timeUtils = require("./../../util/timeUtils")

module.exports.updateProductsView = async () => {
    const products = await ProductDao.find();
    if (products.length > 0) {
        products.map((product, key) => {
            if(product.viewsCount.length > 0){
                // console.log("Product.viewsCount documents exists");
            }
            else{
                let count = Math.floor(Math.random() * 1000) + 1;
                let views = [];
                for (let i = 0; i < count; i++) {
                    views.push(timeUtils.createTimeAuto(2015, 2020));
                    // console.log("loop i = " + i);
                }
                // console.log(views);
                product.viewsCount = views;
                // console.log(product);
                ProductDao.update(product);
            }
        });
    } else {
        console.log("Product collection empty");
    }
};
