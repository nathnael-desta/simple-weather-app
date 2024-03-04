const ctx = document.getElementById("chart");
let days = {};

function grapher(latitude, longitude, day) {
  const temps = getDaily(latitude, longitude);
  /*
	const tempsProto = Object.getPrototypeOf(temps);
	console.log(tempsProto);
	*/
	console.log(temps);

	console.log(Object.keys(temps));

	for (const key in temps) {
		console.log(key)
	}
  
  new Chart(ctx, {
    type: "line",
    data: {
      labels: [
        "12AM",
        "1AM",
        "2AM",
        "3AM",
        "4AM",
        "5AM",
        "6AM",
        "7AM",
        "8AM",
        "9AM",
        "10AM",
        "11AM",
        "12PM",
        "1PM",
        "2PM",
        "3PM",
        "4PM",
        "5PM",
        "6PM",
        "7PM",
        "8PM",
        "9PM",
        "10PM",
        "11PM",
      ],
      datasets: [
        {
          label: "Temp in C°",
          data: temps,
          borderWidth: 1,
        },
      ],
    },
    options: {
      scales: {
        y: {
          beginAtZero: true,
        },
      },
    },
  });
}

grapher(9.0192, 38.7525, 0);

function getDaily(latitude, longitude) {
  const fetchWeatherApi = require("openmeteo").fetchWeatherApi;
  const params = {
    latitude: latitude,
    longitude: longitude,
    hourly: "temperature_2m",
  };
  const url = "https://api.open-meteo.com/v1/forecast";

  fetchWeatherApi(url, params)
    .then((responses) => {
      // Helper function to form time ranges
      const range = (start, stop, step) =>
        Array.from(
          { length: (stop - start) / step },
          (_, i) => start + i * step
        );
      // Process first location. Add a for-loop for multiple locations or weather models
      const response = responses[0];
      // Attributes for timezone and location
      const utcOffsetSeconds = response.utcOffsetSeconds();
      const timezone = response.timezone();
      const timezoneAbbreviation = response.timezoneAbbreviation();
      const latitude = response.latitude();
      const longitude = response.longitude();
      const hourly = response.hourly();
      // Note: The order of weather variables in the URL query and the indices below need to match!
      const weatherData = {
        hourly: {
          time: range(
            Number(hourly.time()),
            Number(hourly.timeEnd()),
            hourly.interval()
          ).map((t) => new Date((t + utcOffsetSeconds) * 1000)),
          temperature2m: hourly.variables(0).valuesArray(),
        },
      };
      // `weatherData` now contains a simple structure with arrays for datetime and weather data

      let day = [];
      let count = 0;
      let dayno = 0;
      for (let i = 0; i < weatherData.hourly.time.length; i++) {
        if (dayno >= 3) {
          break;
        }
        if (count < 24) {
          day.push(weatherData.hourly.temperature2m[i].toFixed(2));
          count++;
        } else {
          count = 0;
          dayno++;
          //days.push(day);
		  days[`${dayno}`] = day;
          day = [];
          day.push(weatherData.hourly.temperature2m[i].toFixed(2));
          count++;
        }
      }
    })
    .catch((error) => {
      console.error(error);
    });

  return days;
}
