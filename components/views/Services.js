import html from "html-literal";
import droA from "../../assets/pexels-tembela-bohle.jpg"
export default (state) => html `

<div class="glass">
  <div class="cards">
  <img src='${droA}' alt="dark drone" class="dark">
    <div class="therein">
    <h2>Small</h2>
    <p>$4</p>
  </div></div>

    <div class="cards">
    <img src='${droA}' alt="dark drone" class="dark">
      <div class = "therein">
      <h2>Medium</h2>
      <p>$5</p>
    </div></div>

    <div class="cards">
    <img src='${droA}' alt="dark drone" class="dark">
      <div class = "therein">
      <h2>Large</h2>
      <p>$6</p>
    </div></div>

  </div>
    </div>
    </div>
  `;