import React from "react";
import "./hero.css";

const Hero = () => {
	return (
		<div className="hero" id="hero">
			<h2 className="välkomst">Välkommen!</h2>
			<p className="heroP">
				Du, å ärade kamrat, är varmt välkommen på herrmiddag i det Lovénska
				residenset den 22:a februari 2025
			</p>
			<p className="heroP">
				På denna hemsida finner du all information du behöver inför det kommande
				evenemanget!
			</p>
		</div>
	);
};

export default Hero;
