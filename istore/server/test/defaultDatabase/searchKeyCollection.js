const SearchKey = require("../../models/searchKey.model");
const SearchKeyDao = require("../../dao/searchKey.dao");

const searchKeys = [
    { value: "bong" },
    { value: "den" },
    { value: "led" },
    { value: "bong den" },
    { value: "bong den led" },
    { value: "den led" },
    { value: "cafe" },
    { value: "tra" },
    { value: "sua" },
    { value: "tra sua" }
];

module.exports.createDefaultCollection = async () => {
    const searchKeyArray = await SearchKeyDao.find();
    if (searchKeyArray.length <= 0) {
        console.log("SearchKey collection is empty.");

        searchKeys.map(searchKey => {
            const num = Math.floor(Math.random() * 100);
            let count = [];
            for (let i = 0; i < num; i++) {
                const y = 2014 + Math.floor(Math.random() * 6);
                const m = Math.floor(Math.random() * 11);
                const d = Math.floor(Math.random() * 28);
                let currDate = new Date();
                currDate.setFullYear(y);
                currDate.setMonth(m);
                currDate.setDate(d);
                count.push(currDate);
            }

            const searchKeyNew = new SearchKey({
                value: searchKey.value,
                count: count
            });
            // console.log(searchKeyNew);
            SearchKeyDao.save(searchKeyNew);
        });
        console.log("Default SearchKey collection created.");
    } else {
        console.log(
            "SearchKey collection existed: ",
            searchKeyArray.length,
            "/",
            searchKeys.length
        );
    }
};
