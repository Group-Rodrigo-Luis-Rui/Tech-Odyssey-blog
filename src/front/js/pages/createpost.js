import React, { useState } from "react";
import { Link } from "react-router-dom";
import backgroundimage from "../../img/backgroundimage2.jpg";
import "../../styles/createpost.css";

export const Createpost = () => {
	
	const [title, setTitle] = useState("");
	const [category, setCategory] = useState("");
	const [abstract, setAbstract] = useState("");
	const [mainText, setMainText] = useState("");
	const [image, setImage] = useState(null);
	const [imageURL, setImageURL] = useState("");

	const uploadImage = async () => {
		const formData = new FormData();
		formData.append("file", image);
		try {
			const res = await fetch(
				`https://api.cloudinary.com/v1_1/${process.env.CLOUDINARY_CLOUD_NAME}/image/upload?upload_preset=${process.env.CLOUDINARY_UPLOAD_PRESET}`,
				{
				method: "POST",
				body: formData,
				}
			);
			const data = await res.json();
				console.log(data.secure_url);
				setImageURL(data.secure_url);
			} catch (error) {
			console.error("Error uploading image:", error);
		}
	};

	const createpost =  (event) => {
		event.preventDefault()
		// await uploadImage();
		const confirmDelete = window.confirm("Have you finished creating the new post?");
		if (!confirmDelete) {
			return;
		}
		if(title === "" || title.length > 60){
			alert("Please insert the title with a maximum of 60 characters");
		} else if (category === ""){
			alert ("Please choose a category");
		} else if (abstract === "" || abstract.length > 300){
			alert ("Please insert the abstract with a maximum of 300 characters");
		} 
		else if (imageURL === ""){
			alert ("Please insert an image");
		} 
		else if (mainText === "" || title.length > 5000) {
			alert ("Please insert the text with a maximum of 5000 characters");
		} else {
			
			const user_id = localStorage.getItem("userID");

			const postData = {
				"user_id": user_id,
				"title": title,
				"category": category,
				"abstract": abstract,
				"main_text": mainText,
				"image_post": imageURL
			}

			fetch(process.env.BACKEND_URL + "/api/post", { 
				method: "POST",
				headers: { 
					"Content-Type": 
					"application/json" 
				},
				body: JSON.stringify(postData) 
			})
			.then((res) => res.json())
			.then((result) => {
				console.log(result);
				setTitle("");
				setCategory("");
				setAbstract("");
				setMainText("");
				alert("Post successfully created!")
			}).catch((err) => {
				console.error(err);
			});
		};
	}

	const cancelPost = () => {
		const confirmDelete = window.confirm("Are you sure you to stop creating the new post? Everything will be lost. Do you want to continue?");
		if (!confirmDelete) {
			return;
		}
		setTitle("");
		// setCategory();
		setAbstract("");
		setMainText("");
	}

	return (
		<div className="backgroundcreate" style={{backgroundImage:'url(' + backgroundimage + ')'}}>
			<div className="container textBackgroundcreate">
				<div className="row">
					<div className="col-12">
						<h1>Create post</h1>
						<form action="" method="POST">
							<div className="form-group mb-4">
								<label for="title" className="mb-1 titlesText">Title</label>
								<input 
									type="text" required
									className="form-control textAreaCreate" 
									name="title" 
									placeholder="Max 100 characters" 
									value={title}
									onChange={(e)=> setTitle(e.target.value)}
								/>
							</div>
							<div className="form-group mb-4">
								<label for="exampleFormControlSelect1" className="mb-1 titlesText">Select category</label>
								<select 
									className="form-control" 
									id="exampleFormControlSelect1"
									required
									value={category}
									onChange={(e) => setCategory(e.target.value)}
								>
									<option value="" disabled hidden>Choose here</option>
									<option value="COM">Computers</option>
									<option value="MT">Movie Tech</option>
									<option value="AI">AI - Artificial intelligence</option>
									<option value="EV">EV Mobility</option>
									<option value="OTHER">Other Stuff</option>
								</select>
							</div>
							<div className="form-group mb-4">
								<label for="description" className="mb-1 titlesText">Abstract</label>
								<textarea rows="4" className="form-control textAreaCreate" 
									name="description" 
									placeholder="Max 300 characters"
									value={abstract}
									onChange={(e)=> setAbstract(e.target.value)}
								></textarea>
							</div>
							<div>
								<div class="d-flex justify-content-left mb-4">
									<div class="btn btn-light btn-rounded buttonCreate">
										<label class="form-label m-1" for="customFile1">Choose file</label>
										<input type="file" className="form-control d-none" id="customFile1" onChange={(e) => {setImage(e.target.files[0])}}/>
									</div>
									<div>
										<p class="pt-2 ms-3 titlesText">Insert image</p>
									</div>
								</div>
							</div>
							<div className="form-group mb-4">
								<label for="description" className="mb-1 titlesText">My text</label>
								<textarea rows="30" className="form-control textAreaCreate" 
									name="description" 
									placeholder="Max 5000 characters"
									value={mainText}
									onChange={(e)=> setMainText(e.target.value)}
								></textarea>
							</div>
							<div className="form-group d-flex justify-content-center">
								<button type="submit" 
										className="btn me-5 buttonCreate" 
										onClick={event => {
											createpost(event);
											uploadImage(image);
										}} >
									Create
								</button>
								<button className="btn btn-default btn-danger cancelButtonCreate" onClick={cancelPost}>
									Cancel
								</button>
							</div>
						</form>
					</div>
				</div>
			</div>
		</div>
	);
};