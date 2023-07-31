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
			<div className="row text-center mt-5" >
				<div className="card-carousel-header d-flex">
					<div class="card col-6 card-top me-2">
						<div class="card-body">
							<img src="https://images.unsplash.com/photo-1480506132288-68f7705954bd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTk3fHxoaWdoJTIwdGVjaHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60" class="card-img-top" alt="..."/>
							<h5 class="card-title">Card title</h5>
							<p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
							<a href="#" class="btn btn-primary">Go somewhere</a>
						</div>
					</div>
					{/* carousel*/}
					<div id="carouselExampleControls" class=" col-6 carousel slide d-block " data-bs-ride="carousel">
						<div class="carousel-inner">
							<div class="carousel-indicators">
								<button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
								<button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
								<button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
							</div>
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
					<div className="cardtitle mt-5">
						<h4>Title</h4>
					</div>
				{/* scrolling cards*/}
				<div className="scrolling-container mt-1">
					{cards.map(src => (
						<div
							key={src}
							className="mt-3 me-3 "
							style={{
							}}
						>
							<div className="card2 row">
								<div className="img col-6">
									<img src="https://images.unsplash.com/photo-1470350576089-539d5a852bf7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjA1fHxoaWdoJTIwdGVjaHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60" class="card-img-top" alt="..."/>
									{/* fontAwsome icons (like, heart and favorites)*/}
									<div className="font">
										<a href="#" className=" col-2 mt-2 ms-2 mt-1">
											<i class="me-0 fa solid fa-thumbs-up"></i>
										</a>
									</div>
									<div className="font1">
										<a href="#" className="col-2 mt-2 ms-2 mt-1">
											<i class="me-0 fa-solid fa-heart"></i>
										</a>
									</div>
									<div className="font2">
										<a href="#" className="col-2 mt-2 ms-2 mt-1">
										<i class="me-0 fa duotone fa-bookmark"></i>
										</a>
									</div>
									<div className="readmore">
										<a href="#" className="btn col btn-primary">
										Read More
										</a>
									</div>
								</div>
								<div className="col-6 text">
									<h5 className="card-title">Card title</h5>
									<p>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};
