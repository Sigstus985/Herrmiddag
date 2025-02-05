import React from "react";
import "./meny.css";


const Meny = () => {
	return (
		<section className="meny" id="meny">
			<h2>Meny</h2>
            <div className="linje"></div>
			<h3 className="rätt">Förrätt</h3>
			<p className="maträtt">Svampisotto</p>
			<p className="beskrivning">Risotto på carnaroliris och mortadellasvamp, serveras med parmesan</p>
			<h3 className="rätt">Huvudrätt</h3>
			<p className="maträtt">Pizza à la Svenne</p>
			<p className="beskrivning">
				Rykande het pizza med tomatsås, mozzarella och valfri påläggskombination från kockens skafferi och kylskåp
			</p>
			<h3 className="rätt">Efterrätt</h3>
			<p className="maträtt">Tiramisu</p>
			<p className="beskrivning">Alkoholfri tiramisu, serveras med färska (typ) skogsbär</p>
		</section>
	);
};

export default Meny;