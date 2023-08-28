import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import "../../styles/navbar.css";
import logo from "../../img/Tech-Odyssey-Logo3.png";
import clsbtn from "../../img/power-off.png";
import hambtn from "../../img/hamburger-icon.png";
import sublogo from "../../img/Tech Odyssey Logo1.png"
import logout from "../../img/logout.png"
import { Context } from "../store/appContext";
import {useNavigate} from "react-router-dom";

export const Navbar = () => {
	
		const {store, actions} =  useContext(Context);
		const token = localStorage.getItem("jwt-token");
		
		const navigate = useNavigate();

		const [closeBtn, setCloseBtn] = useState(false);
		const handleToggleMenu = () => {
			setCloseBtn((prevCloseBtn) => !prevCloseBtn);	
		};

		const [shownMenu, setShowMenu] = useState(false);
		const toggleMenu = ()=> {
			setShowMenu(!shownMenu);
		};

		//  Open the login modal
		const [isLoginVisible, setIsLoginVisible] = useState(true);
		
		const toggleIsVisibleLogin = () => {
			setIsLoginVisible(!isLoginVisible);
		}

		// Opens the register modal
		const [isModalOpen, setIsModalOpen] = useState(false);

		const toggleIsModalOpen = ()=> {
			setIsModalOpen(!isModalOpen);
		}

		// Login variables
		const [email, setEmail] = useState("");
		const [password, setPassword] = useState("");

		const [user, setUser] = useState("");

		// is user loged in
		const [isLogedIn, setIsLogedIn] =useState(false);

		// to logout the user
		const [isLogedout, setIsLogedOut] =useState(false);

		// Register variables
		const [regUserName, setRegUserName]=useState("");
		const [regEmail, setRegEmail]=useState("");
		const [regPassword, setRegPassword]=useState("");
		const [regIsActive, setRegIsActive]=useState(false);

		// loging in function
		const submit=(event)=> {
			event.preventDefault()
			if(email.trim() === ""){
				alert("Please Insert the email");
			} else if (password === ""){
				alert ("Please Insert the password");
			} else {
				fetch(process.env.BACKEND_URL + "/api/login", { 
					method: "POST",
					headers: { 
						"Content-Type": 
						"application/json" 
					},
					body: JSON.stringify({ email: email.trim(), password }) 
				})
				.then((res) => res.json())
				.then((result) => {
				if("token" in result){
					console.log("Token is here!", result);
					localStorage.setItem("jwt-token", result.token);
					localStorage.setItem("userID", result.user_id);
					actions.storeUserId(result.user_id);
					setEmail("");
					setPassword("");
					toggleIsModalOpen();
					alert(`User ${email} Successfully LOGIN!!`);
					ifUserLoggIn();
				} else {
					alert("Bad username or password.Please try again");
				}
				}).catch((err) => {
					console.error("There was an ERROR LOGIN IN!!", err);
				});
			};
		}

		const ifUserLoggIn = () => {	
			if(token){
				setIsLogedIn(true);
				getUser(store.userId);
			}
		}

		const ifUserLoggout = () => {
			const token = localStorage.removeItem("jwt-token");

			if(!token){
				alert(`User Successfully LOGOUT!!`);
				setIsLogedOut(true);
				setIsLogedIn(false);
				navigate("/");
			}
		}
		// this will insert the username on the upper bar
		// useEffect(()=>{
			const getUser=() => {
				const userID = localStorage.getItem("userID");
				fetch(process.env.BACKEND_URL + "/api/user/" + userID, { 
					method: "GET",
					headers: { 
						"Content-Type": 
						"application/json" 
					},	
				})
				.then((res) => res.json())
				.then((result) => {
					// console.log(result);
					setUser(result);	
				}).catch((err) => {
					console.error("There was an ERROR LOGIN IN!!", err);
				});
			}	
		// 	getUser(store.userId);
		// },[store.userId])

		useEffect(()=>{
			ifUserLoggIn();
		},[token, isLogedIn]);

		// Register a user
		const registerUser=(event)=> {
			event.preventDefault()
			if(regUserName === ""){
				alert("Please insert your name!");
			} else if(regEmail === "" || !regEmail.includes('@')){
				alert("Please insert a valid email address");
			} else if(regPassword ===""|| regPassword.length <8){
				alert("The Password should have a minimum of 8 (eight) characters!");
			} else if(!regIsActive){
				alert("You must agree with the terms and conditions");
			} else {

				// the user register data
				const userData = {
					"name": regUserName,
					"email": regEmail,
					"password": regPassword,
					"is_active": regIsActive,
					"userId": store.userId
				}
				
				fetch(process.env.BACKEND_URL + "/api/user", { 
					method: "POST",
					headers: { 
						"Content-Type": 
						"application/json" 
					},
					body: JSON.stringify(userData) 
				 })
				.then((res) => res.json())
				.then((result) => {
	
					console.log(result);
					actions.storeUserId(result.user_id);
					setRegUserName("");
					setRegEmail("");
					setRegPassword("");
					setRegIsActive("");
					alert(`User ${regUserName} Successfully registered!`);
					toggleIsModalOpen();
	
				}).catch((err) => {
					console.error("There was an ERROR REGISTERING IN!!...",err);
					alert("Email already Exits!...");
				});
			}
		}
	
	return (
		<header>
				{isLogedIn && user && (
				<div className="upper-header">
					<p className="user-name ff-sans-cond letter-spacing-3 fs-390">User: {user.name}</p>
				</div>
				)}
				<div className="metallic-element">
					<div className="d-flex justify-content-center align-items-center">
						<div className="main-logo">
							<img src={logo} alt="" className="logoB"/>
						</div>
						
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
								<li className="px-3 active menu-item ff-sans-cond letter-spacing-3 fs-390">
									<a className="linkit" href="#"><span className="num">00</span><i className="fa-solid fa-house"></i></a>
								</li>	
							</Link>
							<Link to="/ourmission">
								<li className="px-3 menu-item ff-sans-cond letter-spacing-3 fs-390">
									<a className="linkit" href="#"><span className="num">01</span>Our Mission</a>
								</li>
							</Link>
							
							{!isLogedIn &&
							<li className="px-3 ff-sans-cond letter-spacing-3 fs-390">
								<a className="menu-item1" onClick ={toggleIsModalOpen}><span className="num">02</span>Sign In <i className="fa-solid fa-circle-user"></i></a>
							</li>
							}
							
							{isLogedIn &&
							<Link to="/createpost">
								<li className="px-3 menu-item ff-sans-cond letter-spacing-3 fs-390">
									<a className="linkit" href="#"><span className="num">03</span>Create Post</a>
								</li>
							</Link>
							}
							
							{isLogedIn &&
							<div className="select-menu">
								<li className="px-3 menu-item ff-sans-cond letter-spacing-3 fs-390">
										<a className="select-btn" onClick ={toggleMenu} href="#"><span className="num-btn">04</span>My Stuff<i className="px-5 fa-solid fa-chevron-down"></i></a>
											{shownMenu && (
											<ul className="dropdown">
												<Link className="abc" to="/myprofile">
													<li className="dropdown-item" onClick={toggleMenu}>
														<i className="fa-solid fa-user"></i>
														<span className="item-text">My Profile</span>	
													</li>
												</Link>	
												<Link className="abc" to="/myreadings">
													<li className="dropdown-item"onClick={toggleMenu}>
														<i className="fa-sharp fa-solid fa-book-open"></i>
														<span className="item-text">My Readings</span>	
													</li>
												</Link>			
											</ul>
											)}
								</li>				
							</div>
							}
							{isLogedIn &&
								<button className="signout-btn ff-sans-cond menu-item letter-spacing-3" onClick={ifUserLoggout}>Sign Out</button>
							}	
						</ul>
						<div>
							<img 
								src={hambtn} 
								onClick={handleToggleMenu} 
								className="hamburger-btn"
							/>
						</div>
					</div>
				</div>		
						{/* login form */}
						{( isModalOpen && isLoginVisible) && (
						<div className="wrapper ff-sans-normal" >
							<span className="icon-close" onClick={toggleIsModalOpen}><i className="fa-solid fa-xmark" ></i></span>
							<div className="form-box-login">
								<div className="sub-logo-box">
									<img src={sublogo} className="sub-logo"/>
								</div>
								<div className="title-login">
									<span className="iconUser"><i className="fa-regular fa-user"></i></span>
									<h5>Login to Tech Odyssey</h5>
								</div>
								<form action="#">
									<div className="input-box">		
										<span className="iconlog"><i className="fa-solid fa-envelope"></i></span>
										<input 
											type="email" required
											value={email}
											onChange={(e)=> setEmail(e.target.value)}
										/>	
										<label>Email ID:</label>
									</div>
									<div className="input-box">
											
										<span className="iconlog"><i className="fa-solid fa-lock"></i></span>
										<input 
											type="password" required
											value={password}
											onChange={(e)=> setPassword(e.target.value)} 
										/>	
										<label>Password</label>
									</div>
									{/* <div className="remember-forgot">
										<label><input type="checkbox"/>Remember me</label>
										<a href="#">I agree to the terms & conditions</a>
									</div> */}
									<div className="btn-login-parent">
										<button type="submit" className="btn-submit" onClick={submit}>Login</button>	
									</div>
									<div className="login-register">
										<p>Don't have an account? 
											<a href="#" className="register-link" onClick={toggleIsVisibleLogin}>Signup</a>
										</p>	
									</div>
								</form>
							</div>
						</div>
						)}		
					
					{/* Register form */}
						{(isModalOpen && !isLoginVisible) && (
							<div className="wrapper ff-sans-normal" >
							<span className="icon-close" onClick={toggleIsModalOpen}><i className="fa-solid fa-xmark" ></i></span>
								<div className="form-box-register">
									<div className="sub-logo-box">
										<img src={sublogo} className="sub-logo"/>
									</div>
									<div className="title-login mt-4">
										<span className="iconRegist"><i className="fa-regular fa-id-card"></i></span>
										<h5>Signup to Tech Odyssey</h5>
									</div>
									<form action="#">
										<div className="input-box">
											<span className="iconlog"><i className="fa-solid fa-user userGraph"></i></span>
											<input 
												type="text" required
												value={regUserName}
												onChange={(e)=> setRegUserName(e.target.value)} 
											/>
											<label>Username:</label>
										</div>
										<div className="input-box">
											<span className="iconlog"><i className="fa-solid fa-envelope"></i></span>
											<input 
												type="email" required
												value={regEmail}
												onChange={(e)=> setRegEmail(e.target.value)} 
											/>
											<label>Email ID:</label>
										</div>
										<div className="input-box">
											<span className="iconlog"><i className="fa-solid fa-lock"></i></span>
											<input 
												type="password" required
												value={regPassword}
												onChange={(e)=> setRegPassword(e.target.value)} 
											/>
											<label>Password</label>
										</div>
										<div className="remember-forgot">
											<label htmlFor="termsCheckbox"><input 
														type="checkbox"
														id="termsCheckbox"
														checked={regIsActive}
														onChange={(e)=> setRegIsActive(e.target.checked)} 
													/>
												I agree to the terms & conditions
											</label>	
										</div>
										<div className="btn-register-parent">
											<button type="submit" className="btn-submit" onClick={registerUser}>Signup</button>
										</div>
										<div className="login-register">
											<p>Already have an account? 
												<a href="#" className="login-link" onClick ={toggleIsVisibleLogin}>Login</a>
											</p>	
										</div>
									</form>
								</div>
							</div>
							)
						}
						
		</header>
	);
};
