import React from "react";
import { Link } from "react-router-dom";

export const MyProfile = () => {

	return (
		<div className="container">
			<h1>Here you have account details and myposts in brief</h1>
            <Link to = {"/"}><span>Home</span></Link>
		</div>
	);
};