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
					<h4>Email: {user.email}</h4>
				</div>
				<div>
					<h3 className="myBoxBackground mb-2 pb-1">My Posts</h3>
					<ul className="list-group">
						{myPosts.map((postTitle, index) => (
							<li key={index} className="list-group-item">{postTitle}</li>
						))}
					</ul>
				</div>
			</div>
		</div>
	);
};