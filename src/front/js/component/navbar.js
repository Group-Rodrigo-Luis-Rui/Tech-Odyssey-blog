import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../../styles/navbar.css";
import logo from "../../img/Tech-Odyssey-Logo.png";
import clsbtn from "../../img/power-button.png";
import hambtn from "../../img/hamburger-icon.png";
import Wheather from "../../img/Wheather_image1_api.png";


export const Navbar = () => {
		
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
		
		// useEffect(()=>{]
		// 	getWeatherFromApi();
		// },[]);
 
		// https://api.openweathermap.org/data/2.5/weather?q=Madrid&appid=39486e411db3bb85cdcbb9d6fd2b3970&units=metric
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
							<a className="linkit" href="#"><span className="num">00</span><i className="fa-solid fa-house"></i></a>
						</li>	
					</Link>
					<Link to="/ourmission">
						<li className="px-3 menu-item ff-sans-cond letter-spacing-3 fs-500">
							<a className="linkit" href="#"><span className="num">01</span>Our Mission</a>
						</li>
					</Link>
					
					<li className="px-3 ff-sans-cond letter-spacing-3 fs-500">
						<a className="menu-item1" onClick ={toggleIsWeatherOpen }><span className="num">02</span>Weather<i className="fa-solid fa-cloud-sun-rain"></i></a>
					</li>

					<li className="px-3 ff-sans-cond letter-spacing-3 fs-500">
						<a className="menu-item1" onClick ={toggleIsModalOpen}><span className="num">03</span><i className="fa-solid fa-right-to-bracket"></i></a>
					</li>
					
					<Link to="/createpost">
						<li className="px-3 menu-item ff-sans-cond letter-spacing-3 fs-500">
							<a className="linkit" href="#"><span className="num">04</span>Create Post</a>
						</li>
					</Link>	
					
					<div className="select-menu">
						<li className="px-3 menu-item ff-sans-cond letter-spacing-3 fs-500">
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
							placeholder="Search..."
							defaultValue={city}
							onChange={event => setCity(event.target.value)}	
						/>
						<button><i	className="fa-solid fa-magnifying-glass" 
									type="submit" 
									onClick={checkCity}>
								</i>
						</button>
					</div>
					
					<div className="location-box">
						<div className="location">{city}</div>
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
							
							<div className="btn-login-parent">
								<button type="submit" className="btn-submit">Login</button>
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
									<input type="text" required/>
									<label>Username:</label>
								</div>
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
									<label><input type="checkbox"/>I agree to the terms & conditions</label>
									
								</div>
								
								<div className="btn-register-parent">
									<button type="submit" className="btn-submit">Register</button>
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
