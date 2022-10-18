import html from "html-literal";

export default (state) => html `<header>
    <span class="header"> ${state.header}</span>
    <span class="material-symbols-outlined">
account_circle
</span>

</header>`;