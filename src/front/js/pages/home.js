import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import backgroundurl from "../../img/background.jpg"
import { Link } from "react-router-dom";
export const Home = () => {

	const { store, actions } = useContext(Context);
	const [scrollPosition, setScrollPosition] = useState(0);

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


	  // Function to scroll the cards to the left
	const scrollLeft = () => {
		if (scrollPosition > 0) {
		setScrollPosition((prevPosition) => prevPosition - 90);
	  }
	};
	
	  // Function to scroll the cards to the right
	  const scrollRight = () => {
		if(scrollPosition < (cards.length * 45.5)){
			setScrollPosition((prevPosition) => prevPosition + 90);
		}
	  };

	return (
			<div  className="container-fluid background" style={{backgroundImage:'url(' + backgroundurl + ')'}}>
				<div className="row text-center mt-5" >
					<div className="card-carousel-header d-flex">
						<div class="card col-6 card-top me-2">
							<div class="card-body">
								<img src="https://static.vecteezy.com/system/resources/previews/006/430/145/original/technology-background-concept-circuit-board-electronic-system-futuristic-hi-tech-light-on-dark-blue-free-vector.jpg" class="card-img-top" alt="..."/>
								<div className="row">
									<div className="col-6">
										<h5 class="card-title">Card title</h5>
										<p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
									</div>
									<div className="col-6">
										<h5 class="card-title">Card title</h5>
										<p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
									</div>
								</div>
							</div>
						</div>
						{/* carousel*/}
						<div id="carouselExampleControls" class=" col-6 carousel slide d-block " data-bs-ride="carousel">
							<div className="carousel-inner">
								<div className="carousel-indicators">
									<button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
									<button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
									<button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
								</div>
								<div className="carousel-item active">
									<img src="https://img.freepik.com/free-photo/technology-human-touch-background-modern-remake-creation-adam_53876-129794.jpg?size=626&ext=jpg&ga=GA1.1.849661921.1679516116&semt=sph" class="d-block w-100" alt="..."/>
								</div>
								<div className="carousel-item">
									<img src="https://img.freepik.com/free-photo/rpa-concept-with-blurry-hand-touching-screen_23-2149311914.jpg?size=626&ext=jpg&ga=GA1.1.849661921.1679516116&semt=sph" class="d-block w-100" alt="..."/>
								</div>
								<div className="carousel-item">
									<img src="https://img.freepik.com/free-photo/man-hand-holding-virtual-world-with-internet-connection-metaverse-global-business-marketing-banking-financial-pass-thru-application-technology-concept_616485-32.jpg?size=626&ext=jpg&ga=GA1.1.849661921.1679516116&semt=sph" className="d-block w-100" alt="..."/>
								</div>
							</div>
							<button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
								<span className="carousel-control-prev-icon" aria-hidden="true"></span>
								<span className="visually-hidden">Previous</span>
							</button>
							<button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
								<span className="carousel-control-next-icon" aria-hidden="true"></span>
								<span className="visually-hidden">Next</span>
							</button>
							</div>
						</div>
						<div className="container-fluid">
							<div className="cardmiddle" style={{ backgroundImage: 'url("https://imageio.forbes.com/specials-images/imageserve/61d52d4e3a76ed81ac034ea8/0x0.jpg?format=jpg&width=1200")' }}>
								Everything you have to know about tech
							</div>
						</div>
						<div className="cardtitle mt-5">
							<h4>Title</h4>
						</div>
					{/* scrolling cards*/}
					<div className="scrolling-container mt-1">
						{cards.map((src, index) => (
							<div
								key={src}
								className="mt-3 me-3 sliding-card"
								style={{
									// Calculate the transform based on the scroll position
									transform: `translateX(${(index - scrollPosition) * 10}px)`,
								}}
							>
								<div className="card2 row">
									<div className="img col-6">
										<img src="https://images.unsplash.com/photo-1470350576089-539d5a852bf7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjA1fHxoaWdoJTIwdGVjaHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60" class="card-img-top" alt="..."/>
										<figcaption className="fig position-absolute bottom-0 start-0 p-3">
											<p>something</p>
										</figcaption>
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
									</div>
									<div className="col-6 text">
										<h5 className="card-title">Card title</h5>
										<p>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
										<div className="readmore">
											<Link to={"/single/1"}>
												<button className="btn col btn-primary">
													Read More
												</button>
											</Link>
										</div>
									</div>
								</div>
							</div>					
						))}	
						{/* Scroll buttons */}
						<button className="scroll-control-prev" type="button" onClick={scrollLeft}>
							<span className="carousel-control-prev-icon" aria-hidden="true"></span>
							<span className="visually-hidden">Previous</span>
						</button>
						<button className="scroll-control-next" type="button" onClick={scrollRight}>
							<span className="carousel-control-next-icon" aria-hidden="true"></span>
							<span className="visually-hidden">Next</span>
						</button>			
					</div>
				</div>
			</div>
	);
};
