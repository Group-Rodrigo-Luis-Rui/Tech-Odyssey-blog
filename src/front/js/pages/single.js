import React, { useState, useEffect, useContext } from "react";
import backgroundurl from "../../img/backgroundimage2.jpg";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/single.css"

export const Single = (props) => {
	const { store, actions } = useContext(Context);
	const params = useParams();
	console.log(params.uid);

	const [comments, setComments] = useState([]);
	const [post, setPost] = useState([]);
	const [addComment, setAddComment] = useState("");
	const [name, setName] = useState();
	const [nameUser, setNameUser] = useState();
	const [posts, setPosts] = useState([]);
	const [imageUser, setImageUser] = useState("");
	const [isAddedToReadings, setIsAddedToReadings] = useState(false);
	// const data = `lorem ipsum <img src="" />`;
	const userID = localStorage.getItem("userID");

	const getSinglePost = () => {
		fetch(process.env.BACKEND_URL + "/api/post/" + params.uid, {
		method: "GET",
		headers: {
			"Content-Type": "application/json",
		},
		})
		.then((res) => {
			if (!res.ok) throw Error(res.statusText);
			return res.json();
		})
		.then((response) => {
			console.log(response);
			setPost(response);
			setComments(response.comments);
			setName(response.name);
		})
		.catch((error) => console.error(error));
	};
	console.log(process.env.BACKEND_URL + "/api/post/" + params.uid);

	const postComment = () => {
		fetch(process.env.BACKEND_URL + "/api/comment/", {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify({
			user_id: store.userId,
			post_id: post.id,
			text: addComment,
		}),
		})
		.then((res) => {
			if (!res.ok) throw Error(res.statusText);
			return res.json();
		})
		.then((response) => {
			console.log(response);
			setComments([...comments, response]);
			setAddComment("");
		})
		.catch((error) => console.error(error));
	};
	console.log(process.env.BACKEND_URL + "/api/comment/");

	const deleteComment = (commentID) => {
		fetch(process.env.BACKEND_URL + "/api/comment/" + commentID, {
		method: "DELETE",
		headers: {
			"Content-Type": "application/json",
		},
		})
		.then((res) => {
			if (!res.ok) throw Error(res.statusText);
			return res.json();
		})
		.then((response) => {
			console.log(response);
		})
		.catch((error) => console.error(error));
	};
	// const addReadings = (postID) => {
	// 	fetch(process.env.BACKEND_URL + "/api/myreading", { 
	// 		method: "POST",
	// 		headers: { 
	// 			"Content-Type": 
	// 			"application/json" 
	// 		},
	// 		body: JSON.stringify({ user_id: store.userId, post_id: postID })
	// 	})
	// 	.then((res) => res.json())
	// 	.then((result) => {
	// 		console.log('Added to My Readings:', result);
	// 		setIsAddedToReadings(true);

	// 	}).catch((err) => {
	// 		console.log(err);
	// 	})
	// 	console.log('add to my readings');
	// }
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
			setNameUser(result.name);
			setEmail(result.email);
			setImageUser(result.user_image);
		})
		.catch((err) => {
			console.log(err);
		});
	}

	useEffect(() => {
		getSinglePost();
		getOneUser();
		Promise.all(
		comments.map((comment) => getUserData(comment.user_id))
		).then((userResponses) => {
		setComments(
			comments.map((comment, index) => ({
			...comment,
			name: userResponses[index],
			}))
		);
		});
		const initialAddedToReadings = posts.reduce((acc, post) => {
			acc[post.id] = false;
			return acc;
		}, {});
		setIsAddedToReadings(initialAddedToReadings);
	}, []);

	return (
		<div className="container-fluid background main-container" style={{ backgroundImage: "url(" + backgroundurl + ")" }}>
			<div className="container-fluid  d-flex justify-content-center backgroundSingle">
				<div className="container-card card-single">
					<div className="card-body-single TextSingle">
						<h2 className="card-title">{post.title}</h2>
						<h5 className="card-subtitle TextSingle"><strong>Abstract</strong></h5>
						<p className="abstract mt-2  pb-2">{post.abstract}</p>
						<pre className="TextSingle">
							<p>
							<strong>Posted by: </strong>{nameUser}</p>
							<p>
							<strong>Date created: </strong>{post.date_created}
							</p>
						</pre>
						<img src={post.image_post} className="card-img-top" alt="..." />
						<div className="mainTextSingle" dangerouslySetInnerHTML={{ __html: post.main_text }}></div>	
					</div>
				</div>
			</div>
			<div className="container-card comments-single">
				<h3 className="comments-title">Comments:</h3>
				<div className="single-comments">
					{comments.map((comment) => (
						<div key={comment.id}>
							<div className="name">{name}</div>
						<p>{comment.text}</p>
						<div className="d-flex justify-content-end">
						{comment.user_id ? userID: (
							<button
								className="btn commentbtn"
								type="button"
								onClick={() => {
								deleteComment(comment.id);
								getSinglePost();
								}}
							>
								<i className="fa-solid fa-trash"></i>
							</button>
							)}
						</div>
						</div>
					))}
				</div>
				<div className="mb-3">
				<label htmlFor="exampleFormControlTextarea1" className="form-label">
					Make a comment
				</label>
				<textarea
					value={addComment}
					onChange={(e) => setAddComment(e.target.value)}
					className="form-control"
					id="exampleFormControlTextarea1"
					placeholder="Add a comment"
					rows="3"
				></textarea>
				<button className="btn ms-1 mt-3" type="button" onClick={() => { postComment(); getSinglePost(); }}>
					Comment
				</button>
				</div>
			</div>
		</div>
	);
	};
