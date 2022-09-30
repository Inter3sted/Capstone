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
        <label>
      Your email:
      <input type="email" name="email">
    </label>
        <label>
      Your message:
      <textarea name="message"></textarea>
    </label>
        <!-- your other form fields go here -->
        <button type="submit">Send</button>
    </form>
    </div>
`;