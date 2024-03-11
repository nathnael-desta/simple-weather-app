import svg from "./Assets/Images/sun_png.png";
import c from "./Assets/Images/c.svg";
import city_svg_src from "./Assets/Images/weather_icons_rainy.png";
import cloud_day from "./Assets/weather/cloud_day.png";
import cloud_night from "./Assets/weather/cloud_night.png";
import day from "./Assets/weather/day.png";
import day_lightning_rain from "./Assets/weather/day_lightning_rain.png";
import mist_day from "./Assets/weather/mist_day.png";
import mist_night from "./Assets/weather/mist_night.png";
import night from "./Assets/weather/night.png";
import night_lightning_rain from "./Assets/weather/night_lightning_rain.png";
import rain_cloud_day from "./Assets/weather/rain_cloud_day.png";
import rain_cloud_night from "./Assets/weather/rain_cloud_night.png";
import snow_cloud_day from "./Assets/weather/snow_cloud_day.png";
import snow_cloud_night from "./Assets/weather/snow_cloud_night.png";
import snow_day_night from "./Assets/weather/snow_day_night.png";
import getWeather from "./weather_api";

export default function svgCreater(
    link = "//cdn.weatherapi.com/weather/64x64/day/113.png"
) {
    const svg_container = document.querySelector(".svg-container");
    const unit = document.querySelector(".unit");
    const city_svgs = document.querySelectorAll(".city_svg_div");

    // const mySvg = new Image();
    // mySvg.classList.add("weather-svg");
    // // let imageSrc = weatherDescriptions[parseInt(getWeather().condition)];
    // // mySvg.src = weatherDescriptions[parseInt(getWeather().condition)];
    // svg_container.appendChild(mySvg);

    const cSvg = new Image();
    cSvg.src = c;
    cSvg.classList.add("c");
    unit.appendChild(cSvg);

    city_svgs.forEach((city_svg_div) => {
        let city_svg = new Image();
        city_svg.src = city_svg_src;
        city_svg.classList.add("city-svg");
        city_svg_div.appendChild(city_svg);
    });
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




  // let weatherSvgs = {
//     "cloud day": cloud_day,
//     "cloud night": cloud_night,
//     day: day,
//     "day lightning rain": day_lightning_rain,
//     "mist day": mist_day,
//     "mist night": mist_night,
//     night: night,
//     "night lightning rain": night_lightning_rain,
//     "rain cloud day": rain_cloud_day,
//     "rain cloud night": rain_cloud_night,
//     "snow cloud day": snow_cloud_day,
//     "snow cloud night": snow_cloud_night,
//     "snow day": snow_day_night,
//     "snow night": snow_day_night,
// };