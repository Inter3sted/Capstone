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
                    .get(
                        `https://api.openweathermap.org/data/2.5/weather?appid=${process.env.OPEN_WEATHER_MAP_API_KEY}&q=st%20louis`
                    )
                    .then(response => {
                        const kelvinToFahrenheit = kelvinTemp =>
                            Math.round((kelvinTemp - 273.15) * (9 / 5) + 32);

                        store.Map.weather = {};
                        store.Map.weather.city = response.data.name;
                        store.Map.weather.temp = kelvinToFahrenheit(
                            response.data.main.temp
                        );
                        store.Map.weather.feelsLike = kelvinToFahrenheit(
                            response.data.main.feels_like
                        );
                        store.Map.weather.description = response.data.weather[0].main;

                        console.log(response.data);
                        done();
                    })
                    .catch(err => console.log(err));
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