document.addEventListener("DOMContentLoaded", function() {
    const apiKey = "60af0469c67566cbc9ed6a747b72bd23";
    const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

    const searchBox = document.querySelector(".search input");
    const searchButton = document.querySelector(".search button");
    const weatherIcon = document.querySelector(".weather-icon");

    async function checkWeather(cityName) {
        const response = await fetch(apiUrl + cityName + `&appid=${apiKey}`);
        const data = await response.json();

        console.log(data);

        document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
        document.querySelector(".wind-speed").innerHTML = data.wind.speed + " km/h";

        if (data.weather[0].main == "Clear") {
            weatherIcon.src = "assets/images/clear.png";
        } else if (data.weather[0].main == "Clouds") {
            weatherIcon.src = "assets/images/clouds.png";
        } else if (data.weather[0].main == "Drizzle") {
            weatherIcon.src = "assets/images/drizzle.png";
        } else if (data.weather[0].main == "Mist") {
            weatherIcon.src = "assets/images/mist.png";
        } else if (data.weather[0].main == "Rain") {
            weatherIcon.src = "assets/images/rain.png";
        } else if (data.weather[0].main == "Snow") {
            weatherIcon.src = "assets/images/snow.png";
        }

        document.querySelector(".below").style.display = "block";
    }

    searchButton.addEventListener("click", () => {
        checkWeather(searchBox.value);
    });
});
