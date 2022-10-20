import html from "html-literal";


export default (links) => html `
<nav>
    <ul class="hidden--mobile nav-links">${links.map((el) =>`<li><a href="/${el.title}" title="${el.title}" data-navigo>${el.text} <i class= "${el.icon}"</i></a></li>`
)}
    </ul>
</nav>

`;