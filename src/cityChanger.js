import cityFetch from "./cityFetch";
import objects from "./weatherDescriptions";
import cityWeatherFetcher from "./cityWeatherFetcher";
import getWeather from "./weather_api";

const weatherDescriptions = objects().weatherDescriptions;
const city_container = document.querySelector(".city_container");

export default async function cityChanger(obj, weather, day, place) {
    try {
        let weather = await getWeather(place, day);
        let country_name = weather.country.split(" ")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
        if (country_name == 'United States Of America') {
            country_name = 'United States';
        } else if (country_name == 'Russia') {
            country_name = 'Russian Federation';
        }
      let cities = await cityFetch(country_name);
      let cities_div = city_container.children;
      let count = 0;
      let city_name;
      for (const city of cities_div) {
        city_name = cities[count];
        city.firstElementChild.textContent = city_name;
        let place = city_name.split(" ").join("-");
        if (place == 'Jima') {
            place = 'jimma';
        } else if (place == "Mekele") {
            place = "Mek'ele";
        }
        let weather = await getWeather(place, day);
        try {
          let obj = await cityWeatherFetcher(city_name, day);
          city.lastElementChild.firstElementChild.textContent = obj.text;
          city.lastElementChild.lastElementChild.firstElementChild.src = weatherDescriptions[weather.condition][weather.day_night];
  
        } catch (e) {
          city.lastElementChild.firstElementChild.textContent = `${21}° C`;
          console.error('its ok if you forget about this,', e)
        }
  
        count++;
      }
    } catch (e) {
        console.error("caught error", e);
    }
    
  }