import html from "html-literal";
import droneB from "../../assets/pexels-darrel-und.jpg";
export default (state) => html `
<h1 ID="wel">WELCOME!!</h1>
<div id="droney">
<img src='${droneB}' alt="Drone with bokeh effect" /></div>
<div class="glass">
  <div class="cards">
  <img src="https://images.pexels.com/photos/4771595/pexels-photo-4771595.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="green landscape image">
    <div class="therein">
    <h2>Check your location</h2>
  </div></div>

    <div class="cards">
    <img src="https://images.pexels.com/photos/4771595/pexels-photo-4771595.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="green landscape image">
      <div class = "therein">
      <h2>Ship</h2>
    </div></div>

    <div class="cards">
    <img src="https://images.pexels.com/photos/4771595/pexels-photo-4771595.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="green landscape image">
      <div class = "therein">
      <h2>Success</h2>
    </div></div>
<p class="story">With the state of the art technology in our drones, something that is different than our competitors is our ability to deliver quality products much faster,  more easily and more accessibly.  We are a world leader in drone technology, with new technology, innovative designs, and now including advanced ground delivery automatons.  In our latest drone research, we have developed a powerful system of high-performance drones that are easily able to perform high-level tasks with low latency and can deliver great results in a timely manner.  We have created a drone system that is highly flexible, versatile, scalable and has high accuracy in order to deliver quality that people can count on.

Here at  D.R.O.N.E (Deliverable Robotic Omni Networking Engineering) we pride ourselves on... </p>

<div id="clicky">Check Out Our Drones!</div>
`;