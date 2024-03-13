const city_date = document.querySelector(".city_date");
const city_title = document.querySelector(".cities_title");
const country = document.querySelector('.country');
const date = document.querySelector(".date");

export default async function dateChange(obj, weather, day) {
    const today = new Date();
  
      let day_now = today.getDate();
      let month = today.getMonth();
      let year = today.getFullYear();
  
      date.textContent = `${day_now + day}/${month}/${year}`;
      city_date.textContent = `${day_now + day}/${month}/${year}`;
      let capital_name = obj
        .name()
        .split(" ")
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" ");
      city_title.textContent = `Hourly Tempratures of ${capital_name}`;
      country.textContent = `${weather.country} Cities`;
  }