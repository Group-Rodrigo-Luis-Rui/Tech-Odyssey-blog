import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import backgroundurl from "../../img/background.jpg"
import { Link } from "react-router-dom";
import MovingComponent from "../component/movingcomponent";


export const Home = () => {

	const { store, actions } = useContext(Context);

	const Letters = ["W","e","l","c","o","m","e","-","T","o",
	"-","T","h","e","-","T","e","c","h","-","W","o","r","l","d"];
	
	const Title1 = ["C","o","m","p","u","t","e","r","s"];
	const Title2 = ["M","o","v","i","e","-","T","e","c","h"];

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
	const [scrollPosition, setScrollPosition] = useState(0);
	const [scrollPositions1, setScrollPositions1] = useState(
		Array(cards.length).fill(0)
	);
	const [scrollPositions2, setScrollPositions2] = useState(
		Array(cards.length).fill(0)
	);

	// Function to scroll the specific container to the left
	const scrollLeft = (containerIndex, setScrollPositions) => {
		if (setScrollPositions[containerIndex] > 0) {
			setScrollPositions((prevPositions) => {
			const newPositions = [...prevPositions];
			newPositions[containerIndex] -= 90;
			return newPositions;
			});
		}
		console.log("Scrolling left", containerIndex);
	};

	// Function to scroll the specific container to the right
	const scrollRight = (containerIndex, setScrollPositions) => {
		if (setScrollPositions[containerIndex] < (cards.length - 1) * 90) {
			setScrollPositions((prevPositions) => {
			const newPositions = [...prevPositions];
			newPositions[containerIndex] += 90;
			return newPositions;
			});
		}
		console.log("Scrolling right", containerIndex);
	};

	return (
		<div  className="container-fluid background" style={{backgroundImage:'url(' + backgroundurl + ')'}}>
			<div className="row text-center mt-5 d-flex justify-content-center" >
				<div className="letters-card">
					{Letters.map((letter, index) => (
						<MovingComponent
							key={index}
							type="effect3D"
							duration="1100ms"
							delay={index * 100 + "ms"} // Corrected delay syntax
							direction="alternate-reverse"
							timing="ease"
							iteration="infinite"
							fillMode="both"
						>
							{letter}
						</MovingComponent>
					))}
		  		</div>
				<div className="card-carousel-header d-flex">
					<div class="card col-6 card-top me-2">
						<div class="card-body">
							<img src="https://static.vecteezy.com/system/resources/previews/006/430/145/original/technology-background-concept-circuit-board-electronic-system-futuristic-hi-tech-light-on-dark-blue-free-vector.jpg" class="card-img-top" alt="..."/>
							<div className="row">
								<div className="col-6">
									<h5 class="card-title">Card title</h5>
									<p class="card-text">Some quick example text to build on
										the card title and make up the bulk of the card's content.
									</p>
								</div>
								<div className="col-6">
									<h5 class="card-title">Card title</h5>
									<p class="card-text">Some quick example text to build on
										the card title and make up the bulk of the card's content.
									</p>
								</div>
							</div>
						</div>
					</div>
					{/* carousel*/}
					<div id="carouselExampleControls" class=" col-6 carousel slide d-block " data-bs-ride="carousel">
						<div className="carousel-inner">
							<div className="carousel-indicators">
								<button type="button" data-bs-target="#carouselExampleIndicators"
									data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1">
								</button>
								<button type="button" data-bs-target="#carouselExampleIndicators"
									data-bs-slide-to="1" aria-label="Slide 2">
								</button>
								<button type="button" data-bs-target="#carouselExampleIndicators"
									data-bs-slide-to="2" aria-label="Slide 3">
								</button>
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
							<h5>Here you will find</h5>
							Everything you must to know about tech
							<p>And much more...</p>
						</div>
					</div>
					<div className="cardtitle mt-5">
					{Title1.map((Title1, index) => (
						<MovingComponent
							key={index}
							type="effect3D"
							duration="1100ms"
							delay={index * 100 + "ms"}
							direction="alternate-reverse"
							timing="ease"
							iteration="infinite"
							fillMode="both"
						>
							{Title1}
						</MovingComponent>
					))}
					</div>
				{/* scrolling cards*/}
				<div className="scrolling-container mt-1">
					{cards.map((src,index) => (
						<div
							key={src}
							className="mt-3 me-3 sliding-card"
							style={{
								transform: `translateX(${-scrollPositions1[index]}px)`,}}
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
										<Link to={"/single"}>
											<button className="btn col ">
												Read More
											</button>
										</Link>
									</div>
								</div>
							</div>
						</div>					
					))}	
					{/* Scroll buttons */}
					<button className="scroll-control-prev" type="button" onClick={() => scrollLeft(0, setScrollPositions1)}>
						<span className="carousel-control-prev-icon" aria-hidden="true"></span>
						<span className="visually-hidden">Previous</span>
					</button>
					<button className="scroll-control-next" type="button" onClick={() => scrollRight(0, setScrollPositions1)}>
						<span className="carousel-control-next-icon" aria-hidden="true"></span>
						<span className="visually-hidden">Next</span>
					</button>
				</div>
				<div className="cardtitle">
					{Title2.map((Title2, index) => (
						<MovingComponent
							key={index}
							type="effect3D"
							duration="1100ms"
							delay={index * 100 + "ms"}
							direction="alternate-reverse"
							timing="ease"
							iteration="infinite"
							fillMode="both"
						>
							{Title2}
						</MovingComponent>
					))}
					</div>
				{/* scrolling cards*/}
				<div className="scrolling-container mt-1">
					{cards.map((src, index) => (
						<div
							key={src}
							className="mt-3 me-3 sliding-card"
							style={{
								// Calculate the transform based on the scroll position
								transform: `translateX(${(index - scrollPositions2) * 10}px)`,
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
										<Link to={"/single"}>
											<button className="btn col ">
												Read More
											</button>
										</Link>
									</div>
								</div>
							</div>
						</div>					
					))}	
					{/* Scroll buttons */}
					<button className="scroll-control-prev" type="button" onClick={() => scrollLeft(0, setScrollPositions2)}>
						<span className="carousel-control-prev-icon" aria-hidden="true"></span>
						<span className="visually-hidden">Previous</span>
					</button>
					<button className="scroll-control-next" type="button" onClick={() => scrollRight(0, setScrollPositions2)}>
						<span className="carousel-control-next-icon" aria-hidden="true"></span>
						<span className="visually-hidden">Next</span>
					</button>
				</div>
			</div>
		</div>
	);
};
