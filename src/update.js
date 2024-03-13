import getWeather from "./weather_api";
import grapher from "./print";
import { destroy } from "./print";

import cityChanger from "./cityChanger";
import dateChange from "./dateChange";
import textChange from "./textChange";

const picker = document.querySelector('.picked');
const paths = document.querySelectorAll('path');
const uv_path = document.querySelector('.uv path');
const max_path = document.querySelector('.max path');
const min_path = document.querySelector('.min path');
const precipitation_path = document.querySelector('.precipitation path');
const rain_paths = document.querySelectorAll('.rain path');



export default async function update(obj, day = 0) {
  try {
    let place = obj.name();
    let weather = await getWeather(place, day);
    let day_night = weather.day_night; 
    textChange(obj, weather, day);
    dateChange(obj, weather, day);
    cityChanger(obj, weather,day, place);
    colorChanger(weather)
    destroy();
    grapher(weather.latitude, weather.longitude, day, day_night);
    console.log("actual day and night", day_night)


    return day_night;
  } catch (e) {
    console.error("caught error", e);
  }
}

function colorChanger(weather) {
  let pickers = document.querySelectorAll('.picked');
  pickers.forEach(picker => {
    if (weather.day_night == 1) {
      picker.classList.remove('picked');
      picker.classList.add('picked_night');
    }
  })



  paths.forEach(svg => {
    if (weather.day_night == 1) {
      svg.style.stroke = 'rgb(165, 134, 252)';
      uv_path.style.fill =  'rgb(165, 134, 252)';
      max_path.style.fill =  'rgb(165, 134, 252)';
      min_path.style.fill =  'rgb(165, 134, 252)';
      precipitation_path.style.fill =  'rgb(165, 134, 252)';
      
    } else {
      svg.style.stroke = 'rgb(250,180,81)';
      uv_path.style.fill =  'rgb(250,180,81)';
      max_path.style.fill =  'rgb(250,180,81)';
      min_path.style.fill =  'rgb(250,180,81)';
      precipitation_path.style.fill =  'rgb(250,180,81)';
      
    }
    
  })

  rain_paths.forEach(path => {
    if (weather.day_night == 1) {
      path.style.fill =  'rgb(165, 134, 252)';
    } else {
      path.style.fill =  'rgb(250,180,81)'; 
    }
  })
  
}