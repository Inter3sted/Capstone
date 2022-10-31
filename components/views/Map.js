import html from "html-literal";
import droIco from "../../assets/DroneIcon.png";

// document.body.onload = addElement;

// function addElement() {
//     // create a new div element
//     const newDiv = document.createElement("div");
//     // and give it some content, wrap in loop and use template literals
//     const newContent =
//         document.createTextNode("Hi there and greetings!");
//     // add the text node to the newly created div, insert callback function Wrap document.create text in loop all template literals
//     newDiv.appendChild(newContent);
//     // add the newly created element and its content into the DOM
//     const currentDiv = document.getElementById("div1");
//     document.body.insertBefore(newDiv, currentDiv);
// };
export default (state) => html `

<div id="map"></div>
<h2 class="legend">Legend</h2>
<div id="box3"></div>

<img src='${droIco}' alt="drone icon" id="droco">
<p id="drocoP">Main drone facility</p>
<h2 class="weath">16 Day Weather Forecast</h2>
<div id="box3"></div>
</h3>

<h3>${state.weather.city}</h3>
<table id="weather">
${state.safety.map(entry => {
return html`<tr><th>Temp</th><th>Chance of Precipitation</th><th>Description</th><th>Speed(in mph)</th></tr><td>${entry.temp}F</td><td>${entry.precipitation}%</td><td>${entry.descriptions}</td><td>${entry.speeds}</td>`
}).join("")}
</table>
`;

// index 0 is array within array, pass
// index 1 caption// for popup, in bind