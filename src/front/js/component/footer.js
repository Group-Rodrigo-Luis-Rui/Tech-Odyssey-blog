import React, { Component } from "react";
import "../../styles/footer.css";
import logo from "../../img/Tech-Odyssey-Logo.png";

export const Footer = () => (
	<footer>
		<div className="footer-content uppercase-footer ff-sans-cond letter-spacing-2">
			<div className="logo-space">
				<img src={logo} className="footer-logo"/>
			</div>	
			<p className="footer-text">&copy;2023-Tech Odyssey.All rights reserved</p>	
		</div>
	</footer>
);
