import React, { useContext, useState, useEffect } from "react";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import backgroundurl from "../../img/backgroundimage2.jpg"
import { Link } from "react-router-dom";
import MovingComponent from "../component/movingcomponent";


export const Home = () => {

	const [posts, setPosts] = useState([]);
	const [posts2, setPosts2] = useState([]);
	const [posts3, setPosts3] = useState([]);
	const [posts4, setPosts4] = useState([]);
	const [posts5, setPosts5] = useState([]);


	const getPosts =()=>{
		fetch(process.env.BACKEND_URL + "/api/posts/category/COM", {
			method: 'GET',
			headers:{
				'Content-Type': 'application/json'
			}
		})
		.then(res => {
			if (!res.ok) throw Error(res.statusText);
			return res.json();
		})
		.then(response => setPosts(response))
		.catch(error => console.error(error));
	
	}

	const getPosts2 =()=>{
		fetch(process.env.BACKEND_URL + "/api/posts/category/MT", {
			method: 'GET',
			headers:{
				'Content-Type': 'application/json'
			}
		})
		.then(res => {
			if (!res.ok) throw Error(res.statusText);
			return res.json();
		})
		.then(response => setPosts2(response))
		.catch(error => console.error(error));
	
	}

	const getPosts3 =()=>{
		fetch(process.env.BACKEND_URL + "/api/posts/category/AI", {
			method: 'GET',
			headers:{
				'Content-Type': 'application/json'
			}
		})
		.then(res => {
			if (!res.ok) throw Error(res.statusText);
			return res.json();
		})
		.then(response => setPosts3(response))
		.catch(error => console.error(error));
	
	}

	const getPosts4 =()=>{
		fetch(process.env.BACKEND_URL + "/api/posts/category/EVM", {
			method: 'GET',
			headers:{
				'Content-Type': 'application/json'
			}
		})
		.then(res => {
			if (!res.ok) throw Error(res.statusText);
			return res.json();
		})
		.then(response => setPosts4(response))
		.catch(error => console.error(error));
	
	}

	const getPosts5 =()=>{
		fetch(process.env.BACKEND_URL + "/api/posts/category/OTHER", {
			method: 'GET',
			headers:{
				'Content-Type': 'application/json'
			}
		})
		.then(res => {
			if (!res.ok) throw Error(res.statusText);
			return res.json();
		})
		.then(response => setPosts5(response))
		.catch(error => console.error(error));
	
	}

	useEffect(() => {
		getPosts();
		getPosts2();
		getPosts3();
		getPosts4();
		getPosts5();
	},[]);

	const { store, actions } = useContext(Context);

	const Letters = ["W","E","L","C","O","M","E","-","T","O",
	"-","T","H","E","-","T","E","C","H","-","W","O","R","L","D"];
	
	const Title1 = ["C","o","m","p","u","t","e","r","s"];
	const Title2 = ["M","o","v","i","e","-","T","e","c","h"];
	const Title3 = ["A","I","-","T","e","c","h","n","o","l","o","g","y"];
	const Title4 = ["E","V","-","M","o","b","i","l","i","t","y"];
	const Title5 = ["O","t","h","e","r","-","S","t","u","f","f"];


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
		if (className === "container1" && scrollPosition < (posts.length * 45.5)) {
            setScrollPosition(prevPosition => prevPosition + 90);
        } else if (className === "container2" && scrollPositions2 < (posts.length * 45.5)) {
            setScrollPositions2(prevPosition => prevPosition + 90);
        } else if (className === "container3" && scrollPositions3 < (posts.length * 45.5)) {
            setScrollPositions3(prevPosition => prevPosition + 90);
        } else if (className === "container4" && scrollPositions4 < (posts.length * 45.5)) {
            setScrollPositions4(prevPosition => prevPosition + 90);
        } else if (className === "container5" && scrollPositions5 < (posts.length * 45.5)) {
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
				<div className="card-carousel-header d-flex justify-content-center">
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
					<div className="container-fluid container-cardmiddle d-flex justify-content-center">
						<div className="cardmiddle">
							Everything you must to know about tech
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
							{posts.map((post, index) => (
								<div
									key={post.id}
									className="mt-3 me-3 sliding-card"
									style={{
										transform: `translateX(${(index - scrollPosition) * 10}px)`,
									}}
								>
									<div className="card2 row">
										<div className="img col-6">
											<figure>
												<img src={post.Url} class="card-img-top" alt="..." />
												<figcaption className="fig position-absolute bottom-0 start-0 p-3">
													<p>{post.abstract}</p>
												</figcaption>
											</figure>
											{/* fontAwsome icons (like, heart and favorites) */}
											{/* ... */}
										</div>
										<div className="col-6 text">
											<h3 className="card-title">{post.title}</h3>
											<p>{post.description}</p>
											<p>{post.abstract}</p>
											<div className="readmore">
												<Link to={`/single/${post.id}`}>
													<button className="btn col">
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
					{posts2.map((posts2, index) => (
						<div
							key={posts2.id}
							className="mt-3 me-3 sliding-card"
							style={{
								transform: `translateX(${(index - scrollPositions2) * 10}px)`,
							}}
						>
							<div className="card2 row">
								<div className="img col-6">
									<img src={posts2.Url} class="card-img-top" alt="..." />
									<figcaption className="fig position-absolute bottom-0 start-0 p-3">
										<p>{posts2.abstract}</p>
									</figcaption>
									{/* fontAwsome icons (like, heart and favorites) */}
									{/* ... */}
								</div>
								<div className="col-6 text">
									<h3 className="card-title">{posts2.title}</h3>
									<p>{posts2.description}</p>
									<p>{posts2.abstract}</p>
									<div className="readmore">
										<Link to={`/single/${posts2.id}`}>
											<button className="btn col">
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
					{posts3.map((posts3, index) => (
						<div
							key={posts3.id}
							className="mt-3 me-3 sliding-card"
							style={{
								transform: `translateX(${(index - scrollPositions3) * 10}px)`,
							}}
						>
							<div className="card2 row">
								<div className="img col-6">
									<img src={posts3.Url} class="card-img-top" alt="..." />
									<figcaption className="fig position-absolute bottom-0 start-0 p-3">
										<p>{posts3.abstract}</p>
									</figcaption>
									{/* fontAwsome icons (like, heart and favorites) */}
									{/* ... */}
								</div>
								<div className="col-6 text">
									<h3 className="card-title">{posts3.title}</h3>
									<p>{posts3.description}</p>
									<p>{posts3.abstract}</p>
									<div className="readmore">
										<Link to={`/single/${posts3.id}`}>
											<button className="btn col">
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
					{posts4.map((posts4, index) => (
						<div
							key={posts4.id}
							className="mt-3 me-3 sliding-card"
							style={{
								transform: `translateX(${(index - scrollPositions4) * 10}px)`,
							}}
						>
							<div className="card2 row">
								<div className="img col-6">
									<img src={posts4.Url} class="card-img-top" alt="..." />
									<figcaption className="fig position-absolute bottom-0 start-0 p-3">
										<p>{posts4.abstract}</p>
									</figcaption>
									{/* fontAwsome icons (like, heart and favorites) */}
									{/* ... */}
								</div>
								<div className="col-6 text">
									<h3 className="card-title">{posts4.title}</h3>
									<p>{posts4.description}</p>
									<p>{posts4.abstract}</p>
									<div className="readmore">
										<Link to={`/single/${posts4.id}`}>
											<button className="btn col">
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
					{posts5.map((posts5, index) => (
						<div
							key={posts5.id}
							className="mt-3 me-3 sliding-card"
							style={{
								transform: `translateX(${(index - scrollPositions5) * 10}px)`,
							}}
						>
							<div className="card2 row">
								<div className="img col-6">
									<img src={posts5.Url} class="card-img-top" alt="..." />
									<figcaption className="fig position-absolute bottom-0 start-0 p-3">
										<p>{posts5.abstract}</p>
									</figcaption>
									{/* fontAwsome icons (like, heart and favorites) */}
									{/* ... */}
								</div>
								<div className="col-6 text">
									<h3 className="card-title">{posts5.title}</h3>
									<p>{posts5.description}</p>
									<p>{posts5.abstract}</p>
									<div className="readmore">
										<Link to={`/single/${posts5.id}`}>
											<button className="btn col">
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
			</div>
		</div>
	);
};
