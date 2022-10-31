import html from "html-literal";
// This is so that every section of the site has the exact same view at the top regardless of the state change
// constructing an HTML list of items from the array in Store
//  - .map formats the array elements into html
//      and constructs a new array from the results
//  - .join joins the elements of the new array into one long string
//  - data-navigo is a switch that allows Navigo to handle our page routing
export default (links) => html `
<nav>
    <ul class="hidden--mobile nav-links">${links.map((el) =>`<li><a href="/${el.title}" title="${el.title}" data-navigo>${el.text}</a></li>`
)}
    </ul>
</nav>
`;