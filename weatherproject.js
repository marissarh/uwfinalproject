const searchBar = document.getElementById("searchBar");
const searchBtn = document.getElementById("searchBtn");

const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}`;
const apiKey = `b1ada7c4514578c6bdeff83b05cf9417`;

const apiLocation = `https://api.openweathermap.org/data/2.5/weather?&q=`;
async function weatherEl(city) {
  const response = await fetch(apiLocation + city + `&appid=${apiKey}`);

  let data = response.json();
  console.log(data);

  document.querySelector(".location").innerHTML = data.name;
  document.querySelector(".temperature").innerHTML =
    Math.round(data.main.temp) + "°F";
  document.querySelector(".weatherConditions").innerHTML =
    data.weather.description;
}
searchBtn.addEventListener("click", (event) => {
  event.preventDefault;
  weatherEl(searchBar.value);
});
