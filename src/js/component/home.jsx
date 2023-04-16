import React, { useState } from "react";


const Home = () => {
	//Conditional rendering
	const [show, setShow] = useState(false)

	const handleClick = () => {setShow(!show)}
	
	//Color selection
	const [color, setColor] = useState({
		red: "",
		orange: "",
		green: "",
		purple: ""
	});

	return (
		<div className="trafficLight container">
			
			<div className= {"light red" + (color.red)}
			onClick={() => setColor({
				red: " activado",
				orange: "",
				green: "",
				purple: ""})}></div>
			
			<div className= {"light orange" + (color.orange)}
			onClick={() => setColor({
				red: "",
				orange: " activado",
				green: "",
				purple: ""})}></div>
			
			<div className= {"light green" + (color.green)}
			onClick={() => setColor({
				red: "",
				orange: "",
				green: " activado",
				purple: ""})}></div>	

			{show && <div className={"light purple" + (color.purple)} 
			onClick={() => setColor({
				red: "",
				orange: "",
				green: "",
				purple: " activado"})}></div>}

			<div className="extra">
				<button onClick={handleClick}>Extra color</button>
			</div>
		</div>
	);
};

export default Home;
