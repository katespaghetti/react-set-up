import React from "react";

const styling = {
	height: 100,
	width: '100%',
	padding: 0,
	backgroundColor: 'black',
	color: 'white',
	padding: 10
};

// creating a new class that inherits from React which is the "react" component
// think of the class as a super object
class header extends React.Component {
	// there is one particular function that has to be defined for a react component
	// every react component has a render
	render() {
		// render is a function of the header class
		// this function needs to return something, what is it rendering?
		return (
			// jsx goes here
			<div style={styling}>
				HEADER
			</div>
		)
	}	
}

// when we say "class header", that creates a variable that we can export
export default header;