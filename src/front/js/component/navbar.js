import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../../styles/navbar.css";
import logo from "../../img/Tech-Odyssey-Logo.png";
import clsbtn from "../../img/power-button.png";
import hambtn from "../../img/hamburger-icon.png";
import cloudy from "../../img/cloudy-wheather.jpg";


export const Navbar = () => {
		
		const [closeBtn, setCloseBtn] = useState(false);
		const handleToggleMenu = () => {
			setCloseBtn((prevCloseBtn) => !prevCloseBtn);	
		};

		const [shownMenu, setShowMenu] = useState(false);
		const toggleMenu = ()=> {
			setShowMenu(!shownMenu);
		};

		const [showLoginCard, setShowLoginCard] = useState(false);
		const toggleLogin = () => {
			setShowLoginCard(!showLoginCard);
		}

		const [showRegisterCard, setShowRegisterCard] = useState(false);
		const toggleRegister = () => {
			setShowRegisterCard(!showRegisterCard);
		}

	return (
		<header className="metallic-element">
			<div className="d-flex justify-content-center align-items-center">
				<img src={logo} alt="" className="logoB"/>
				<a href="#" className="logo uppercase ff-sans-cond letter-spacing-2">
					Tech Odyssey
				</a>
			</div>

			<div className={`navigation ${closeBtn? "menu-active":""}`}>
				<ul className={`menu-${closeBtn? "active":"unactive"}`}>
					<div><img 
							src={clsbtn} 
							onClick={handleToggleMenu} 
							className= "close-btn"
						/>
					</div>
					<Link to="/">
						<li className="px-3 active menu-item ff-sans-cond letter-spacing-3 fs-500">
							<a className="linkit" href="#"><span className="num">00</span><i class="fa-solid fa-house"></i></a>
						</li>	
					</Link>
					<Link to="/ourmission">
						<li className="px-3 menu-item ff-sans-cond letter-spacing-3 fs-500">
							<a className="linkit" href="#"><span className="num">01</span>Our Mission</a>
						</li>
					</Link>
					<li className=" px-3 ff-sans-cond letter-spacing-3 fs-500">
						<a className="menu-item1" data-bs-toggle="modal" data-bs-target="#exampleModal"><span className="num">02</span>Wheather<i className="fa-solid fa-cloud-sun-rain"></i></a>	
					</li>			
					<li className="px-3 ff-sans-cond letter-spacing-3 fs-500">
						<a className="menu-item1" onClick ={toggleLogin}><span className="num">03</span><i className="fa-solid fa-right-to-bracket"></i></a>
					</li>
					
					<Link to="/createpost">
						<li className="px-3 menu-item ff-sans-cond letter-spacing-3 fs-500">
							<a className="linkit" href="#"><span className="num">04</span>Create Post</a>
						</li>
					</Link>	
					
					<div className="select-menu">
						<li className="px-3 menu-item ff-sans-cond letter-spacing-3 fs-500">
								<a className="select-btn" onClick ={toggleMenu} href="#"><span className="num-btn">05</span>My Stuff<i class="px-5 fa-solid fa-chevron-down"></i></a>
									{shownMenu && (
									<ul className="dropdown">
										<Link className="abc" to="/myprofile">
											<li className="dropdown-item" onClick ={toggleMenu}>
												<i className="fa-solid fa-user"></i>
												<span className="item-text">My Profile</span>	
											</li>
										</Link>	
										<Link className="abc" to="/myreadings">
											<li className="dropdown-item"onClick ={toggleMenu}>
												<i className="fa-sharp fa-solid fa-book-open"></i>
												<span className="item-text">My Readings</span>	
											</li>
										</Link>			
									</ul>
									)}
						</li>			
					</div>	
				</ul>		
					<div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
						<div className="modal-dialog">
							<div className="modal-content p-0 rounded-bottom">
								<div className="modal-header p-0">
									<img className="back-wheather w-100 rounded-top" style={{height:100, objectFit:"cover"}} src={cloudy}/>
									<h5 className="modal-title fs-4 fw-semibold ps-3 position-absolute ff-sans-normal" style={{color:"black"}} id="exampleModalLabel">Search Wheather</h5>
									<button className="btn-close" style={{color:"white", opacity:1}} type="button" data-bs-dismiss="modal" aria-label="Close"></button>
								</div>
								<div className="modal-body">
									<div className="mb-3">
										<label for="textArea1" className="form-label fw-semibold ff-sans-normal">City:</label>
										<textarea className="form-control ff-sans-normal" id="textArea1" placeholder="Search for your city here" rows="2"></textarea>
									</div>
									<div>
										<button type="button" className="btn btn-info"><i className="fa-solid fa-location-dot"></i></button> 
									</div>
								</div>
								<div className="modal-footer ff-sans-normal">
									<button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
									<button type="button" className="btn btn-success">Load</button>
								</div>              
							</div>
						</div>
					</div>	
					
					{/*<div className="modal fade" id="exampleModal1" tabindex="-1" aria-labelledby="exampleModal1Label" aria-hidden="true">
						<div className="modal-dialog">
							<div className="modal-content">
								<div className="modal-header">
									<h5 className="modal-title fs-4 fw-semibold ff-sans-normal" style={{color:"black"}} id="exampleModal1Label">Login</h5>
									<button className="btn-close" type="button" data-bs-dismiss="modal" aria-label="Close"></button>
								</div>
								<form className="ms-2 me-2 ff-sans-normal">
									<div className="mb-3">
										<label for="exampleInputEmail1" className="form-label">Email ID:</label>
										<input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
									</div>
									<div className="mb-3">
										<label for="exampleInputPassword1" className="form-label">Password:</label>
										<input type="password" className="form-control" id="exampleInputPassword1"/>
									</div>
									<div className="modal-footer">
										<button type="submit" className="btn text-white btn-primary mb-2">Submit</button>
										
									</div>
								</form>	           
							</div>
						</div>
					</div>	*/}
			</div>
			
				<div>
					<img 
						src={hambtn} 
						onClick={handleToggleMenu} 
						className="hamburger-btn"
					/>
				</div>
				
				{showLoginCard && (
				<div className="wrapper ff-sans-normal" >
					<span className="icon-close" onClick ={toggleLogin}><i className="fa-solid fa-xmark" ></i></span>
					<div className="form-box login">
						<div className="title-login">
							<span className="iconUser"><i className="fa-regular fa-user"></i></span>
							<h2>Login</h2>
						</div>
						<form action="#">
							<div className="input-box">
								<span className="iconlog"><i className="fa-solid fa-envelope"></i></span>
								<input type="email" required/>
								<label>Email ID:</label>
							</div>
							<div className="input-box">
								<span className="iconlog"><i className="fa-solid fa-lock"></i></span>
								<input type="password" required />
								<label>Password</label>
							</div>
							<div className="remember-forgot">
								<label><input type="checkbox"/>Remember me</label>
								<a href="#">I agree to the terms & conditions</a>
							</div>
							<button type="submit" className="btn-submit">Login</button>
							<div className="login-register">
								<p>Don't have an account? 
								
									<a href="#" className="register-link" onClick ={toggleRegister}>Register</a>
								
								</p>	
							</div>
						</form>
					</div>
					{showRegisterCard && (
					<div className="form-box register">
						<div className="title-login">
							<span className="iconRegist"><i class="fa-regular fa-id-card"></i></span>
							<h2>Registration</h2>
						</div>
						<form action="#">
							<div className="input-box">
								<span className="iconlog"><i class="fa-solid fa-user"></i></span>
								<input type="text" required/>
								<label>Username:</label>
							</div>
							<div className="input-box">
								<span className="iconlog"><i class="fa-solid fa-envelope"></i></span>
								<input type="email" required/>
								<label>Email ID:</label>
							</div>
							<div className="input-box">
								<span className="iconlog"><i className="fa-solid fa-lock"></i></span>
								<input type="password" required />
								<label>Password</label>
							</div>
							<div className="remember-forgot">
								<label><input type="checkbox"/>I agree to the terms & conditions</label>
								
							</div>
							<button type="submit" className="btn-submit">Register</button>
							<div className="login-register">
								<p>Already have an account? 
								
									<a href="#" className="login-link" onClick ={toggleRegister}>Login</a>
								
								</p>	
							</div>
						</form>
					</div>
					)}

				</div>
				)}





		</header>
	);
};
