import React, { useState, useEffect, useContext } from "react";
import backgroundurl from "../../img/backgroundimage2.jpg"
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";



export const Single = props => {
	 const { store, actions } = useContext(Context);
	const params = useParams();
	console.log(params.uid);

	const [comments,setComments] = useState([]);
	const [post,setPost] = useState([]);
	const [addComment,setAddComment] = useState('')
	

	const getSinglePost =()=>{
		fetch(process.env.BACKEND_URL + "/api/post/" + params.uid, {
			method: 'GET',
			headers:{
				'Content-Type': 'application/json'
			}
		})
		.then(res => {
			if (!res.ok) throw Error(res.statusText);
			return res.json();
		})
		.then(response => {
			setPost(response)
			setComments(response.comments);
		})
		.catch(error => console.error(error));
	
	}
	console.log(process.env.BACKEND_URL + "/api/post/" + params.uid);

	const postComment =()=>{
		fetch(process.env.BACKEND_URL + "/api/comment/", {
			method: 'POST',
			headers:{
				'Content-Type': 'application/json'
			},
			body:JSON.stringify({
				user_id:store.userId,
				post_id:post.id,
				text: addComment
			})
		})
		.then(res => {
			if (!res.ok) throw Error(res.statusText);
			return res.json();
		})
		.then(response => {
			console.log(response);
		})
		.catch(error => console.error(error));
	
	}
	console.log(process.env.BACKEND_URL + "/api/comment/");

	const deleteComment = (commentID) => {
		fetch(process.env.BACKEND_URL + "/api/comment/" + commentID, {
			method: 'DELETE',
			headers: {
				'Content-Type': 'application/json'
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

	useEffect(()=>{
		getSinglePost()
	},[])

	return (
		<div className="container-fluid background main-container" style={{backgroundImage:'url(' + backgroundurl + ')'}}>
			<div className="container-fluid  d-flex justify-content-center mt-5">
				<div className="container-card card-single">
					<div className="card-body-single">
						<h2 className="card-title">{post.title}</h2>
						<h4 className="card-subtitle mb-2">{post.category}</h4>
						<p className="abstract">{post.abstract}</p>
						<p><strong>Posted by:</strong> Robert Julius</p>
						<p><strong>Date:</strong> {post.date_created}</p>
						<div className="comments d-flex justify-content-start">
							<button type="button" className="btn-comments">
								<i class="fa-regular fa-comment me-3"></i>
							</button>
							Comments
							<button type="button" className="btn-comments">
							<i class="fa-regular fa-bookmark ms-5 me-3"></i>
							</button>
							Add to my readings
						</div>
						<img
							src="https://images.unsplash.com/photo-1517336714731-489689fd1ca8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YXBwbGUlMjBsYXB0b3B8ZW58MHx8MHx8fDA%3D&w=1000&q=80" 
							alt="Description of the image" 
							className="single-image"
						/>
						<p className="card-text">
							{post.main_text}
						</p>
					</div>
				</div>
			</div>
			<div className="container-card card-single">
				<h3 className="comments-title">Comments:</h3>
				<div className="single-comments">
					(user) {comments.map(comment=>{
						return(
							<p>{comment.text} 
								<div className="d-flex justify-content-end">
									<button className="btn" type="button" onClick={()=>{
										deleteComment(comment.id);
										getSinglePost();}}
									>
									<i class="fa-solid fa-trash"></i>
									</button>
								</div>
							</p>
						)
					})}
				</div>
				<div className="mb-3">
					<label for="exampleFormControlTextarea1" class="form-label">Make a comment</label>
					<textarea value={addComment} onChange={(e)=> setAddComment(e.target.value)} className="form-control" id="exampleFormControlTextarea1" placeholder="Add a comment"
					rows="3"></textarea>
					<button className="btn ms-1 mt-3" type="button" onClick={()=>{
						postComment();
						getSinglePost();}}>
						Comment
					</button>
				</div>
			</div>
		</div>
	);
};
