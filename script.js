const apiKey = "a8b4c44fa3dc977ae8e71119ba3fafa4";
const apiUrl =
  "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchButton = document.querySelector(".search button");

const weatherIcon = document.querySelector(".weather-icon");
const backGround = document.querySelector(".card");

async function checkWeather(city) {
  const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
  let data = await response.json();

  console.log(data);
  document.querySelector(".city").innerHTML = data.name;
  document.querySelector(".wind").innerHTML =
    Math.round(data.wind.speed) + "km/hr";
  document.querySelector(".temp").innerHTML = data.main.temp + "°C";
  document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
  document.querySelector(".position").innerHTML = data.weather[0].main;

  switch (data.weather[0].main) {
    case "Clear":
      weatherIcon.src = "assets/clear.png";
      backGround.style.background =
        "linear-gradient(90deg, #FDBB2D 0%, #22C1C3 100%)";
      break;

    case "Clouds":
      weatherIcon.src = "assets/clouds.png";
      backGround.style.background =
        "linear-gradient(to bottom, rgba(255,255,255,0.15) 0%, rgba(0,0,0,0.15) 100%), radial-gradient(at top center, rgba(255,255,255,0.40) 0%, rgba(0,0,0,0.40) 120%) #989898";
      break;

    case "Rain":
      weatherIcon.src = "assets/rain.png";
      backGround.style.background =
        "linear-gradient(0deg, #c2c2c2 0%, #172525 100%)";
      break;

    case "Mist":
      weatherIcon.src = "assets/mist.png";
      backGround.style.background ="radial-gradient(at top center, rgba(255,255,255,0.03) 0%, rgba(0,0,0,0.03) 100%), linear-gradient(to top, rgba(255,255,255,0.1) 0%, rgba(143,152,157,0.60) 100%)";
      backGround.style.background="blend-mode: normal, multiply";
      break;

    case "Snow":
      weatherIcon.src = "assets/snow.png";
      backGround.style.background =
        "linear-gradient(0deg, #c2c2c2 0%, #172525 100%)";
      break;

    case "Drizzle":
      weatherIcon.src = "assets/drizzle.png";
      backGround.style.background =
        "linear-gradient(0deg, #c2c2c2 0%, #172525 100%)";
      break;

    case "Haze":
      weatherIcon.src = "assets/haze.png";
      backGround.style.background =
        "linear-gradient(to top, #cfd9df 0%, #e2ebf0 100%)";

      break;

    default:
      break;
  }
}

searchButton.addEventListener("click", () => {
  checkWeather(searchBox.value);
});
