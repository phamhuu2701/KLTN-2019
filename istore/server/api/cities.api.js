const express = require("express");
const router = express.Router();

const CityDao = require("../dao/city.dao");

router.route("/").get(async (req, res, next) => {
    const name = req.query.name;
    // console.log(name);

    if (!name) {
        const cities = await CityDao.find();
        if (!cities) {
            res.json(null);
        } else {
            res.json(cities);
        }
    } else {
        const city = await CityDao.findOneByName(name);
        if (!city) {
            res.json(null);
        } else {
            res.json(city);
        }
    }
});

router.route("/:id").get(async (req, res, next) => {
    const id = req.params.id;
    const city = await CityDao.findById(id);
    if (!city) {
        res.json(null);
    } else {
        res.json(city);
    }
});

module.exports = router;
