export default function getCities(that) {
    fetch("/api/cities")
            .then(res => res.json())
            .then(results => {
                console.log(results);
                that.setState({ cities: results });
            });
}
