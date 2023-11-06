document.addEventListener("DOMContentLoaded", function() {
    const apiKey = "60af0469c67566cbc9ed6a747b72bd23";
    const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

    const searchBox = document.querySelector(".search input");
    const searchButton = document.querySelector(".search button");
    const weatherIcon = document.querySelector(".weather-icon");
    const backgroundColor = document.querySelector(".card");
    
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
            backgroundColor.style.background = "linear-gradient(to top, #fddb92 0%, #d1fdff 100%)";
        } else if (data.weather[0].main == "Clouds") {
            weatherIcon.src = "assets/images/clouds.png";
            backgroundColor.style.background = "linear-gradient(120deg, #a1c4fd 0%, #c2e9fb 100%)";
        } else if (data.weather[0].main == "Drizzle") {
            weatherIcon.src = "assets/images/drizzle.png";
            backgroundColor.style.background = "linear-gradient(to top, #fff1eb 0%, #ace0f9 100%)";
        } else if (data.weather[0].main == "Mist") {
            weatherIcon.src = "assets/images/mist.png";
            backGroundColor.style.background = "linear-gradient(45deg, #93a5cf 0%, #e4efe9 100%)";
        } else if (data.weather[0].main == "Rain") {
            weatherIcon.src = "assets/images/rain.png";
            backgroundColor.style.background = "linear-gradient(-225deg, #7085B6 0%, #87A7D9 50%, #DEF3F8 100%)";
        } else if (data.weather[0].main == "Snow") {
            weatherIcon.src = "assets/images/snow.png";
            backgroundColor.style.background = "linear-gradient(to top, #cfd9df 0%, #e2ebf0 100%)";
        }

        document.querySelector(".below").style.display = "block";
    }

    searchButton.addEventListener("click", () => {
        checkWeather(searchBox.value);
    });
});
