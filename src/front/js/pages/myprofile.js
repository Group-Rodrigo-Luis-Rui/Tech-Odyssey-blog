import React, { useContext, useEffect, useState } from "react";
import { Context } from "../store/appContext";
import backgroundimage from "../../img/backgroundimage2.jpg";
import "../../styles/myprofile.css";
import { useNavigate } from "react-router-dom";

export const MyProfile = () => {
	const navigate = useNavigate();
	const [email, setEmail] = useState();
	const [name, setName] = useState();
	const [posts, setPosts] = useState([])
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
	
	const getPostsByUser = () => {

		const userID = localStorage.getItem("userID");

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

	const deletePost = (id) => {
		const confirmDelete = window.confirm("Are you sure you want to delete this post?");
		if (!confirmDelete) {
			return;
		}
		fetch(process.env.BACKEND_URL + "/api/post/" + id, { 
			method: "DELETE",
			headers: { 
				"Content-Type": 
				"application/json" 
			},
		})
		.then((res) => res.json())
		.then((result) => {
			const updatedPosts = posts.filter((post) => post.id !== id);
			setPosts(updatedPosts);

		}).catch((err) => {
			console.log(err);
		})
	}

	return (
		<div className="backgroundProfile" style={{backgroundImage:'url(' + backgroundimage + ')'}}>
			<div className="container textBackgroundProfile text-center">
				<div className="userAvatar d-flex justify-content-center align-items-center mt-5 mb-5">
					<img src={imageUser} alt="User Avatar" className="avatarImage" />
					<div className="myBoxBackground">
						<h3><strong>{name}</strong>'s profile</h3>
					</div>
				</div>
				<div className="myEmailBoxBackground mb-5">
					<h4>Email:&nbsp;&nbsp;<strong>{email}</strong></h4>
				</div>
				<div>
					<h3 className="myBoxBackground mb-2 pb-1">My Posts</h3>
					<ul className="list-group">
						{posts.map((item, index) => (
							<li key={index}>
								<div class="card mb-3 cardContainerProfile">
									<div class="row g-0">
										<div class="col-md-5">
											<img src={item.image_post} class="img-fluid mt-2 rounded-start imagePostProfile" alt="some image"/>
										</div>
										<div class="col-md-7">
											<div class="card-body">
												<div className="container d-flex justify-content-between titleCardProfile">
													<h4 
														class="card-title pText pe-2 titleTextProfile"
														onClick={() => goToSinglePost(item.id)}
													>
														<strong>{item.title}</strong></h4>
													<div 
														href="#" 
														className="iconLink" 
														title="Delete post"
														onClick={() => {
															
															deletePost(item.id);
														}}
													>
														<i class="far fa-minus-square pe-2 fs-3 "></i>
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
						))}
					</ul>
				</div>
			</div>
		</div>
	);
};