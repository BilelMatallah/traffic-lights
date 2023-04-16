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
				red: " red-activated",
				orange: "",
				green: "",
				purple: ""})}></div>
			
			<div className= {"light orange" + (color.orange)}
			onClick={() => setColor({
				red: "",
				orange: " orange-activated",
				green: "",
				purple: ""})}></div>
			
			<div className= {"light green" + (color.green)}
			onClick={() => setColor({
				red: "",
				orange: "",
				green: " green-activated",
				purple: ""})}></div>	

			{show ? <div className={"light purple" + (color.purple)} 
			onClick={() => setColor({
				red: "",
				orange: "",
				green: "",
				purple: " purple-activated"})}></div> : <div></div>}

			<div>
				<button className="changer" onClick={()=>{

					if (!show){

						color.green === " green-activated"  //if green is activated
						?  setColor({
						red: "",
						orange: " orange-activated"  , //change and activade orange
						green: "",
						purple: ""
						})
						: color.orange === " orange-activated" //if orange is activated
						? setColor({
						red: " red-activated"  , //change and activate red
						orange: "",
						green: "",
						purple: ""
						})
						: color.red === " red-activated" //if red is activated
						? setColor({
						red: " "  , 
						orange: "",
						green: " green-activated", //change and activate green
						purple: ""
						})
						: setColor({
						red: "",
						orange: "",
						green: " green-activated",
						purple: ""
						  
						})} 
						
					else {

						color.green === " green-activated"  //if green is activated
						?  setColor({
						red: "",
						orange: " orange-activated"  , //change and activade orange
						green: "",
						purple: ""
						})
						: color.orange === " orange-activated" //if orange is activated
						? setColor({
						red: " red-activated"  , //change and activate red
						orange: "",
						green: "",
						purple: ""
						})
						: color.red === " red-activated" //if red is activated
						? setColor({
						red: ""  , 
						orange: "",
						green: "", 
						purple: " purple-activated" //change and activate green 
						})
						: color.purple === " purple-activated" //if purple is activated
						? setColor({
						red: ""  , 
						orange: "",
						green: " green-activated", //change and activate green
						purple: "" 
						})
						: setColor({
						red: "",
						orange: "",
						green: " green-activated",
						purple: ""
							  
						})}

				}}>Change color</button>
			</div>

			<div className="extra">
				<button onClick={handleClick}>Extra color</button>
			</div>
		</div>
	);
};

export default Home;
