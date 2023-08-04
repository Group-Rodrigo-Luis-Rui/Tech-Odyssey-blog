import React from "react";
import { Link } from "react-router-dom";
import backgroundimage from "../../img/backgroundimage.jpg";
import "../../styles/myprofile.css";

export const MyProfile = () => {

	return (
		<div className="backgroundProfile" style={{backgroundImage:'url(' + backgroundimage + ')'}}>
			<div className="container textBackgroundProfile">
				<h5>User Name </h5>
			</div>
		</div>
	);
};