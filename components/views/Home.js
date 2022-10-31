import html from "html-literal";
// import droneB from "../../assets/pexels-darrel-und.jpg";
import droneA from "../../assets/pexels-matic-holobar.jpg";
import droneC from "../../assets/pexels-josh-sorenson.jpg";
import droneD from "../../assets/pexels-pixabay.jpg";
export default () => html `
<div id="box2"></div>
<h1 id="wel">D.R.O.N.E</h1>
<div id="box"></div>
<h4 id="under">Deliverable Robotic Omni Networking and Engineering</h4>

<!-- figure out why this breaks image code -->


<div class="glass2">
  <div class="cards">
    <div id="droneD">
  <img src='${droneD}' alt="green landscape image"></div>
    <div class="therein">
    <h2 class="font">Location</h2>
  </div></div>
  <p class="story">Here at  D.R.O.N.E (Deliverable Robotic Omni Networking Engineering) we pride ourselves on a wide array of technology at our disposal at a reasonable rate and efficient delivery times. Check your location with our map services and see if there's a drone depot near you. It's as easy as that!

</p>
    <div class="cards">
      <div id="droneA">
    <img src='${droneA}' alt="green landscape image"></div>
      <div class = "therein">
      <h2 class="font">Ship</h2>
    </div></div>
    <p class="story">With the state of the art technology in our drones, something that is different than our competitors is our ability to deliver quality products much faster,  more easily and more accessibly.
</p>
    <div class="cards">
      <div id="droneC">
    <img src='${droneC}' alt="green landscape image"></div>
      <div class = "therein">
      <h2 class="font">Success</h2>
    </div></div>
</div>
<p class="story">We are a world leader in drone technology, with new technology, innovative designs, and now including advanced ground delivery automatons.  In our latest drone research, we have developed a powerful system of high-performance drones that are easily able to perform high-level tasks with low latency and can deliver great results in a timely manner.  We have created a drone system that is highly flexible, versatile, scalable and has high accuracy in order to deliver quality that people can count on.

</p>
    <div id="droneBanner">Check Out Our Drones!</div>



`;