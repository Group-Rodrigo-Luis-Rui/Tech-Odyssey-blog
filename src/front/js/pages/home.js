import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import backgroundurl from "../../img/background.jpg"
import { Link } from "react-router-dom";
import MovingComponent from "../component/movingcomponent";


export const Home = () => {

	fetch('process.env', {
		method: 'PUT', // or 'POST'
		body: JSON.stringify(data), // data can be a `string` or  an {object} which comes from somewhere further above in our application
		headers:{
			'Content-Type': 'application/json'
		}
	})
	.then(res => {
		if (!res.ok) throw Error(res.statusText);
		return res.json();
	})
	.then(response => console.log('Success:', response))
	.catch(error => console.error(error));

	const { store, actions } = useContext(Context);

	const Letters = ["W","e","l","c","o","m","e","-","T","o",
	"-","T","h","e","-","T","e","c","h","-","W","o","r","l","d"];
	
	const Title1 = ["C","o","m","p","u","t","e","r","s"];
	const Title2 = ["M","o","v","i","e","-","T","e","c","h"];
	const Title3 = ["A","I","-","T","e","c","h","n","o","l","o","g","y"];
	const Title4 = ["E","V","-","M","o","b","i","l","i","t","y"];
	const Title5 = ["O","t","h","e","r","-","S","t","u","f","f"];

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
	const cards2 = [
		"/card1",
		"/card2",
		"/card3",
		"/card4",
		"/card5",
		"/card6",
		"/card7",
		"/card8",
	];
	const cards3 = [
		"/card1",
		"/card2",
		"/card3",
		"/card4",
		"/card5",
		"/card6",
		"/card7",
		"/card8",
	];
	const cards4 = [
		"/card1",
		"/card2",
		"/card3",
		"/card4",
		"/card5",
		"/card6",
		"/card7",
		"/card8",
	];
	const cards5 = [
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
	const [scrollPositions2, setScrollPositions2] = useState(0);
	const [scrollPositions3, setScrollPositions3] = useState(0);
	const [scrollPositions4, setScrollPositions4] = useState(0);
	const [scrollPositions5, setScrollPositions5] = useState(0);

	  // Function to scroll the cards to the left
	const scrollLeft = (className) => {
        if (className === "container1" && scrollPosition > 0) {
            setScrollPosition(prevPosition => prevPosition - 90);
        } else if (className === "container2" && scrollPositions2 > 0) {
            setScrollPositions2(prevPosition => prevPosition - 90);
        } else if (className === "container3" && scrollPositions3 > 0) {
            setScrollPositions3(prevPosition => prevPosition - 90);
        } else if (className === "container4" && scrollPositions4 > 0) {
            setScrollPositions4(prevPosition => prevPosition - 90);
        } else if (className === "container5" && scrollPositions5 > 0) {
            setScrollPositions5(prevPosition => prevPosition - 90);
        }
    };
	
	  // Function to scroll the cards to the right
	const scrollRight = (className) => {
		if (className === "container1" && scrollPosition < (cards.length * 45.5)) {
            setScrollPosition(prevPosition => prevPosition + 90);
        } else if (className === "container2" && scrollPositions2 < (cards.length * 45.5)) {
            setScrollPositions2(prevPosition => prevPosition + 90);
        } else if (className === "container3" && scrollPositions3 < (cards.length * 45.5)) {
            setScrollPositions3(prevPosition => prevPosition + 90);
        } else if (className === "container4" && scrollPositions4 < (cards.length * 45.5)) {
            setScrollPositions4(prevPosition => prevPosition + 90);
        } else if (className === "container5" && scrollPositions5 < (cards.length * 45.5)) {
            setScrollPositions5(prevPosition => prevPosition + 90);
        }
		console.log("this is the log of the scroll right: "+scrollPosition);
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
							delay={index * 100 + "ms"} 
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
					<div className="container-fluid container-cardmiddle">
						<div className="cardmiddle">
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
						<div className="scrolling-container container1 mt-1"  >										
							{cards.map((src, index) => (
								<div
									key={src}
									className="mt-3 me-3 sliding-card"
									style={{
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
					<button className="scroll-control-prev" type="button" onClick={()=>scrollLeft('container1')}>
						<span className="carousel-control-prev-icon" aria-hidden="true"></span>
						<span className="visually-hidden">Previous</span>
					</button>
					<button className="scroll-control-next" type="button" onClick={()=>scrollRight('container1')}>
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
				<div className="scrolling-container container3 mt-1"  >										
							{cards3.map((src, index) => (
								<div
									key={src}
									className="mt-3 me-3 sliding-card"
									style={{
										transform: `translateX(${(index - scrollPositions3) * 10}px)`,
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
					<button className="scroll-control-prev" type="button" onClick={()=>scrollLeft('container3')}>
						<span className="carousel-control-prev-icon" aria-hidden="true"></span>
						<span className="visually-hidden">Previous</span>
					</button>
					<button className="scroll-control-next" type="button" onClick={()=>scrollRight('container3')}>
						<span className="carousel-control-next-icon" aria-hidden="true"></span>
						<span className="visually-hidden">Next</span>
					</button>
				</div>
				<div className="cardtitle">
					{Title3.map((Title3, index) => (
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
							{Title3}
						</MovingComponent>
					))}
				</div>
				{/* scrolling cards*/}
				<div className="scrolling-container container4 mt-1"  >										
							{cards4.map((src, index) => (
								<div
									key={src}
									className="mt-3 me-3 sliding-card"
									style={{
										transform: `translateX(${(index - scrollPositions4) * 10}px)`,
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
					<button className="scroll-control-prev" type="button" onClick={()=>scrollLeft('container4')}>
						<span className="carousel-control-prev-icon" aria-hidden="true"></span>
						<span className="visually-hidden">Previous</span>
					</button>
					<button className="scroll-control-next" type="button" onClick={()=>scrollRight('container4')}>
						<span className="carousel-control-next-icon" aria-hidden="true"></span>
						<span className="visually-hidden">Next</span>
					</button>
				</div>
				<div className="cardtitle">
					{Title4.map((Title4, index) => (
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
							{Title4}
						</MovingComponent>
					))}
				</div>
				{/* scrolling cards*/}
				<div className="scrolling-container container2 mt-1"  >										
							{cards5.map((src, index) => (
								<div
									key={src}
									className="mt-3 me-3 sliding-card"
									style={{
										transform: `translateX(${(index - scrollPositions5) * 10}px)`,
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
					<button className="scroll-control-prev" type="button" onClick={()=>scrollLeft('container5')}>
						<span className="carousel-control-prev-icon" aria-hidden="true"></span>
						<span className="visually-hidden">Previous</span>
					</button>
					<button className="scroll-control-next" type="button" onClick={()=>scrollRight('container5')}>
						<span className="carousel-control-next-icon" aria-hidden="true"></span>
						<span className="visually-hidden">Next</span>
					</button>
				</div>
				<div className="cardtitle">
					{Title5.map((Title5, index) => (
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
							{Title5}
						</MovingComponent>
					))}
				</div>
				{/* scrolling cards*/}
				<div className="scrolling-container container2 mt-1"  >										
							{cards2.map((src, index) => (
								<div
									key={src}
									className="mt-3 me-3 sliding-card"
									style={{
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
					<button className="scroll-control-prev" type="button" onClick={()=>scrollLeft('container2')}>
						<span className="carousel-control-prev-icon" aria-hidden="true"></span>
						<span className="visually-hidden">Previous</span>
					</button>
					<button className="scroll-control-next" type="button" onClick={()=>scrollRight('container2')}>
						<span className="carousel-control-next-icon" aria-hidden="true"></span>
						<span className="visually-hidden">Next</span>
					</button>
				</div>
			</div>
		</div>
	);
};
