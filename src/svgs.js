import c from "./Assets/Images/c.svg";
import city_svg_src from "./Assets/Images/weather_icons_rainy.png";

export default function svgCreater(
    link = "//cdn.weatherapi.com/weather/64x64/day/113.png"
) {
    const svg_container = document.querySelector(".svg-container");
    const unit = document.querySelector(".unit");
    const city_svgs = document.querySelectorAll(".city_svg_div");
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
