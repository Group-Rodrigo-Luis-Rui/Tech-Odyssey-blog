import React, { useState, useEffect, useContext } from "react";
import backgroundurl from "../../img/background.jpg"
import { Link } from "react-router-dom";


export const Single = props => {
	// const { store, actions } = useContext(Context);
	// const params = useParams();


	return (
		<div className="container-fluid background main-container" style={{backgroundImage:'url(' + backgroundurl + ')'}}>
			<div className="container-fluid  d-flex justify-content-center">
				<div className="container-card card-single">
					<div className="card-body-single">
						<h2 className="card-title">Something about computers</h2>
						<h4 className="card-subtitle mb-2">Computers</h4>
						<p>Abstract</p>
						<p>Posted by: Robert Julius</p>
						<p>Date: Nov 17</p>
						<div className="comments d-flex justify-content-start">
							<button type="button" className="btn-comments">
								<i class="fa-regular fa-comment me-3"></i>
							</button>
							Comments
							<button type="button" className="btn-comments">
							<i class="fa-regular fa-bookmark ms-5 me-3"></i>
							</button>
							Add to favorites
						</div>
						<img
							src="https://images.unsplash.com/photo-1517336714731-489689fd1ca8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YXBwbGUlMjBsYXB0b3B8ZW58MHx8MHx8fDA%3D&w=1000&q=80" 
							alt="Description of the image" 
							className="single-image"
						/>
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
							Some quick example text to build on the card title and make up the bulk of the card's content.
						</p>
					</div>
				</div>
			</div>
			<div className="container-card card-single">
						<h3 className="comments-title">Comments:</h3>
						<div className="single-comments">
							(user) <p>some comment</p>
							<button className="btn me-4" type="button">
								<i class="fa-regular fa-thumbs-up"></i>
							</button>
							<button className="btn" type="button">
								<i class="fa-regular fa-thumbs-down"></i>
							</button>
							<button className="btn ms-4" type="button">
								<i class="fa-regular fa-comment-dots"> - Reply</i>
							</button>
							<div className="reply-comments">
								(user) <p>The reply comes here</p>
								<button className="btn-reply me-4" type="button">
									<i class="fa-regular fa-thumbs-up fa-xs"></i>
								</button>
								<button className="btn-reply" type="button">
									<i class="fa-regular fa-thumbs-down fa-xs"></i>
								</button>
								<button className="btn-reply ms-4" type="button">
								<i class="fa-regular fa-comment-dots fa-xs"> - Reply</i>
							</button>
							</div>
						</div>
						<div className="single-comments">
						(user) <p>some other comment</p>
						</div>
						<div className="single-comments">
						(user) <p>some other comment</p>
						</div>
					</div>
		</div>
	);
};
