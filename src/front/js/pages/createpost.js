import React from "react";
import { Link } from "react-router-dom";
import backgroundimage from "../../img/backgroundimage.jpg";
import "../../styles/createpost.css";

export const Createpost = () => {

	return (
		<div className="backgroundcreate" style={{backgroundImage:'url(' + backgroundimage + ')'}}>
			<div className="container textBackgroundcreate">
				<div className="row">
					<div className="col-12">
						<h1>Create post</h1>
						<form action="" method="POST">
							<div className="form-group mb-4">
								<label for="title" className="mb-1 titlesText">Title</label>
								<input type="text" className="form-control textAreaCreate" name="title" placeholder="Max 100 characters" />
							</div>
							<div className="form-group mb-4">
								<label for="exampleFormControlSelect1" className="mb-1 titlesText">Select category</label>
								<select className="form-control textAreaCreate optionText" id="exampleFormControlSelect1">
									<option>Choose one</option>
									<option>Computers</option>
									<option>Movie Tech</option>
									<option>AI - Artificial intelligence</option>
									<option>EV Mobility</option>
									<option>Other Stuff</option>
								</select>
							</div>
							<div className="form-group mb-4">
								<label for="description" className="mb-1 titlesText">Abstract</label>
								<textarea rows="4" className="form-control textAreaCreate" name="description" placeholder="Max 300 characters"></textarea>
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
								<textarea rows="50" className="form-control textAreaCreate" name="description" placeholder="Max 5000 characters"></textarea>
							</div>
							<div className="form-group d-flex justify-content-center">
								<button type="submit" className="btn me-5 buttonCreate">
									Create
								</button>
								<button className="btn btn-default btn-danger">
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