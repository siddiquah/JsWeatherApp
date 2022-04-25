let searchBar = document.getElementById("search")
let btn = document.getElementById("submit")
let inputValue = document.getElementById("cityname")
let temp = document.getElementById("temp")
let desc = document.getElementById("desc")
let humidity = document.getElementById("humidity")
let wind = document.getElementById("wind")

let apiKey = "baeaa9dd4ba7c67a06d7a1473c1dc31d"

btn.addEventListener("click", () => {
    let cityName = searchBar.value
    console.log(cityName);
    let api = 'https://api.openweathermap.org/data/2.5/weather?q='+cityName+'&appid='+apiKey
    fetch(api)
        .then(res => res.json())
        .then(data => {
            let tempValue = data.main.temp
            let cityName = data.name
            let descValue = data.weather[0].description
            let humValue = data.main.humidity
            let windSpeedValue = data.wind.speed
            let windDegValue = data.wind.deg

            tempValue = Math.round(tempValue - 273.15);

            inputValue.innerHTML = cityName;
            temp.innerHTML = tempValue + " °C";
            desc.innerHTML = descValue;
            humidity.innerHTML = "<b>humidity : </b>" + humValue + " %"
            wind.innerHTML ="<b> Wind : </b>" + windSpeedValue + " km/h"

            console.log(data, tempValue, cityName, descValue);
        })
})
