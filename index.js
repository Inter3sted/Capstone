import { Header, Nav, Main, Footer } from "./components";
import * as store from "./store";
import Navigo from "navigo";
import { capitalize } from "lodash";
import axios from "axios";
import dotenv from "dotenv"


dotenv.config();

const router = new Navigo("/");

function render(state = store.Home) {
    document.querySelector("#root").innerHTML = `
    ${Header(state)}
    ${Nav(store.Links)}
    ${Main(state)}
    ${Footer()}
    `;
    afterRender(state);

    router.updatePageLinks();
}

// add menu toggle to bars icon in nav bar
function afterRender(state) {
    document.querySelector(".fa-bars").addEventListener("click", () => {
        document.querySelector("nav > ul").classList.toggle("hidden--mobile");
    });
}

router.hooks({
    before: (done, params) => {
        const view =
            params && params.data && params.data.view ?
            capitalize(params.data.view) :
            "Home";

        // Add a switch case statement to handle multiple routes
        switch (view) {
            case "Map":
                axios
                    .get(`https://pro.openweathermap.org/data/2.5/forecast/daily?lat=38.627003&lon=-90.199402&cnt=16&appid=${process.env.OPEN_WEATHER_MAP_API_KEY}&units=imperial`)
                    .then(response => {
                        store.Map.weather = {};
                        store.Map.weather.city = response.data.city.name;
                        store.Map.weather.description = response.data.list[0].weather[0].description;
                        store.Map.weather.temp = Math.round(response.data.list[0].temp.day);
                        store.Map.weather.speed = response.data.list[0].speed;
                        console.log(response.data);
                        done();
                    })
                    .catch((err) => {
                        console.log(err);
                        done();
                    });
                break;
            default:
                done();
        }
    }
});
router.on({
        "/": () => render(),
        ":view": (params) => {
            let view = capitalize(params.data.view);
            render(store[view]);
        },
    })
    .resolve();

function togglePopup() {
    document.getElementById("popup-1").classList.toggle("active");
}