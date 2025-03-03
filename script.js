async function fetchdata() {
  const place = document.getElementById("country").value;
  const apiKey = "1d6d0718588055871f6aca6639cdea3f";
  const apiurl = `https://api.openweathermap.org/data/2.5/weather?q=${place}&appid=${apiKey}`;

  try {
    const response = await fetch(apiurl);
    if (!response.ok) {
      throw new Error("Couldn't fetch the Weather");
    }

    const data = await response.json();
    console.log(data);

    const {
      name: country,
      main: { temp: temperature, humidity },
      weather: [{ main: atmosphere }],
    } = data;
    
    document.getElementById("countryname").textContent =  country;
    document.getElementById("temperature").textContent =
   (parseInt(temperature) - 273) + "°C";
    document.getElementById("atmosphere").textContent =
      atmosphere;
    document.getElementById("humidity").textContent ="Humidity: "+
     parseInt(humidity) + "%";

    if (atmosphere === "Clear sky") {
      emoji.textContent = "☀️";
    } else if (atmosphere === "Few clouds") {
      emoji.textContent = "🌤️";
    } else if (atmosphere === "Overcast clouds") {
      emoji.textContent = "⛅";
    } else if (atmosphere === "Drizzle") {
      emoji.textContent = "🌦️";
    } else if (atmosphere === "Rain") {
      emoji.textContent = "☔";
    } else if (atmosphere === "Shower rain") {
      emoji.textContent = "🌧️";
    } else if (atmosphere === "Thunderstorm") {
      emoji.textContent = "⛈️";
    } else if (atmosphere === "Snow") {
      emoji.textContent = "❄️";
    } else if (atmosphere === "Mist") {
      emoji.textContent = "🍃";
    } else {
      emoji.textContent = "🌆";
    }


    document.querySelector('.contents').style.display='block';  }
     catch (error) {
    console.error(error);
  }
}
