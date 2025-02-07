import React from "react";
import { useRef } from "react";
import "./header.css";

const Header = () => {
	return (
		<nav>
			<h1 className="title" id="title">
				<a href="#hero">Herrmiddag</a>
			</h1>
			<ul className="links">
				<li>
					<a href="#meny">Meny</a>
				</li>
				<li>
					<a href="#schema">Schema</a>
				</li>
				<li>
					<a href="#kontakt">Kontakt</a>
				</li>
			</ul>
		</nav>
	);
};

export default Header;
