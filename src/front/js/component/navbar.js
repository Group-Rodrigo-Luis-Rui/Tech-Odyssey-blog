import React from "react";
import { Link } from "react-router-dom";
import "../../styles/navbar.css";

export const Navbar = () => {
	return (
		<header ClassName="primary-header ">
			<div className="ff-sans-cond fs-2">
				<img src="" alt="blog logo" className="logo"/>
				<span>Tech Odyssey</span>
			</div>
			<button class="mobile-nav-toggle" aria-controls="primary-navigation"><span class="sr-only" aria-expanded="false">Menu</span></button>
			
			
				<nav className="navbar-light">
					<ul id="primary-navigation" class="primary-navigation underline-indicators flex"/>
						<Link to="/">
							<li className="active"/><a class="ff-sans-cond letter-spacing-2" href="index.html"><span>00</span>Home</a>
						</Link>
						
							<li class="nav-item">
								
								<a className="ff-sans-cond letter-spacing-2" data-bs-toggle="modal" data-bs-target="#exampleModal"><span>01</span>login</a>
								
								
              
								<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
									<div class="modal-dialog">
										<div class="modal-content">
											<div class="modal-header">
												<h5 class="modal-title" id="exampleModalLabel">Login Sector</h5>
												<button class="btn-close" type="button" data-bs-dismiss="modal" aria-label="Close"></button>
											</div>
											<div class="modal-body">
												<div class="mb-3">
														<label for="textArea1" class="form-label">Caption:</label>
														<textarea class="form-control" id="textArea1" placeholder="Add the caption of your post here" rows="2"></textarea>
												</div>
												<div>
														<button type="button" class="btn btn-light"><i class="fa-solid fa-camera"></i></button>      
														<button type="button" class="btn btn-light"><i class="fa-solid fa-location-dot"></i></button> 
												</div>
											</div>
											<div class="modal-footer">
												<button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
												<button type="button" class="btn btn-success">Publish</button>
											</div>              
										</div>
										</div>
								</div>
            				</li>



							
						
						<Link to ="/signup">
							<li/><a className="ff-sans-cond letter-spacing-2" href="destination.html"><span>02</span>signup</a>
						</Link>
						<Link to ="/ourmission">
							<li/><a className="ff-sans-cond letter-spacing-2" href="crew.html"><span>03</span>Our Mission</a>
						</Link>
						
						<li/><a className="ff-sans-cond letter-spacing-2" href="technology.html"><span>04</span>Whishlist</a>
					<ul/>
				</nav>
		</header>	
	);
};
