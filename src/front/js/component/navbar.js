import React from "react";
import { Link } from "react-router-dom";
import "../../styles/navbar.css";
import logo from "../../img/rigo-baby.jpg";

export const Navbar = () => {
	return (
		<header className="primary-header d-flex justify-content-start text-align-center">
			<div>
				<img src={""} alt="" className="logo"/>
				<span>Tech Odyssey</span>
			</div>
			<button className="mobile-toggle" aria-controls="primary-navigation"><span className="sr-only"
			aria-expanded="false">Menu</span></button>
			<nav>
				<ul id="primary-navigation" className="primary-navigation underline-indicators flex">
					<Link to="/">
						<li className="active"/><a className="ff-sans-cond uppercase text-white letter-spacing-2" 
						href="#"><span>00</span>Home</a>
					</Link>
					<li><a className="ff-sans-cond uppercase text-white letter-spacing-2" data-bs-toggle="modal" data-bs-target="#exampleModal"><span>01</span>login</a>	
						<div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
							<div className="modal-dialog">
								<div className="modal-content ">
									<div className="modal-header">
										<h5 className="modal-title text-dark" id="exampleModalLabel">Login Sector</h5>
										<button className="btn-close" type="button" data-bs-dismiss="modal" aria-label="Close"></button>
									</div>
									<div className="modal-body">
										<div className="mb-3">
											<label for="textArea1" className="form-label">Caption:</label>
											<textarea className="form-control" id="textArea1" placeholder="Add the caption of your post here" rows="2"></textarea>
										</div>
										<div>
											<button type="button" className="btn btn-light"><i className="fa-solid fa-camera"></i></button>      
											<button type="button" className="btn btn-light"><i className="fa-solid fa-location-dot"></i></button> 
										</div>
									</div>
									<div className="modal-footer">
										<button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
										<button type="button" className="btn btn-success">Publish</button>
									</div>              
								</div>
							</div>
						</div>	
					</li>
					<Link to ="/signup">
						<li><a className="ff-sans-cond uppercase text-white letter-spacing-2" 
						href="#"><span>02</span>Sign Up</a></li>
					</Link>
					<Link to ="/ourmission">
						<li><a className="ff-sans-cond uppercase text-white letter-spacing-2" 
						href="#"><span>03</span>Our Mission</a></li>
					</Link>
						<li><a className="ff-sans-cond uppercase text-white letter-spacing-2" 
						href="#"><span>04</span>Whishlist</a></li>				
				</ul>
			</nav>


		</header>
	);
};
