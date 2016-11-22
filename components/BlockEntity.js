import React from "react";

// import {Component} from "react";
// default export of react is an object with a Component
// optionally, we can do a more specific import for just the Component

const styling = {
	backgroundColor: "#ff00ff",
	height: 25,
	border: "1px solid black",
	width: 25
}

// fancy object, can add properties to the class if i want to and
// those properties can be functions
class BlockEntity extends React.Component {
	render() {
		return (
			<div style={styling}></div>
		);
	}
}


// different levels of exporting

export default BlockEntity;