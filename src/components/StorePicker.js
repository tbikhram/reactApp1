import React from 'react';
import { getFunName } from '../helpers'



class StorePicker extends React.Component {
	// constructor(){
	// 	super();
	// }
	gotToStore(event){
		event.preventDefault();
		console.log(" you changed the url")
		//first grab text from the box
		const storeId = this.storeInput.value;
		console.log(`Going to ${storeId}`);
		this.context.router.transitionTo(`/store/${storeId}`);
		//second we are going to transition from / to /store/:storeId
	}
	render(){
		return (

			<form className="store-selector" onSubmit={(e) => this.gotToStore(e)} >
				<h2>Please enter store</h2>
				<input type="text" required placeholder="Store Name"
				defaultValue={getFunName()} ref={(input) => {this.storeInput = input}} />
				<button type="submit" >Visit Store</button>
			</form>

			)
	}
}

StorePicker.contextTypes ={
	router: React.PropTypes.object
}
export default StorePicker;