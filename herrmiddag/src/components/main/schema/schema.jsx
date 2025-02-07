import React from "react";
import "./schema.css";

const Schema = () => {
	return (
		<section className="schema" id="schema">
			<h2>Schema</h2>
            <div className="line">
                <h3>18:00-18:30</h3>
                <h4>Ankomst & Mingel</h4>
                <p>Ni välkomnas hem till värden från och med 18:00, alkoholfritt bubbel kommer finnas på plats</p>
                <h3>18:30</h3>
                <h4>Entré & Kviss</h4>
                <p>Kvällens förrätt inmundigas i samband med en lättsam kviss med fint pris</p>
                <h3>19:00</h3>
                <h4>Huvudrätt</h4>
                <p>Evenemangets huvudrätt lagas och äts löpande mellan </p>
                <h3>20:00</h3>
                <h4>Dessert & Brädspel</h4>
                <p>Under resten av kvällen avnjuts efterrätten i samband med de brädspel sällskapet behagar</p>
            </div>
		</section>
	);
};

export default Schema;
