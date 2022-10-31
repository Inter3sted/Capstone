import html from "html-literal";
import droA from "../../assets/pexels-tembela-bohle.jpg";
import droB from "../../assets/pexels-brett-saylesbw.jpg";
import droC from "../../assets/pexels-karl-gerber.jpg";
export default () => html `

<div class="glass">
  <div class="cards">
  <img src='${droB}' alt="image of a drone on a black case with an overhead light" class="dark">
    <div class="therein">
    <h2>Small</h2>
    <p>$4</p>
  </div></div>

  <div class="cards">
    <img src='${droA}' alt="A drone in the distance flying over trees with clouds in the background" class="dark">
      <div class = "therein">
      <h2>Large</h2>
      <p>$6</p>
    </div></div>

    <div class="cards">
    <img src='${droC}' alt="A close-up of a MAVIC drone" class="dark">
      <div class = "therein">
      <h2>Medium</h2>
      <p>$5</p>
    </div></div>

  </div>
    </div>
    </div>
  `;