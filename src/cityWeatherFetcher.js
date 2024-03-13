export default async function cityWeatherFetcher(name,day = 0) {
    try {
      let location = name.split(" ").join("-");
      let city_weather = await fetch(
        `https://api.weatherapi.com/v1/forecast.json?key=44b21494fc7747369bb71227242602&q=${location}&days=3`,
        {
          mode: "cors",
        }
      );
      let responseForcastJson = await city_weather.json();
  
      let date = new Date();
      let hour = date.getHours();
      let text;
  
      let temp_c = Math.round(responseForcastJson.forecast.forecastday[day].hour[hour].temp_c).toString();
      let condition = responseForcastJson.forecast.forecastday[day].hour[hour].condition.code;
  
      if (!city_weather.ok) {
        text = `27° C`;
        return {
          text,
          condition
        };
      } else {
        text = `${temp_c}° C`
        return {
          text,
          condition
        };
      }
    } catch (e) {
      console.error('the error is', e)
      return {
        text: `27° C`
      };
    }
  }