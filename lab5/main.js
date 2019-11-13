let cityName;
let cityData;

document
    .querySelector("#show")
    .addEventListener("click", showWheather)

function showWheather() {
    cityName = document.querySelector("#getNameInpt").value;                        
    const wheather = new Wheather(cityName);
    wheather.fetchCityData();
    cityData = wheather.displayCityData();

    console.log(cityData)
}
