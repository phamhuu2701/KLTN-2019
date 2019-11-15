// định dạng kiểu hiển thị giá tiền: "60000" => "69.000đ"
export function formatPrice(price) {
    return (price / 1000).toFixed(3).replace(/\d(?=(\d{3})+\.)/g, "$&.");
}

// sắp xếp products giá tăng dần
export function sortIncreaseProductsByPrice(products) {
    products.sort((first, second) => {
        return (
            first.price * ((100 - first.saleoff) / 100) -
            second.price * ((100 - second.saleoff) / 100)
        );
    });
    return products;
}

// sắp xếp products giá giảm dần
export function sortDescreaseProductsByPrice(products) {
    products.sort((first, second) => {
        return (
            second.price * ((100 - second.saleoff) / 100) -
            first.price * ((100 - first.saleoff) / 100)
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

// sắp xếp products thời gian cũ nhất lên trước
export function sortIncreaseProductsByTimestamp(products) {
    products.sort((first, second) => {
        return first.timestampe - second.timestampe;
    });
    return products;
}

// sắp xếp products thời gian mới nhất lên trước
export function sortDescreaseProductsByTimestamp(products) {
    products.sort((first, second) => {
        return second.timestampe - first.timestampe;
    });
    return products;
}

// get rates avg
export function getRatesAvg(product) {

    if(!product.rates || product.rates.length === 0){
        return 0;
    }

    let sumRates = 0;
    for (let rate of product.rates) {
        sumRates += rate.stars;
    }
    return sumRates / product.rates.length;
}

// lấy giá trị mảng sao: 3.5 => [1, 1, 1, 0.5, 0]
export function getStarsArray(product) {
    let rateAvg = getRatesAvg(product);
    let starsArray = [];
    for(let i=1; i<=5; i++){
        if(i<rateAvg){
            starsArray.push(1);
        }
        else if((i - rateAvg >0) && (i - rateAvg < 1)){
            starsArray.push(0.5);
        } else {
            starsArray.push(0);
        }
    }
    return starsArray;
}

// lấy mảng classname sao
export function getStarsArrayClassName(product) {
    let rateAvg = getRatesAvg(product);
    let starsArray = [];
    for(let i=1; i<=5; i++){
        if(i<rateAvg){
            starsArray.push("fa fa-star");
        }
        else if((i - rateAvg >0) && (i - rateAvg < 1)){
            starsArray.push("fa fa-star-half-o");
        } else {
            starsArray.push("fa fa-star-o empty");
        }
    }
    return starsArray;
}