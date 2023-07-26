import React from "react";
import { Link } from "react-router-dom";

export const MyReadings = () => {

	return (
		<div className="container">
			<h1>Here you have a resume of my posts to read</h1>
            <Link to = {"/"}><span>Home</span></Link>
		</div>
	);
};