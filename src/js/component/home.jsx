import React from "react";

//include images into your bundle


//create your first component
const Home = () => {
	return (
		<div className="trafficLight container">
			<div className="light red"></div>
			<div className="light orange"></div>
			<div className="light green"></div>			
		</div>
	);
};

export default Home;
