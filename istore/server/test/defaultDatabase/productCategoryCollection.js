const ProductCategory = require("../../models/productCategory.model");
const ProductCategoryDao = require("../../dao/productCategory.dao");

const productCategories = [
    "Điều hòa phòng", 
    "Thiết bị Làm mát và làm đông lạnh", 
    "Thiết bị chăm sóc cá nhân", 
    "Thiết bị chiếu sáng", 
    "Thiết bị điện nhỏ", 
    "Thiết bị đo lường", 
    "Thiết bị giải trí (thiết bị điện tử tiêu dùng)", 
    "Thiết bị giặt ủi", 
    "Thiết bị khéo tay", 
    "Thiết bị làm sạch", 
    "Thiết bị nhà bếp", 
    "Thiết bị tỏa nhiệt", 
    "Thiết bị văn phòng"
];

module.exports.createDefaultCollection = async () => {
    const productCategoriesArray = await ProductCategoryDao.find();
    if (productCategoriesArray.length <= 0) {
        console.log("ProductCategory collection is empty.");
        productCategories.map(productCategory => {
            const productCategoryNew = new ProductCategory({
                name: productCategory
            });
            ProductCategoryDao.save(productCategoryNew);
        });
        console.log("Default ProductCategory collection created.");
    } else {
        console.log("ProductCategory collection existed.");
    }
};
