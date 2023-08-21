import React, { useContext, useEffect, useState } from "react";
import { Context } from "../store/appContext";
import backgroundimage from "../../img/backgroundimage2.jpg";
// import avatarImage from "../../img/rigo-baby.jpg";
import "../../styles/myprofile.css";
import { useNavigate } from "react-router-dom";

export const MyProfile = () => {
	const navigate = useNavigate();
	const {store, actions} =  useContext(Context);
	const [email, setEmail] = useState();
	const [name, setName] = useState();
	// const [title, setTitle] = useState("");
	// const [abstract, setAbstract] = useState("");
	const [posts, setPosts] = useState([])

	

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
		})
		.catch((err) => {
			console.log(err);
		});
	}
	
	const getPostsByUser = () => {
		const userID = localStorage.getItem("userID")
		fetch(process.env.BACKEND_URL + "/api/user/" + userID + "/posts", { 
			method: "GET",
			headers: { 
				"Content-Type": "application/json" 
			},
		})
		.then((res) =>{ 
			return res.json()
		})
		.then((result) => {
			setPosts(result)
		})
		.catch((err) => {
			console.log(err);
		});
	}

	// getoneuser and getPostsByUser render just one time
	useEffect(() => {
		getOneUser();
		getPostsByUser();
	},[])

	const goToSinglePost = (postID) => {
		navigate(`/single/${postID}`);
	}

	const addReadings = (postID) => {
		fetch(process.env.BACKEND_URL + "/api/myreading", { 
			method: "POST",
			headers: { 
				"Content-Type": 
				"application/json" 
			},
			body: JSON.stringify({user_id: store.userId, post_id: postID}) 
		})
		.then((res) => res.json())
		.then((result) => {
			console.log(result);

		}).catch((err) => {
			console.log(err);
		})
	}

	return (
		<div className="backgroundProfile" style={{backgroundImage:'url(' + backgroundimage + ')'}}>
			<div className="container textBackgroundProfile text-center">
				<div className="userAvatar d-flex justify-content-center align-items-center mt-5 mb-5">
					<img src="https://loremflickr.com/g/320/240/paris,man/all" alt="User Avatar" className="avatarImage rounded-circle" />
					<div className="myBoxBackground">
						<h3><strong>{name}</strong>'s profile</h3>
					</div>
				</div>
				<div className="myBoxBackground mb-5">
					<h4>Email:&nbsp;&nbsp;{email}</h4>
				</div>
				<div>
					<h3 className="myBoxBackground mb-2 pb-1">My Posts</h3>
					<ul className="list-group">
						{posts.map((item, index) => (
							<li key={index}>
								<div class="card mb-3 cardContainer">
									<div class="row g-0">
										<div class="col-md-5">
											<img src="https://picsum.photos/300" class="img-fluid rounded-start" alt="some image"/>
											<div className="buttonProfileDiv">
												<button type="button" 
												class="btn btn-secondary btn-sm fs-6"
												onClick={() => goToSinglePost(item.id)}
												>
													View Post
												</button>
											</div>
										</div>
										<div class="col-md-7">
											<div class="card-body">
												<div className="container d-flex justify-content-between m-2">
													<h4 class="card-title pText pe-2"><strong>{item.title}</strong></h4>
													<a 
														href="#" 
														className="iconLink" 
														title="Add to my reading list"
														onClick={() => {
															
															addReadings(item.id);
														}}
													>
														<i class="far fa-bookmark pe-2 fs-3 "></i>
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