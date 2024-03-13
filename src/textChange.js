import objects from "./weatherDescriptions";

const weatherDescriptions = objects().weatherDescriptions;
const svg_container = document.querySelector(".svg-container");

export default async function textChange(obj, weather, day) {
    obj.big_number.textContent = weather.temp_c;
      obj.feels_like.textContent = `feels like ${weather.feelslike_c}`;
      obj.place.textContent = `${weather.name}, ${weather.country}`;
      obj.humidity.textContent = `${weather.humidity}%`;
      obj.pressure.textContent = `${weather.pressure}mb`;
  
      let uvNum = weather.uv;
      if (uvNum < 3) {
        obj.uv.textContent = `${uvNum} L`;
      } else if (uvNum < 6) {
        obj.uv.textContent = `${uvNum} M`;
      } else if (uvNum < 8) {
        obj.uv.textContent = `${uvNum} H`;
      } else if (uvNum < 11) {
        obj.uv.textContent = `${uvNum} VH`;
      } else {
        obj.uv.textContent = `${uvNum} EH`;
      }
      obj.wind.textContent = `${weather.wind} km/hr`;
      obj.max.textContent = `${weather.max}`;
      obj.min.textContent = `${weather.min}`;
      obj.precipitation.textContent = `${weather.precipitation} mm`;
      obj.rain.textContent = `${weather.rain} %`;
  
      const mySvg = new Image();
      mySvg.classList.add("weather-svg");
      let imageSrc = await weatherDescriptions[weather.condition][weather.day_night];
      mySvg.src = imageSrc;
      svg_container.innerHTML = "";
      svg_container.appendChild(mySvg);
  }