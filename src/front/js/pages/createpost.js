import React from "react";
import { Link } from "react-router-dom";

export const Createpost = () => {

	return (
		<div className="container">
			<h1>Here you create a post</h1>
            <Link to = {"/"}><span>Home</span></Link>
		</div>
	);
};