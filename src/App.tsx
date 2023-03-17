import * as React from "react";
import * as data from "../static/data.json";


interface DataItem {
    id: string; name: string; path: string
}



const App = () => {

	const runtimeData = import("./data.json")
		.then((data) => {
			return data;
		})
	
		console.log(runtimeData);
	const stuff = data.data;
	return (

		<div>
			{stuff.map((props) => {
				return (
					<img id={props.id} alt={props.name} src={props.path}/>
				)
			})}
		</div>
	)
}

export default App;
