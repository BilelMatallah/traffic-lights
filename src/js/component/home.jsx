import React, { useEffect } from "react";
import { useState } from "react";
import Purple from "./purple.jsx";

//include images into your bundle


//create your first component
const Home = () => {

	const [ extra, setExtra ] = useState(
		<div></div>
	)

	const [show, setShow] = useState(false)

	const handleClick = () => {
		show ? setExtra(<div className="light purple"></div>) : setExtra(<div></div>)
		setShow(!show);
		console.log(show)
	}
	
	const [ color, setColor] = useState ("")


	return (
		<div className="trafficLight container">
			<div onClick={() => setColor("red")} 
			className= {"light red" + (color === "red" ? " activado" : "")}></div>
			
			<div onClick={() => setColor("orange")} 
			className={"light orange" + (color === "orange" ? " activado" : "")}></div>
			
			<div onClick={() => setColor ("green")} 
			className={"light green" + (color === "green" ? " activado" : "")}></div>	

			{extra}

			<div className="buttondiv">
				<button onClick={handleClick}>Purple</button>
			</div>
		</div>
	);
};

export default Home;
