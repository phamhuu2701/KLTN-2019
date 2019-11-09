module.exports.sortProductsByPrice = function(array) {
    array.sort(function(a, b) {
        if (a.price < b.price) {
            return -1;
        }
        if (a.price > b.price) {
            return 1;
        }
        return 0;
    });
};