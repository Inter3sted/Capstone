import html from "html-literal";
// The view of the help page imports the html and exports state into the view the page sees as a template literal
// There can only be one default export
export default (state) => html `

<h1 class="faq">Frequently Asked Questions</h1>
<h3 class="help">How does it work?</h3>
<p class="faqp">We utilize the latest in drone technology, both in the air and ground, to deliver your products to you in a safe and timely manner.Companies use drone delivery to save money, speed up deliveries and provide better service to their customers. Essentially, this innovative tech will revolutionize the way we interact with technology and the world around us.</p>
<h3 class="help">Why haven't I received my delivery?</h3>
<p class="faqp">Packages can be lost during shipping due to misidentification, poor conditions, and many other reasons. If you look at the map section you should be able to see the weather for the next few days (which determines if we use the air or ground units to deliver, and may extend receiving dates).</p>
<h3 class="help">Why is my payment not going through?</h3>
<p class="faqp">There could be an issue with your bank, the card itself, our checkout feature not operating and many other things. If you'd like to contact us, we can provide any assistance from our end and work with you to find out a solution.</p>
<h3 class="help">Still have issues? Contact us:</h3>
<div class="forms">
<form action="https://formspree.io/f/xjvzwbbp" method="POST">
<label for="full-name">Full Name</label>
    <input type="text" name="name" id="full-name" placeholder="First and Last" required="">
    <label for="email-address">Email Address</label>
    <input type="email" name="_replyto" id="email-address" placeholder="email@domain.com" required="">
    <label for="message">Message</label>
    <textarea rows="5" name="message" id="message" placeholder="Type your message here." required=""></textarea>
    <input type="hidden" name="_subject" id="email-subject" value="Contact Form Submission">
  </fieldset>
  <input type="submit" value="Submit">
    </form>
    </div>

`;