import html from "html-literal";

export default (state) => html `

<h1 class="faq">Frequently Asked Questions</h1>
<h3>Question 1</h3>
<p class="faqp">lorem</p>
<h3>Question 2</h3>
<p class="faqp">lorem</p>
<h3>Question 3</h3>
<p class="faqp">lorem</p>
<h3>Still have issues? Contact us:</h3>
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