import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import "../../styles/navbar.css";
import logo from "../../img/Tech-Odyssey-Logo.png";
import clsbtn from "../../img/power-button.png";
import hambtn from "../../img/hamburger-icon.png";
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

		// Open the weather modal
		const [isWeather, setIsWeather] = useState(false);

		const toggleIsWeatherOpen = () => {
			setIsWeather(!isWeather);
		}

		// Wheather API
		const [city, setCity] = useState("");
		const [temperature, setTemperature] = useState("");
		const [description, setDescription] = useState("");
		const [wind, setWind] = useState("");
		const [icon, setIcon] = useState("");
		const [country, setCountry] = useState("");

		// Login variables
		const [email, setEmail] = useState("");
		const [password, setPassword] = useState("");

		// is user logged in
		const [isLoggedIn, setIsLoggedIn] =useState(false);

		// to loggout the user
		const [isLoggedout, setIsLoggedOut] =useState(false);

		// Register variables
		const [regUserName, setRegUserName]=useState("");
		const [regEmail, setRegEmail]=useState("");
		const [regPassword, setRegPassword]=useState("");
		const [regIsActive, setRegIsActive]=useState(false);

		const getWeatherFromApi = () => {	
			fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.KEY}&units=metric`)
				.then(response => {
					if (!response.ok) {
					throw Error (response.statusText);
					}
				//Read the response as json
					return response.json();
				})
							
				.then(responseAsJson => {				
					setTemperature(responseAsJson.main.temp);
					setDescription(responseAsJson.weather[0].description)	
					setWind(responseAsJson.wind.speed);
					setIcon(responseAsJson.weather[0].icon);
					setCountry(responseAsJson.sys.country);
				})

				.catch(error => {
					console.error("Looks like there was a problem: \n", error);
				});		
		}

		// check if the location was typed
		const checkCity = () => {
			if(city==="") { 
				alert("Insert a location name please!...")
			} else {
				getWeatherFromApi();  
			}
		}
		// Creating a date field
		const dateBuilder = (d) => {
			let months = ["January", "February", "March", "April", "May", "June", "July", "August",
			"September", "October", "November", "December"];
			let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

			let day = days[d.getDay()];
			let date = d.getDate();
			let month = months[d.getMonth()];
			let year = d.getFullYear();

			return `${day} ${date} ${month} ${year}`
		}
		// logging in function
		const submit=()=> {
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
					body: JSON.stringify({ email: email.trim(), password}) 
				 })
				.then((res) => res.json())
				.then((result) => {
					console.log("Token is here!", result);
					localStorage.setItem("jwt-token", result.token);
					actions.storeUserId(result.user_id);
					alert("You are logged in!");
					setEmail();
					setPassword();
					toggleIsModalOpen();
	
				}).catch((err) => {
					console.error("There was an ERROR LOGGIN IN!!", err);
				});
			};
		}

		const ifUserLoggIn = () => {	
			if(token){
				setIsLoggedIn(true);
				// alert("You are logged in!");
			}
		}

		const ifUserLoggout = () => {
			const token = localStorage.removeItem("jwt-token");
			if(!token){
				setIsLoggedOut(true);
				alert("You are logged out!");
			}
		}

		
		useEffect(()=>{
			ifUserLoggIn();
		},[token])

		// Register a user
		const registerUser=()=> {
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
				});
			}
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
						<li className="px-3 active menu-item ff-sans-cond letter-spacing-3 fs-400">
							<a className="linkit" href="#"><span className="num">00</span><i className="fa-solid fa-house"></i></a>
						</li>	
					</Link>
					<Link to="/ourmission">
						<li className="px-3 menu-item ff-sans-cond letter-spacing-3 fs-400">
							<a className="linkit" href="#"><span className="num">01</span>Our Mission</a>
						</li>
					</Link>
					
					<li className="px-3 ff-sans-cond letter-spacing-3 fs-400">
						<a className="menu-item1" onClick ={toggleIsWeatherOpen }><span className="num">02</span>Weather<i className="fa-solid fa-cloud-sun-rain"></i></a>
					</li>
					{!isLoggedIn &&
					<li className="px-3 ff-sans-cond letter-spacing-3 fs-400">
						<a className="menu-item1" onClick ={toggleIsModalOpen}><span className="num">03</span><i className="fa-solid fa-right-to-bracket"></i></a>
					</li>
					}
					{isLoggedIn &&
					<Link to="/createpost">
						<li className="px-3 menu-item ff-sans-cond letter-spacing-3 fs-400">
							<a className="linkit" href="#"><span className="num">04</span>Create Post</a>
						</li>
					</Link>
					}
					
					{isLoggedIn &&
					<div className="select-menu">
						<li className="px-3 menu-item ff-sans-cond letter-spacing-3 fs-400">
								<a className="select-btn" onClick ={toggleMenu} href="#"><span className="num-btn">05</span>My Stuff<i className="px-5 fa-solid fa-chevron-down"></i></a>
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
					}
					{isLoggedIn &&
					<li className="px-3 ff-sans-cond letter-spacing-3 fs-400">
						<button className="signout-btn" onClick ={ifUserLoggout}><i className="fa-solid fa-right-from-bracket"></i></button>
					</li>
					}
				</ul>				
			</div>
			
			{(isWeather) && (
			<div className="wrapper-weather" >	
				<span className="icon-close-wt" onClick={toggleIsWeatherOpen}><i className="fa-solid fa-xmark" ></i></span>
				<div className="weather-container">
					<div className="search-box"> 
						<input 
							type="text"
							className="search-bar"
							placeholder="Search City..."
							defaultValue={city}
							onChange={event => setCity(event.target.value)}	
						/>
						<button className="search-icon"><i	className="fa-solid fa-magnifying-glass" 
									type="submit" 
									onClick={checkCity}>
								</i>
						</button>
					</div>
					
					<div className="location-box">
						{country !==""?<div className="location">{city}<span className="px-2">{country}</span></div>:""}
						<div className="date">{dateBuilder(new Date())}</div>	
					</div>
					<div className="weather-box">
						
						<div className="temp">
							{temperature !==""? `${temperature}ºC`:""}
						</div>
						<div className="description">{description}</div>
						{icon !==""?<img className="symbolString" src={`https://openweathermap.org/img/wn/${icon}@2x.png`}/>:""} 
						<div className="wind">
							{wind !==""? `${wind} km/h`:""}
						</div>		
					</div>
				</div>
			</div>
				)}

				<div>
					<img 
						src={hambtn} 
						onClick={handleToggleMenu} 
						className="hamburger-btn"
					/>
				</div>
				{/* login form */}
				{( isModalOpen && isLoginVisible) && (
				<div className="wrapper ff-sans-normal" >
					<span className="icon-close" onClick={toggleIsModalOpen}><i className="fa-solid fa-xmark" ></i></span>
					<div className="form-box-login">
						<div className="title-login">
							<span className="iconUser"><i className="fa-regular fa-user"></i></span>
							<h2>Login</h2>
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
							<div className="remember-forgot">
								<label><input type="checkbox"/>Remember me</label>
								<a href="#">I agree to the terms & conditions</a>
							</div>
							<div className="btn-login-parent">
								<button type="submit" className="btn-submit" onClick = {submit}>Login</button>	
							</div>
							<div className="login-register">
								<p>Don't have an account? 
									<a href="#" className="register-link" onClick={toggleIsVisibleLogin}>Register</a>
								
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
							<div className="title-login mt-4">
								<span className="iconRegist"><i className="fa-regular fa-id-card"></i></span>
								<h2>Registration</h2>
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
									<button type="submit" className="btn-submit" onClick={registerUser}>Register</button>
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
