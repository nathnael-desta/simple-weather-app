import "./style.css";
import svgCreater from "./svgs";
import update from "./update";

svgCreater();document.querySelector('.big');

const search = document.querySelector('.search');
const search_svg = document.querySelector('.search-svg');
const big_number = document.querySelector('.big_num');
const feels_like = document.querySelector('.feels');
const place = document.querySelector('.place');
const humidity = document.querySelector('.humidity .number');
const pressure = document.querySelector('.pressure .number');
const uv = document.querySelector('.uv .number');
const wind = document.querySelector('.wind .number');
const max = document.querySelector('.maxNum');
const min = document.querySelector('.minNum');
const precipitation = document.querySelector('.precipitation .number');
const rain = document.querySelector('.rain .number');
const today = document.querySelector('.today');
const tommorow = document.querySelector('.tomorrow');
const two_days = document.querySelector('.two-days');

const divObj = {
    big_number,
    feels_like,
    place,
    humidity,
    pressure,
    uv,
    wind,
    max,
    min,
    precipitation,
    rain,
    name : () => {
        if (search.value == "") {
            return "addis ababa";
        } else {
            return search.value
        }
    }
}

search.addEventListener('keydown', async (event) => {
    let name = search.value;
    if (event.keyCode === 13) {
        update(divObj);
    }
})

search_svg.addEventListener('click', async () => {
    let name = search.value
    update(divObj);
})

today.addEventListener('click', () => {
    if (!today.classList.contains('picked')){
        today.classList.add('picked');
        tommorow.classList.remove('picked');
        two_days.classList.remove('picked');
        update(divObj, 0);
    }
})

tommorow.addEventListener('click', () => {
    if (!tommorow.classList.contains('picked')){
        today.classList.remove('picked');
        tommorow.classList.add('picked');
        two_days.classList.remove('picked');
        update(divObj, 1);
    }
})

two_days.addEventListener('click', () => {
    if (!two_days.classList.contains('picked')){
        today.classList.remove('picked');
        tommorow.classList.remove('picked');
        two_days.classList.add('picked');
        update(divObj, 2);
    }
})



