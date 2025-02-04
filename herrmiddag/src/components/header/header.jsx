import React from "react";
import "./header.css";

const Header = () => {
	return (
		<nav>
			<h1 className="title"><a href="">Herrmiddag</a></h1>
			<ul>
				<li><a href="">Meny</a></li>
				<li><a href="">Schema</a></li>
				<li><a href="">Kontakt</a></li>
			</ul>
		</nav>
	);
};

export default Header;
