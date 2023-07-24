import React from "react";
import { Link } from "react-router-dom";
import "../../styles/navbar.css";
import logo from "../../img/blogger-logo-icon.png";
import clsbtn from "../../img/power-button.png";
import hambtn from "../../img/hamburger-icon.png";
export const Navbar = () => {
	
	
	
	return (
		<header className="metallic-element">
			<div>
				<img src={logo} alt="" className="logoB"/>
				<a href="#" className="logo uppercase ff-sans-cond letter-spacing-1">Tech Odissey</a>
			</div>
			<div className="navigation">
				<ul className="menu">
					
					<Link to="/">
						<li className="active menu-item uppercase ff-sans-cond letter-spacing-2"><a className="menu-item"
						href="#"><span>00</span>Home</a></li>
					</Link>

					<li className="menu-item uppercase ff-sans-cond letter-spacing-2"><a className="menu-item" data-bs-toggle="modal" data-bs-target="#exampleModal"><span>01</span>Wheather</a></li>			
					<li className="menu-item uppercase ff-sans-cond letter-spacing-2"><a className="menu-item" data-bs-toggle="modal" data-bs-target="#exampleModal1"><span>02</span>Login</a></li>
							
					<Link to="/ourmission">
						<li className="menu-item uppercase ff-sans-cond letter-spacing-2"><a 
						href="#"><span>00</span>Our Mission</a></li>
					</Link>

					<Link to="/signup">
						<li className="menu-item uppercase ff-sans-cond letter-spacing-2"><a 
						href="#"><span>00</span>Sign Up</a></li>
					</Link>
						<li className="menu-item uppercase ff-sans-cond letter-spacing-2"><a 
						href="#"><span>00</span>Whislist</a></li>	
				</ul>
					<div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
						<div className="modal-dialog">
							<div className="modal-content ">
								<div className="modal-header">
									<h5 className="modal-title text-dark" id="exampleModalLabel">Search Wheather</h5>
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
					<div className="modal fade" id="exampleModal1" tabindex="-1" aria-labelledby="exampleModal1Label" aria-hidden="true">
						<div className="modal-dialog">
							<div className="modal-content ">
								<div className="modal-header">
									<h5 className="modal-title text-dark" id="exampleModal1Label">Login</h5>
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
			</div>


		</header>
	);
};
