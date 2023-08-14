import React, { useContext, useEffect, useState } from "react";
import { Context } from "../store/appContext";
import backgroundimage from "../../img/backgroundimage.jpg";
import avatarImage from "../../img/rigo-baby.jpg";
import "../../styles/myreadings.css";

export const MyReadings = () => {

	const {store, actions} =  useContext(Context);

	const [email, setEmail] = useState();
	const [name, setName] = useState();

	const userID = store.userID

	const getOneUser = () => {
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

	useEffect(() => {
		getOneUser();
	})

	const deleteReading = () => {
		fetch(process.env.BACKEND_URL + "/api//myreading" + userID, { 
			method: "DELETE",
			headers: { 
				"Content-Type": 
				"application/json" 
			},
		})
		.then((res) => res.json())
		.then((result) => {


		}).catch((err) => {
			console.log(err);
		})
	}

	
	
	const user = {
		name: "John Doe",
		email: "john@example.com",
		password: "**********", // This is just a placeholder, NEVER display passwords like this
	};

	const myPosts = [
		"5G Connectivity: Powering the Internet of Things",
		"Blockchain Beyond Cryptocurr.: Diverse Applications Unveiled",
		"Title of Post 3"
	];
	return (
		<div className="backgroundReadings" style={{backgroundImage:'url(' + backgroundimage + ')'}}>
			<div className="container textBackgroundReadings text-center">
				<div className="userAvatar d-flex justify-content-center align-items-center mt-5 mb-5">
					<img src={avatarImage} alt="User Avatar" className="avatarImageReadings rounded-circle" />
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
						{myPosts.map((postTitle, index) => (
							<li key={index}>
								<div class="card mb-3 cardContainerReadings">
									<div class="row g-0">
										<div class="col-md-5">
											<img src={avatarImage} class="img-fluid rounded-start" alt="..."/>
											<div className="buttonProfileDivReadings">
												<button type="button" class="btn btn-secondary btn-sm fs-6">View Post</button>
											</div>
										</div>
										<div class="col-md-7">
											<div class="card-body">
												<div className="container d-flex justify-content-between m-2">
													<h4 class="card-title pTextReadings pe-2"><strong>{postTitle}</strong></h4>
													<a href="..." className="iconLinkReadings" title="Delete from my reading list">
														<i class="fas fa-trash pe-2 fs-3" ></i>
													</a>
												</div>
												<div className="cardTextProfile">
													<p>Virtual Reality (VR) has evolved beyond gaming to find applications in education, training, therapy, and more. This post explores VR's journey, its diverse applications, and the potential it holds for transforming various aspects of our lives.<br/><br/>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
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