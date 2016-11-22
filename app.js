// this file is a module
import newModule from "./exampleModule";

// react-dom has to have react package loaded before it
import React from "react";
import reactDom from "react-dom";
import RootComponent from "./components/RootComponent.js";

// just the act of importing these will add them as style tags into the page
// CSS
import "./baseStyles.css";
// SCSS
import "./baseStyles.scss";


// the entroy point is going to take my root component and render it into the page
reactDom.render(<RootComponent />, document.body);