import React, { useContext, useEffect, useState } from "react";
import { Context } from "../store/appContext";
import backgroundimage from "../../img/backgroundimage.jpg";
import avatarImage from "../../img/rigo-baby.jpg";
import "../../styles/myreadings.css";

export const MyReadings = () => {

	const {store, actions} =  useContext(Context);

	const [email, setEmail] = useState();
	const [name, setName] = useState();
	const [readings, setReadings] = useState()

	const getOneUser = () => {
		const userID = store.userId
		fetch(process.env.BACKEND_URL + "/api/user/" + userID, { 
			method: "GET",
			headers: { 
				"Content-Type": "application/json" 
			},
		})
		.then((res) => res.json())
		.then((result) => {
			setName(result.name);
			setEmail(result.email);
		})
		.catch((err) => {
			console.log(err);
		});
	}

	const getMyReadings = () => {
		const userID = store.userId
		fetch(process.env.BACKEND_URL + "/api/myreading/" + userID, { 
			method: "GET",
			headers: { 
				"Content-Type": "application/json" 
			},
		})
		.then((res) => res.json())
		.then((result) => {
			console.log(result);
			// setReadings(result);
		})
		.catch((err) => {
			console.log(err);
		});
	}

	useEffect(() => {
		getOneUser();
		getMyReadings();
	},[])

	// const deleteReading = () => {
	// 	fetch(process.env.BACKEND_URL + "/api//myreading" + userID, { 
	// 		method: "DELETE",
	// 		headers: { 
	// 			"Content-Type": 
	// 			"application/json" 
	// 		},
	// 	})
	// 	.then((res) => res.json())
	// 	.then((result) => {
	// 	}).catch((err) => {
	// 		console.log(err);
	// 	})
	// }

	
	
	return (
		<div className="backgroundReadings" style={{backgroundImage:'url(' + backgroundimage + ')'}}>
			<div className="container textBackgroundReadings text-center">
				<div className="userAvatar d-flex justify-content-center align-items-center mt-5 mb-5">
					<img src="https://loremflickr.com/g/320/240/paris,man/all" alt="User Avatar" className="avatarImageReadings rounded-circle" />
					<div className="myBoxBackgroundReadings">
						<h3><strong>{name}</strong>'s profile</h3>
					</div>
				</div>
				<div className="myBoxBackgroundReadings mb-5">
					<h4>Email:&nbsp;&nbsp;{email}</h4>
				</div>
				<div>
					<h3 className="myBoxBackgroundReadings mb-2 pb-1">My Readings</h3>
					<ul className="list-group">
						{readings.map((item, index) => (
							<li key={index}>
								<div class="card mb-3 cardContainerReadings">
									<div class="row g-0">
										<div class="col-md-5">
											<img src="https://picsum.photos/300" class="img-fluid rounded-start" alt="..."/>
											<div className="buttonProfileDivReadings">
												<button type="button" class="btn btn-secondary btn-sm fs-6">View Post</button>
											</div>
										</div>
										<div class="col-md-7">
											<div class="card-body">
												<div className="container d-flex justify-content-between m-2">
													<h4 class="card-title pTextReadings pe-2"><strong>{item.title}</strong></h4>
													<a href="..." className="iconLinkReadings" title="Delete from my reading list">
														<i class="fas fa-trash pe-2 fs-3" ></i>
													</a>
												</div>
												<div className="cardTextProfile">
													<p>{item.abstract}</p>
												</div>
											</div>
										</div>
									</div>
								</div>
							</li>
						))}
					</ul>
				</div>
			</div>
		</div>
	);
};