// Always need to specify where modules should be imported from, unlike exports
import { Header, Nav, Main, Footer } from "./components";
import * as store from "./store";
import Navigo from "navigo";
import { capitalize } from "lodash";
import axios from "axios";
import dotenv from "dotenv"
import DroneIco from "/assets/DroneIcon.png"

dotenv.config();
//
const router = new Navigo("/");
// This is so that the default view is the Home view
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
            center: [-90.247047, 38.636452],
            zoom: 6,
            projection: "globe"
        });
        map.on('load', () => {

            // Add a data source containing one point feature.
            map.addSource('places', {
                'type': 'geojson',
                'data': {
                    'type': 'FeatureCollection',
                    'features': state.cases
                }
            });
            map.addSource('point', {
                'type': 'geojson',
                'data': {
                    'type': 'FeatureCollection',
                    'features': [{
                        'type': 'Feature',
                        'geometry': {
                            'type': 'Point',
                            'coordinates': [-90.199402, 38.627003]
                        }
                    }]
                }
            });
            // Load an image from an external URL.
            map.loadImage(
                `${DroneIco}`,
                (error, image) => {
                    if (error) throw error;

                    // Add the image to the map style.
                    map.addImage('drone', image);
                    map.addLayer({
                        'id': 'points',
                        'type': 'symbol',
                        'source': 'point', // reference the data source
                        'layout': {
                            'icon-image': 'drone', // reference the image
                            'icon-size': 0.15
                        }
                    });
                    map.addLayer({
                        'id': 'places',
                        'type': 'circle',
                        'source': 'places',
                        'paint': {
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

            map.on('mouseenter', 'places', e => {
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
                        //     console.log(`store.map.weather[${i}] =  response.data.weather[i]`);
                        // }
                        // store.Map.weather = {};
                        // store.Map.forecast = response.data.list;
                        let list = response.data.list;
                        let safety = [];
                        for (let i = 0; i < list.length; i++) {
                            safety.push({
                                temp: list[i].temp.day,
                                precipitation: list[i].pop,
                                descriptions: list[i].weather[0].description,
                                speeds: list[i].speed,
                                icons: list[i].weather[0].icon
                            })

                        };
                        console.log(safety);

                        store.Map.safety = safety;
                        store.Map.weather.city = response.data.city.name;

                        console.log(list);

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
// adds callback structure that, when the URL matches whatever is given the /, the router or argument turns itself on and it uses lodash to capitalize whatever the corresponding state is
router.on({
        "/": () => render(),
        ":view": (params) => {
            let view = capitalize(params.data.view);
            render(store[view]);
        },
    })
    // resolve is at the end to use the client side's routing process
    .resolve();