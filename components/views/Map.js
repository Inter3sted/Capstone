import html from "html-literal";

export default (state) => html `  <section id="Map">
<h2>Map Api</h2>
<div id="map"></div>
</section>
<h3>
    ${state.weather.city} is experiencing ${state.weather.description}. Temperature is ${state.weather.temp}F, and the wind speed is ${state.weather.speed} mph.
  </h3>
<!-- Figure out how to make the nav bar do a similar thing -->
<!-- https://www.eatthis.com/what-happens-body-drink-tea-every-day/ -->`;

// index 0 is array within array, pass
// index 1 caption
// for popup, in bind