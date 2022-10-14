import html from "html-literal";

export default (state) => html `
<div id="map"></div>
<h2 class="legend">Legend</h2>
<h2 class="weath">Weather</h2>
<h3 id="weather">
    ${state.weather.city} | ${state.weather.description}. Temperature | ${state.weather.temp}F. Wind speed | ${state.weather.speed} mph.
  </h3>
`;

// index 0 is array within array, pass
// index 1 caption
// for popup, in bind