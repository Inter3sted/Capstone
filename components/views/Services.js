import html from "html-literal";
import droA from "../../assets/pexels-tembela-bohle.jpg";
import droB from "../../assets/pexels-brett-saylesbw.jpg";

export default () => html `

<div class="glass">
  <div class="cards">

    <div class="therein">
    <h2>Small</h2>
    <p>$4</p>
  </div></div>

  <div class="cards">
    <img src='${droB}' alt="A drone in the distance flying over trees with clouds in the background" class="dark">
      <div class = "therein">
      <h2>Large</h2>
      <p>$6</p>
    </div></div>

    <div class="cards">
    <img src='${droA}' alt="A close-up of a MAVIC drone" class="dark">
      <div class = "therein">
      <h2>Medium</h2>
      <p>$5</p>
    </div></div>

  </div>
    </div>
    </div>
  `;