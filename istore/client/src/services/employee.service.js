export default function getEmployees(callback) {
    fetch("/api/employees/")
        .then(res => res.json())
        .then(results => {
            callback(results);
        })
        .catch(err => console.log(err));
}
