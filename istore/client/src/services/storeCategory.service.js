export default function getStoreCategories(that) {
    fetch("/api/store-categories")
            .then(res => res.json())
            .then(results => {
                console.log(results);
                that.setState({ storeCategories: results });
            });
}
