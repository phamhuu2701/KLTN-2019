const Model = require("../models/authorization.model");

module.exports = {
    find: () => {
        return new Promise((resolve, reject) => {
            Model.find({}).exec((err, results) => {
                if (err) return reject(null);
                return resolve(results);
            });
        }).catch((err) => null);
    },
    findById: id => {
        return new Promise((resolve, reject) => {
            Model.findById(id).exec((err, result) => {
                if (err) return reject(null);
                return resolve(result);
            });
        }).catch((err) => null);
    },
    findOneByName: name => {
        return new Promise((resolve, reject) => {
            Model.findOne({ name: name }).exec((err, result) => {
                if (err) return reject(null);
                return resolve(result);
            });
        }).catch((err) => null);
    },
    save: model => {
        return new Promise((resolve, reject) => {
            model.save((err, result) => {
                if (err) return reject(null);
                return resolve(result);
            });
        }).catch(() => null);
    },
    update: model => {
        return new Promise((resolve, reject) => {
            Model.findByIdAndUpdate(
                model._id,
                {
                    name: model.name
                },
                { new: true },
                (err, result) => {
                    if (err) return reject(null);
                    return resolve(result);
                }
            );
        }).catch((err) => null);
    },
    delete: model => {
        return new Promise((resolve, reject) => {
            Model.findByIdAndDelete(model.id, err => {
                if (err) return reject(false);
                return resolve(true);
            });
        }).catch((err) => false);
    }
};
