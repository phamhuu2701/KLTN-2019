export default function getAvgRatesProduct(product) {
    let sumStars = 0;
    let ratesCount = 0;
    if (product.rates.length > 0) {
        product.rates.map((rate, key) => {
            if (rate.stars > 0) {
                sumStars += rate.stars;
                ratesCount++;
            }
            return null;
        });

        if (ratesCount > 0) {
            // console.log(sumStars / ratesCount);
            return sumStars / ratesCount;
        } else {
            return 0;
        }
    } else {
        return 0;
    }
}
