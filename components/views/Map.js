import html from "html-literal";
import droIco from "../../assets/DroneIcon.png";
export default (state) => html `
<div id="map"></div>
<h2 class="legend">Legend</h2>
<div id="box3"></div>

<img src='${droIco}' alt="drone icon" id="droco">
<p id="drocoP">Main drone facility</p>
<h2 class="weath">Weather</h2>
<div id="box3"></div>
<h3 id="weather">
    ${state.weather.city} | ${state.weather.description}. Temperature | ${state.weather.temp}F. Wind speed | ${state.weather.speed} mph.
  </h3>
<h2 id="weatherCont">
${state.weather.city}
${state.weather.temp}
</h2>
`;

// index 0 is array within array, pass
// index 1 caption
// for popup, in bind