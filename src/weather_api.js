export default async function getWeather(place , day = 0) {
    try {
        let location = place.split(" ").join("-");
        let responseForcast = await fetch(
            `https://api.weatherapi.com/v1/forecast.json?key=44b21494fc7747369bb71227242602&q=${location}&days=3`, {
                mode: 'cors'
            }
        );
        if (!responseForcast.ok) {
            console.error('fetching error', response)
        }

        let responseForcastJson = await responseForcast.json();

        const date = new Date();
        const hour = date.getHours();

        let temp_c = Math.round(responseForcastJson.forecast.forecastday[day].hour[hour].temp_c).toString();
        let feelslike_c = Math.round(responseForcastJson.forecast.forecastday[day].hour[hour].feelslike_c).toString();
        let name = responseForcastJson.location.name;
        let country = responseForcastJson.location.country;
        let humidity = responseForcastJson.forecast.forecastday[day].hour[hour].humidity;
        let pressure = responseForcastJson.forecast.forecastday[day].hour[hour].pressure_mb;
        let uv = responseForcastJson.forecast.forecastday[day].hour[hour].uv;
        let wind = responseForcastJson.forecast.forecastday[day].hour[hour].wind_kph;
        let max = Math.round(responseForcastJson.forecast.forecastday[day].day.maxtemp_c);
        let min = Math.round(responseForcastJson.forecast.forecastday[day].day.mintemp_c);
        let precipitation = responseForcastJson.forecast.forecastday[day].hour[hour].precip_mm;
        let rain = responseForcastJson.forecast.forecastday[day].day.daily_chance_of_rain;
        let condition = responseForcastJson.forecast.forecastday[day].hour[hour].condition.code;
        let latitude = responseForcastJson.location.lat;
        let longitude = responseForcastJson.location.lon;
        let local_hour = Number.parseFloat(responseForcastJson.location.localtime.split(" ")[1].split(":")[0]);
        let day_night;
        if (local_hour < 18 && local_hour > 6) {
            day_night = 0;
        } else {
            day_night = 1;
        }
        

        return {
            responseForcastJson,
            temp_c,
            feelslike_c,
            name,
            country,
            humidity,
            pressure,
            uv,
            wind,
            max,
            min,
            precipitation,
            rain,
            condition,
            latitude,
            longitude,
            day_night,
            local_hour
        }
    } catch (e) {
        console.error("the error is ", e);
    }
}