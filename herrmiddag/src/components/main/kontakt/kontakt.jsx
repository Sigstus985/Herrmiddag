import React from "react";
import "./kontakt.css";

const Kontakt = () => {
	return (
		<section className="kontakt" id="kontakt">
			<h2>Kontakt & Viktig Information</h2>
			<div className="line">
				<h3>Kontakt</h3>
				<p>
					Värden nås enklast via sin direktmeddelande på Instagram eller
					Discord, för brådskande ärenden är telefonnummret 076-714-94-71
				</p>
				<h3>Gällande dryck</h3>
				<p>
					På plats kommer alkoholfri dryck finnas tillgänglig, om dryck av
					berusande karaktär önskas är det <strong>varmt</strong> välkommet att
					medtaga det själv
				</p>
				<h3>Vid ankomst</h3>
				<p>Tillställningen kommer äga rum på Skarpnäcks Allé 62</p>
				<p>
					Då en grind blockerar ingången till innergården och värden kommer ha
					fullt upp i köket ombeds ni ta en{" "}
					<a
						href="https://drive.google.com/file/d/18D1oEcv6cZRWW_rHA_pDAETROdsBlR90/view?usp=sharing"
						target="blank"
					>
						mindre omväg
					</a>{" "}
					från tunnelbanan för att komma in bakvägen. Väl framme vid porten kan
					ni via koddosan ringa till värden och på så sätt släppas in.
				</p>
				<h3>Gällande brädspel</h3>
				<p>
					Värden har tillgång till ett bräd bibliotek av brädspel, men om gästen
					önskar medtaga
				</p>
				<h3>Kom uppklädd!</h3>
				<p>
					Det vore värden en ära om herrskappet ville närvara iklädda drip av
					det bohemiska och/eller falliska slaget
				</p>
			</div>
		</section>
	);
};

export default Kontakt;
