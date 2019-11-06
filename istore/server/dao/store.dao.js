const Model = require('../models/store.model');

module.exports = {
	findByProducts: productIds => {
		return Model.find({products: {$in: productIds}});
		//return Model.find();
	},

	findByProduct: async (productId, latlng, distance) => {
		return await Model.findOne({
			products: productId, 
			location: {
				$near: {
					$maxDistance: distance,
					$geometry: 
					{
						type: 'Point',
						coordinates: latlng
					}
				}
			}
		});
	}
}