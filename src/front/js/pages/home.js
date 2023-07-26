import React, { useContext } from "react";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import backgroundurl from "../../img/background.jpg"
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
		<div  className="background" style={{backgroundImage:'url(' + backgroundurl + ')'}}>
			<div className="row text-center" >
				<div className="card-carousel-header d-flex">
					<div class="card col-6 card-top">
						<div class="card-body">
							<h5 class="card-title">Card title</h5>
							<p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
							<a href="#" class="btn btn-primary">Go somewhere</a>
						</div>
					</div>
					<div id="carouselExampleControls" class=" col-6 carousel slide d-block " data-bs-ride="carousel">
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
								<img src="https://images.unsplash.com/photo-1470350576089-539d5a852bf7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjA1fHxoaWdoJTIwdGVjaHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60" class="card-img-top" alt="..."/>
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
								<div className="card2">
								<img src="..." class="card-img-top" alt="..."/>
									<h5 className="card-title">Card title</h5>
									<p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
									<a href="#" className="btn btn-primary">Go somewhere</a>
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
								<img src="..." class="card-img-top" alt="..."/>
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
								<img src="https://images.unsplash.com/photo-1487017159836-4e23ece2e4cf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTU0fHxoaWdoJTIwdGVjaHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60" class="card-img-top" alt="..."/>
									<h5 className="card-title">Card title</h5>
									<p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
									<a href="#" className="btn btn-primary">Go somewhere</a>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};
