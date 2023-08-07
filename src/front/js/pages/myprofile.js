import React from "react";
import backgroundimage from "../../img/backgroundimage.jpg";
import avatarImage from "../../img/rigo-baby.jpg";
import "../../styles/myprofile.css";

export const MyProfile = () => {
	const user = {
		name: "John Doe",
		email: "john@example.com",
		password: "**********", // This is just a placeholder, NEVER display passwords like this
	};

	const myPosts = [
		"Title of Post 1",
		"Title of Post 2",
		"Title of Post 3"
	];
	return (
		<div className="backgroundProfile" style={{backgroundImage:'url(' + backgroundimage + ')'}}>
			<div className="container textBackgroundProfile text-center">
				<div className="userAvatar d-flex justify-content-center align-items-center mt-5 mb-5">
					<img src={avatarImage} alt="User Avatar" className="avatarImage rounded-circle" />
					<div className="myBoxBackground">
						<h3><strong>{user.name}</strong>'s profile</h3>
					</div>
				</div>
				<div className="myBoxBackground mb-5">
					<h4>Email:{user.email}</h4>
				</div>
				<div>
					<h3 className="myBoxBackground mb-2 pb-1">My Posts</h3>
					<ul className="list-group">
						{myPosts.map((postTitle, index) => (
							<li key={index}>
								<div class="card mb-3 cardContainer">
									<div class="row g-0">
										<div class="col-md-5">
											<img src={avatarImage} class="img-fluid rounded-start" alt="..."/>
											<div className="buttonProfile">
												<button type="button" class="btn btn-secondary btn-sm">Small button</button>
											</div>
										</div>
										<div class="col-md-7">
											<div class="card-body">
												<div className="container d-flex justify-content-between m-2">
													<h4 class="card-title"><strong>{postTitle}</strong></h4>
													<a href="..." className="iconLink">
														<i class="far fa-bookmark pe-2 fs-3 "></i>
													</a>
												</div>
												<p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
												<p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
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