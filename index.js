import { Header, Nav, Main, Footer } from "./components";
import * as store from "./store";
import Navigo from "navigo";
import { capitalize } from "lodash";
import axios from "axios";
import dotenv from "dotenv"
import item from "./assets/pexels-spencer-davis-4771595.jpg"

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
async function afterRender(state) {
    if (state.view === "Map") {
        let mapboxgl = require("mapbox-gl/dist/mapbox-gl.js");

        mapboxgl.accessToken = `${process.env.MAPBOX_TOKEN}`;
        const map = new mapboxgl.Map({
            container: `map`,
            style: `mapbox://styles/mapbox/streets-v11`,
            center: [-86.78266047511858, 36.16525000567188],
            zoom: 10,
            projection: "globe"
        });
        map.on("load", () => {
            // Load an image from an external URL.
            map.loadImage(`${item}`, (error, image) => {
                if (error) throw error;

                // Add the image to the map style.
                map.addImage("case", image);

                // Add a data source containing one point feature.
                map.addSource("places", {
                    type: "geojson",
                    data: {
                        type: "FeatureCollection",
                        features: state.cases
                    }
                });

                map.addLayer({
                    id: "places",
                    type: "circle",
                    source: "places",
                    paint: {
                        "circle-color": "#4264fb",
                        "circle-radius": 6,
                        "circle-stroke-width": 2,
                        "circle-stroke-color": "#ffffff"
                    }
                });
            });
            // Create a popup, but don't add it to the map yet.
            const popup = new mapboxgl.Popup({
                closeButton: false,
                closeOnClick: false
            });

            map.on("mouseenter", "places", e => {
                // Change the cursor style as a UI indicator.
                map.getCanvas().style.cursor = "pointer";

                // Copy coordinates array.
                const coordinates = e.features[0].geometry.coordinates.slice();
                const description = e.features[0].properties.description;

                // Ensure that if the map is zoomed out such that multiple
                // copies of the feature are visible, the popup appears
                // over the copy being pointed to.
                while (Math.abs(e.lngLat.lng - coordinates[0]) > 180) {
                    coordinates[0] += e.lngLat.lng > coordinates[0] ? 360 : -360;
                }

                // Populate the popup and set its coordinates
                // based on the feature found.
                popup
                    .setLngLat(coordinates)
                    .setHTML(description)
                    .addTo(map);
            });

            map.on("mouseleave", "places", () => {
                map.getCanvas().style.cursor = "";
                popup.remove();
            });
        });
    };
};


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