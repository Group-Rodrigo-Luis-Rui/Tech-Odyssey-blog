import React, { useContext } from "react";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import "../../styles/home.css";

export const Home = () => {
	const { store, actions } = useContext(Context);

	const cards = [
		"/card1",
		"/card2",
		"/card3",
		"/card4",
		"/card5",
		"/card6",
		"/card7",
		"/card8",
	  ];

	return (
		<div className="row text-center mt-5">
			<div class="card col-6 ">
				<div class="card-body">
					<h5 class="card-title">Card title</h5>
					<p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
					<a href="#" class="btn btn-primary">Go somewhere</a>
				</div>
			</div>
			<div id="carouselExampleControls" class=" col-6 carousel slide d-block w-50 " data-bs-ride="carousel">
				<div class="carousel-inner">
					<div class="carousel-item active">
						<img src="https://img.freepik.com/free-photo/technology-human-touch-background-modern-remake-creation-adam_53876-129794.jpg?size=626&ext=jpg&ga=GA1.1.849661921.1679516116&semt=sph" class="d-block w-100" alt="..."/>
					</div>
					<div class="carousel-item">
						<img src="https://img.freepik.com/free-photo/rpa-concept-with-blurry-hand-touching-screen_23-2149311914.jpg?size=626&ext=jpg&ga=GA1.1.849661921.1679516116&semt=sph" class="d-block w-100" alt="..."/>
					</div>
					<div class="carousel-item">
						<img src="https://img.freepik.com/free-photo/man-hand-holding-virtual-world-with-internet-connection-metaverse-global-business-marketing-banking-financial-pass-thru-application-technology-concept_616485-32.jpg?size=626&ext=jpg&ga=GA1.1.849661921.1679516116&semt=sph" class="d-block w-100" alt="..."/>
					</div>
				</div>
				<button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
					<span class="carousel-control-prev-icon" aria-hidden="true"></span>
					<span class="visually-hidden">Previous</span>
				</button>
				<button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
					<span class="carousel-control-next-icon" aria-hidden="true"></span>
					<span class="visually-hidden">Next</span>
				</button>
				</div>

			<div className="scrolling-container mt-5">
				{cards.map(src => (
					<div
						key={src}
						className="card2 mt-3 me-3 "
						style={{
							backgroundImage: `url(${src})`
						}}
					>
						<div className="">
							<div className="card-body2">
								<h5 className="card-title">Card title</h5>
								<p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
								<a href="#" className="btn btn-primary">Go somewhere</a>
							</div>
						</div>
					</div>
				))}
			</div>
			<div className="scrolling-container mt-5">
				{cards.map(src => (
					<div
						key={src}
						className="card2 mt-3 me-3 "
						style={{
							backgroundImage: `url(${src})`
						}}
					>
						<div className="">
							<div className="card-body2">
								<h5 className="card-title">Card title</h5>
								<p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
								<a href="#" className="btn btn-primary">Go somewhere</a>
							</div>
						</div>
					</div>
				))}
			</div>
			<div className="scrolling-container mt-5">
				{cards.map(src => (
					<div
						key={src}
						className="card2 mt-3 me-3 "
						style={{
							backgroundImage: `url(${src})`
						}}
					>
						<div className="">
							<div className="card-body2">
								<h5 className="card-title">Card title</h5>
								<p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
								<a href="#" className="btn btn-primary">Go somewhere</a>
							</div>
						</div>
					</div>
				))}
			</div>
			<div className="scrolling-container mt-5">
				{cards.map(src => (
					<div
						key={src}
						className="card2 mt-3 me-3 "
						style={{
							backgroundImage: `url(${src})`
						}}
					>
						<div className="">
							<div className="card-body2">
								<h5 className="card-title">Card title</h5>
								<p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
								<a href="#" className="btn btn-primary">Go somewhere</a>
							</div>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};
