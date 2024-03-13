import objects from "./weatherDescriptions";

let isoCountries = objects().isoCountries; 

export default async function cityFetch(country_name) {
    try {
      let country;
      if (isoCountries.hasOwnProperty(country_name)) {
        country = isoCountries[country_name];
      } else {
        country = "ET";
      }
      const response = await fetch(
        `https://api.api-ninjas.com/v1/city?country=${country}&max_population=1000000&limit=12`,
        {
          headers: {
            "X-Api-Key": "2YWvqd6ZqrsZU3mx1Or1XQ==jMW5CbQDju47ASVz",
          },
        }
      );
  
      if (!response.ok) {
        throw new Error("Network response was not OK");
      }
  
      const citiesjson = await response.json();
      let cities = [];
      for (let city of citiesjson) {
        cities.push(city.name);
      }
      return cities;
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }