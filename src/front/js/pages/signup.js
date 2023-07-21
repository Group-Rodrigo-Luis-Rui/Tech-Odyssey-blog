import React from "react";
import { Link } from "react-router-dom";

export const SignUp = () => {

	return (
		<div className="container">
			<h1>This is the sign up page</h1>
            <Link to = {"/"}><span>Home</span></Link>
		</div>
	);
};