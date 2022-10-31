import html from "html-literal";
import * as views from "./views";
// Renders one view at a time, accesses the correlating view per state
export default (state) => html `
${views[state.view](state)}
`;