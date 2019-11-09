const Store = require("../../models/store.model");
const StoreDao = require("./../../dao/store.dao");

const UserDao = require("../../dao/user.dao");
const CityDao = require("../../dao/city.dao");
const DistrictDao = require("../../dao/district.dao");
const StreetDao = require("../../dao/street.dao");
const StoreCategoryDao = require("../../dao/storeCategory.dao");

const stores = [
    {
        houseNumber: "12",
        location: { type: "Point", coordinates: [10.851186, 106.756232] },
        phone: "01696697799",
        email: "eshop@gmail.com",
        name: "E-Shop",
        description:
            "Chuyên cung cấp các mặt hàng điện dân dụng chất lượng, uy tín, giá rẻ.",
        website: {
            hasWebsite: false
        }
    }
];

module.exports.createDefaultCollection = async () => {
    const storeArrays = await StoreDao.find();
    if (storeArrays.length <= 0) {
        console.log("Store collection is empty.");

        const storeCategory = await StoreCategoryDao.findOneByName(
            "Cửa hàng thiết bị dân dụng"
        );
        // console.log(storeCategory);

        const user = await UserDao.findOneByEmail("user10@gmail.com");
        // console.log(user);

        const city = await CityDao.findOneByName("Hồ Chí Minh");
        // console.log(city);

        const district = await DistrictDao.findOneByName("Thủ Đức");
        // console.log(district);

        const street = await StreetDao.findOneByName("Võ Văn Ngân");
        // console.log(street);

        if (storeCategory != null && user != null && city != null 
            && district != null && street != null) {
            stores.map((store, i) => {
                let storeNew = new Store({
                    user: user,
                    storeCategory: storeCategory,
                    city: city,
                    district: district,
                    street: street,
                    houseNumber: store.houseNumber,
                    location: store.location,
                    phone: store.phone,
                    email: store.email,
                    name: store.name,
                    description: store.description,
                    website: store.website
                });

                // console.log(storeNew);
                StoreDao.save(storeNew);
            });
            console.log("Default Store collection created.");
        }

    } else {
        console.log("Store collection existed: ", storeArrays.length, "/1");
    }
};