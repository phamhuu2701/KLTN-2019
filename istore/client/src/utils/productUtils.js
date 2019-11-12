// định dạng kiểu hiển thị giá tiền: "60000" => "69.000đ"
export function formatPrice(price) {
    return (price / 1000).toFixed(3).replace(/\d(?=(\d{3})+\.)/g, "$&.");
}

// sắp xếp products giá tăng dần
export function sortIncreaseProductsByPrice(products) {
    products.sort((first, second) => {
        return (
            first.price * ((100 - second._doc.saleoff) / 100) -
            second.price * ((100 - first._doc.saleoff) / 100)
        );
    });
    return products;
}

// sắp xếp products giá giảm dần
export function sortDescreaseProductsByPrice(products) {
    products.sort((first, second) => {
        return (
            second.price * ((100 - second._doc.saleoff) / 100) -
            first.price * ((100 - first._doc.saleoff) / 100)
        );
    });
    return products;
}

// sắp xếp products khuyến mãi tăng dần
export function sortIncreaseProductsBySaleoff(products) {
    products.sort((first, second) => {
        return first.saleoff - second.saleoff;
    });
    return products;
}

// sắp xếp products khuyến mãi giảm dần
export function sortDescreaseProductsBySaleoff(products) {
    products.sort((first, second) => {
        return second.saleoff - first.saleoff;
    });
    return products;
}

// sắp xếp products thời gian đăng tăng dần
export function sortIncreaseProductsByTimestamp(products) {
    products.sort((first, second) => {
        return first.timestampe - second.timestampe;
    });
    return products;
}

// sắp xếp products thời gian đăng giảm dần
export function sortDescreaseProductsByTimestamp(products) {
    products.sort((first, second) => {
        return second.timestampe - first.timestampe;
    });
    return products;
}

// get rates avg
export function getRatesAvg(product) {
    let sumRates = 0;
    for (let rate of product.rates) {
        sumRates += rate.stars;
    }
    return sumRates / product.rates.length;
}
