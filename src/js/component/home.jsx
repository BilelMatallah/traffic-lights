import React from "react";
import { useState } from "react";

//include images into your bundle


//create your first component
const Home = () => {

	const [ color, setColor] = useState ("")

	return (
		<div className="trafficLight container">
			<div onClick={() => setColor("red")} 
			className= {"light red" + (color === "red" ? " activado" : "")}></div>
			
			<div onClick={() => setColor("orange")} 
			className={"light orange" + (color === "orange" ? " activado" : "")}></div>
			
			
			<div onClick={() => setColor ("green")} 
			className={"light green" + (color === "green" ? " activado" : "")}></div>			
		</div>
	);
};

export default Home;
