import getWeather from "./weather_api";
import svg from "./Assets/Images/sun_png.png";
import c from "./Assets/Images/c.svg";
import city_svg_src from "./Assets/Images/weather_icons_rainy.png";
import cloud_day from "./Assets/Images/cloud_day.png";
import cloud_night from "./Assets/Images/cloud_night.png";
import day from "./Assets/Images/day.png";
import day_lightning_rain from "./Assets/Images/day_lightning_rain.png";
import mist_day from "./Assets/Images/mist_day.png";
import mist_night from "./Assets/Images/mist_night.png";
import night from "./Assets/Images/night.png";
import night_lightning_rain from "./Assets/Images/night_lightning_rain.png";
import rain_cloud_day from "./Assets/Images/rain_cloud_day.png";
import rain_cloud_night from "./Assets/Images/rain_cloud_night.png";
import snow_cloud_day from "./Assets/Images/snow_cloud_day.png";
import snow_cloud_night from "./Assets/Images/snow_cloud_night.png";
import snow_day_night from "./Assets/Images/snow_day_night.png";

const svg_container = document.querySelector('.svg-container');

export default async function update(obj, day = 0) {
    let place = obj.name()
    let weather = await getWeather(place, day);
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
    };
    let c = document.createElement('span')
    c.innerHTML = "C"

    obj.wind.textContent = `${weather.wind} km/hr`;
    obj.max.textContent = `${weather.max}`;
    obj.min.textContent = `${weather.min}`;
    obj.precipitation.textContent = `${weather.precipitation} mm`;
    obj.rain.textContent = `${weather.rain} %`;

    const mySvg = new Image();
    mySvg.classList.add("weather-svg");
    let imageSrc = await weatherDescriptions[weather.condition][0];
    console.log("day svg", svg);
    console.log("day svg", imageSrc);
    mySvg.src = imageSrc;
    svg_container.innerHTML = '';
    svg_container.appendChild(mySvg);
} 


export const weatherDescriptions = {
    1000: [day, night],
    1003: [cloud_day, cloud_night],
    1006: [cloud_day, cloud_night],
    1009: [cloud_day, cloud_night],
    1030: [mist_day, mist_night],
    1035: [mist_day, mist_night],
    1047: [mist_day, mist_night],
    1063: [rain_cloud_day,rain_cloud_night],
    1066: [snow_day_night, snow_day_night],
    1069: [snow_day_night, snow_day_night],
    1072: [rain_cloud_day,rain_cloud_night],
    1087: [day_lightning_rain,night_lightning_rain],
    1114: [snow_day_night, snow_day_night],
    1117: [snow_day_night, snow_day_night],
    1135: [mist_day,mist_night],
    1147: [mist_day,mist_night],
    1150: [rain_cloud_day,rain_cloud_night],
    1153: [rain_cloud_day,rain_cloud_night],
    1168: [rain_cloud_day,rain_cloud_night],
    1171: [rain_cloud_day,rain_cloud_night],
    1180: [rain_cloud_day,rain_cloud_night],
    1183: [rain_cloud_day,rain_cloud_night],
    1186: [rain_cloud_day,rain_cloud_night],
    1189: [rain_cloud_day.rain_cloud_night],
    1192: [rain_cloud_day,rain_cloud_night],
    1195: [rain_cloud_day,rain_cloud_night],
    1198: [rain_cloud_day, rain_cloud_night],
    1201: [rain_cloud_day, rain_cloud_night],
    1204: [snow_cloud_day, snow_cloud_night],
    1207: [snow_cloud_day, snow_cloud_night],
    1210: [snow_day_night, snow_day_night],
    1213: [snow_day_night, snow_day_night],
    1216: [snow_day_night, snow_day_night],
    1219: [snow_day_night, snow_day_night],
    1222: [snow_day_night, snow_day_night],
    1225: [snow_day_night, snow_day_night],
    1237: [snow_day_night, snow_day_night],
    1240: [rain_cloud_day, rain_cloud_night],
    1243: [rain_cloud_day, rain_cloud_night],
    1246: [rain_cloud_day, rain_cloud_night],
    1249: [snow_day_night, snow_day_night],
    1252: [snow_cloud_day,snow_cloud_night],
    1255: [snow_cloud_day, snow_cloud_night],
    1258: [snow_day_night, snow_day_night], 
    1261: [snow_day_night, snow_day_night],
    1264: [snow_day_night, snow_day_night],
    1273: [day_lightning_rain, night_lightning_rain],
    1276: [day_lightning_rain, night_lightning_rain],
    1279: [day_lightning_rain, night_lightning_rain],
    1282: [day_lightning_rain, night_lightning_rain]
  };