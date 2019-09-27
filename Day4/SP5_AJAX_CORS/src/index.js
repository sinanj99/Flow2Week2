import 'bootstrap/dist/css/bootstrap.css'
const svg = document.querySelector("svg");
function handleHttpErrors(res) {
    if (!res.ok) {
        return Promise.reject({ status: res.status, fullError: res.json() })
    }
    return res.json();
}
svg.onmouseover = function (svg) {
    var info = document.getElementById("info");
    const country = svg.target;
    country.style.fill = "red";
    fetch("http://restcountries.eu/rest/v1/alpha?codes=" + country.id)
        .then(res => handleHttpErrors(res))
        .then((data) => {
            info.innerHTML = "Country: " + data[0].name + "<br>" +
                "Population: " + data[0].population;
        })
        .catch(err => {
            if (err.status) {
                err.fullError.then(e => info.innerHTML = "Not a European Country !")
            } else {
                console.log("Network error");
            }
        });
};
svg.onmouseout = function (svg) {
    svg.target.style.fill = "#c0c0c0";
};