import React from "react";
import "./meny.css";

const Meny = () => {
	return (
		<section className="meny" id="meny">
			<h2>Meny</h2>
			<div className="lije">
				<h3 className="rätt">Entré</h3>
				<h4 className="maträtt">Svampisotto</h4>
				<p className="beskrivning">
					Risotto på carnaroliris och mortadellasvamp, serveras med parmesanost och plommontomat
				</p>
				<h3 className="rätt">Huvudrätt</h3>
				<h4 className="maträtt">Pizza à la Svenne</h4>
				<p className="beskrivning">
					Rykande het pizza med tomatsås, mozzarella och valfri påläggskombination från kockens skafferi och kylskåp
				</p>
				<h3 className="rätt">Dessert</h3>
				<h4 className="maträtt">Tiramisu</h4>
				<p className="beskrivning">
					Alkoholfri tiramisu, serveras med färska (typ) skogsbär
				</p>
			</div>
		</section>
	);
};

export default Meny;
