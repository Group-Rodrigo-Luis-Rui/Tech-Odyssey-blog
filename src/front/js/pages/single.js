import React, { useState, useEffect, useContext } from "react";
import backgroundurl from "../../img/background.jpg"
import { Link } from "react-router-dom";

export const Single = props => {
	// const { store, actions } = useContext(Context);
	// const params = useParams();

	return (
		<div className="container-fluid background" style={{backgroundImage:'url(' + backgroundurl + ')'}}>
			<div className="container-fluid  d-flex justify-content-center">
				<Link to={"/"}>
					<button className="btn col btn-primary">
						Back to Home
					</button>
				</Link>
				<div className="card card-single">
					<div className="card-body-single">
						<h2 className="card-title">title</h2>
						<h4 className="card-subtitle mb-2">Category</h4>
						<p>Abstract</p>
						<p>date of the post</p>
						<p>user information</p>
						<p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.
							Some quick example text to build on the card title and make up the bulk of the card's content.
							Some quick example text to build on the card title and make up the bulk of the card's content.
							Some quick example text to build on the card title and make up the bulk of the card's content.
							Some quick example text to build on the card title and make up the bulk of the card's content.
							Some quick example text to build on the card title and make up the bulk of the card's content.
							Some quick example text to build on the card title and make up the bulk of the card's content.
							Some quick example text to build on the card title and make up the bulk of the card's content.
							Some quick example text to build on the card title and make up the bulk of the card's content.
							Some quick example text to build on the card title and make up the bulk of the card's content.
							Some quick example text to build on the card title and make up the bulk of the card's content.
							Some quick example text to build on the card title and make up the bulk of the card's content.
							Some quick example text to build on the card title and make up the bulk of the card's content.
							Some quick example text to build on the card title and make up the bulk of the card's content.
							Some quick example text to build on the card title and make up the bulk of the card's content.
							Some quick example text to build on the card title and make up the bulk of the card's content.
							Some quick example text to build on the card title and make up the bulk of the card's content.
							Some quick example text to build on the card title and make up the bulk of the card's content.
							Some quick example text to build on the card title and make up the bulk of the card's content.
							Some quick example text to build on the card title and make up the bulk of the card's content.
							Some quick example text to build on the card title and make up the bulk of the card's content.
							Some quick example text to build on the card title and make up the bulk of the card's content.
							Some quick example text to build on the card title and make up the bulk of the card's content.
							Some quick example text to build on the card title and make up the bulk of the card's content.
							Some quick example text to build on the card title and make up the bulk of the card's content.
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};
