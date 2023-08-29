import React, { Component } from "react";
import "../../styles/footer.css";
import logo from "../../img/Tech Odyssey Logo1.png";
import geekslogo from "../../img/4geekslogo.png";

export const Footer = () => (
	<footer>
		<div className="footer-content uppercase-footer ff-sans-cond letter-spacing-2">
			<div className="logo-space">
				<img src={logo} className="footer-logo"/>
			</div>	
			<p className="footer-text">&copy;2023-Tech Odyssey.All rights reserved</p>
			
		</div>
		<div className="bellow-footer">
			<p className="aux-footer ff-sans-cond letter-spacing-2">Sponsored by &copy;<img src={geekslogo} className="geeklogo"/></p>
		</div>
	</footer>
);
