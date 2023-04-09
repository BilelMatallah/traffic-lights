import React, { useEffect } from "react";
import { useState } from "react";
import Purple from "./purple.jsx";



const Home = () => {

	//Display an extra color
	const [ extra, setExtra ] = useState(<div></div>)

	//Conditional rendering
	const [show, setShow] = useState(false)

	const handleClick = () => {setShow(!show)}
	
	//Color selection
	const [ color, setColor] = useState ("")


	return (
		<div className="trafficLight container">
			<div onClick={() => setColor("red")} 
			className= {"light red" + (color === "red" ? " activado" : "")}></div>
			
			<div onClick={() => setColor("orange")} 
			className={"light orange" + (color === "orange" ? " activado" : "")}></div>
			
			<div onClick={() => setColor ("green")} 
			className={"light green" + (color === "green" ? " activado" : "")}></div>	

			{show ? <div className="light purple"></div> : <div></div>}

			<div className="buttondiv">
				<button onClick={handleClick}>Extra color</button>
			</div>
		</div>
	);
};

export default Home;
