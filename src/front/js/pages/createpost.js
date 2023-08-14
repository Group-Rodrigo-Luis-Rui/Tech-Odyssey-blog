import React, { useState } from "react";
import { Link } from "react-router-dom";
import backgroundimage from "../../img/backgroundimage.jpg";
import "../../styles/createpost.css";

export const Createpost = () => {

	const [title, setTitle] = useState("");
	//category ??
	const [abstract, setAbstract] = useState("");
	const [mainText, setMainText] = useState("");

	const createpost = () => {
		if(title === "" || title.length > 60){
			alert("Please insert the title with a maximum of 60 characters");
		} else if (abstract === "" || abstract.length > 300){
			alert ("Please insert the abstract with a maximum of 300 characters");
		} else if (mainText === "" || title.length > 5000) {
			alert ("Please insert the text with a maximum of 5000 characters");
		} else {

			const postData = {
				"title": title,
				// "category": Category,
				"abstract": abstract,
				"main_text": mainText,
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
				setTitle();
				// setCategory();
				setEmail();
				setPassword();
			}).catch((err) => {
				console.error("There was an ERROR LOGGIN IN!!", err);
			});
		};
	}

	const cancelPost = () => {
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
								<select className="form-control" id="exampleFormControlSelect1">
									<option value="" selected disabled hidden>Choose here</option>
									<option value="1">Computers</option>
									<option value="2">Movie Tech</option>
									<option value="3">AI - Artificial intelligence</option>
									<option value="4">EV Mobility</option>
									<option value="5">Other Stuff</option>
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
										<input type="file" className="form-control d-none" id="customFile1" />
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
								<button type="submit" className="btn me-5 buttonCreate" onClick={createpost} >
									Create
								</button>
								<button className="btn btn-default btn-danger" onClick={cancelPost}>
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