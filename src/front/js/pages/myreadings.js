import React, { useContext, useEffect, useState } from "react";
import { Context } from "../store/appContext";
import { useNavigate } from "react-router-dom";
import backgroundimage from "../../img/backgroundimage2.jpg";
import "../../styles/myreadings.css";


export const MyReadings = () => {
	

	const {store, actions} =  useContext(Context);

	const navigate = useNavigate();

	const [email, setEmail] = useState();
	const [name, setName] = useState();
	const [readings, setReadings] = useState([])
	const [myreadingID, setMyreadingID] = useState();
	const [imageUser, setImageUser] = useState();

	const getOneUser = () => {

		const userID = localStorage.getItem("userID");

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
			setImageUser(result.user_image);
		})
		.catch((err) => {
			console.log(err);
		});
	}

	const getMyReadings = () => {

		const userID = localStorage.getItem("userID");

		fetch(process.env.BACKEND_URL + "/api/myreading/" + userID, { 
			method: "GET",
			headers: { 
				"Content-Type": "application/json" 
			},
		})
		.then((res) => res.json())
		.then((result) => {
			setMyreadingID(result.id)
			setReadings(result.posts);
			console.log(result.posts);
		})
		.catch((err) => {
			console.log(err);
		});
	}

	useEffect(() => {
		getOneUser();
		getMyReadings();
	},[])

	const goToSinglePost = (postID) => {
		navigate(`/single/${postID}`);
	}

	const removeReading = (id) => {
		const confirmDelete = window.confirm("Are you sure you want to delete this post from your reading list?");
		if (!confirmDelete) {
			return;
		}
		fetch(process.env.BACKEND_URL + "/api/myreading/" + myreadingID + "/post/" + id, { 
			method: "PUT",
			headers: { 
				"Content-Type": 
				"application/json" 
			},
			body: JSON.stringify({user_id: store.userId, post_id: id})
		})
		.then((res) => res.json())
		.then((result) => {
			getMyReadings();	
		}).catch((err) => {
			console.log(err);
		})
	}

	return (
		<div className="backgroundReadings" style={{backgroundImage:'url(' + backgroundimage + ')'}}>
			<div className="container textBackgroundReadings text-center">
				<div className="userAvatar d-flex justify-content-center align-items-center mt-5 mb-5">
					<img src={imageUser} alt="User avatar or image" className="img-fluid rounded-3 avatarImageReadings" />
					<div className="myBoxBackgroundReadings">
						<h3><strong>{name}</strong>'s My Reading List</h3>
					</div>
				</div>
				<div className="myEmailBoxBackgroundReadings mb-5">
					<h4>Email:&nbsp;&nbsp;<strong>{email}</strong></h4>
				</div>
				<div>
					<h3 className="myBoxBackgroundReadings mb-2 pb-1">My Readings</h3>
					<ul className="list-group">
						{readings? (
							readings.map((item, index) => (
								<li key={index}>
									<div className="card mb-3 cardContainerReadings">
										<div className="row g-0">
											<div className="col-md-5">
												<img src={item.image_post} className="img-fluid mt-2 rounded-3 imageCardMyReadings" alt="post image"/>
											</div>
											<div className="col-md-7">
												<div className="card-body">
													<div className="container d-flex justify-content-between titleCardMyReading">
														<h4 
															className="card-title pTextReadings pe-2" 
															onClick={() => goToSinglePost(item.id)}>
																<strong>{item.title}</strong>
														</h4>
														<div 
															className="iconLinkReadings" 
															title="Delete from my reading list"
															onClick={() => removeReading(item.id)}
														>
																<i className="fas fa-trash pe-2 fs-3" ></i>
														</div>
													</div>
													<div className="cardTextProfile">
														<p>{item.abstract}</p>
													</div>
												</div>
											</div>
										</div>
									</div>
								</li>
							))
						): ""}
					</ul>
				</div>
			</div>
		</div>
	);
};