import React from "react";
import Header from "./Header";
import BlockEntity from "./BlockEntity";



class RootComponent extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			number: 5
		}
	}

	// custom function
	onChangeNumber(event) {
		console.log("I am firing, guy fox.", event);
	}

	render() {
		const elementArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

		return(
			<div>
				<Header/>
				{elementArray.map(function(element) {
					return <BlockEntity/>
				})}

				<input value={this.state.number} onChange={this.onChangeNumber}></input>
			</div>
		)
	}
}

// possibly self closing? input tags
// the input tag is a component and value is a prop for that component
export default RootComponent;

// there is a built in map function within es2015 .map