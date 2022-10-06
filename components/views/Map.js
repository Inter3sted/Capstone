import html from "html-literal";

export default (state) => html `  <section id="Map">
<h2>Google Map Api</h2>
<div id="map"></div>
<p>Implement map api</p>
</section>
<h3>
    The weather in ${state.weather.city} is ${state.weather.description}. Temperature is ${state.weather.temp}F, and it feels like ${state.weather.feelsLike}F.
  </h3>
<!-- Figure out how to make the nav bar do a similar thing -->
<!-- https://www.eatthis.com/what-happens-body-drink-tea-every-day/ -->`;

// index 0 is array within array, pass
// index 1 caption
// for popup, in bind