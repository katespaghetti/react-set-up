import newModule from "./exampleModule";

// react-dom has to have react package loaded before it
import React from "react";
import reactDom from "react-dom";
import Header from "./header.js";

console.log("baby's second react code");

// take the components and render them into the page
// we use react-dom to render

reactDom.render(<Header/>, document.body);