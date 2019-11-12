export function sortProductByRating(stores) {
	stores.sort((first, second) => {
	    return first._doc.rateAvg - second._doc.rateAvg;
	})
}

export function sortProductByDistance(stores) {
	stores.sort((first, second) => {
	    if (first.distance < second.distance)
	        return -1;
	    else if (first.distance > second.distance)
	        return 1;
	    else return 0;
	})
}

export function sortIncreseProductByPrice(stores) {
	stores.sort((first, second) => {
	    return first._doc.price*((100 - first._doc.saleoff)/100) - second._doc.price*((100 - second._doc.saleoff)/100);
	})
}

export function sortDescreseProductByPrice(stores) {
	stores.sort((first, second) => {
        return second._doc.price*((100 - second._doc.saleoff)/100) - first._doc.price*((100 - first._doc.saleoff)/100);
    })
}