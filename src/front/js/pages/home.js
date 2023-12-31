import React, { useContext, useState, useEffect } from "react";
import { Context } from "../store/appContext";
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

	const userID = localStorage.getItem("userID");
	const [isAddedToReadings, setIsAddedToReadings] = useState(false);

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
	const goToSinglePost = (postID) => {
		navigate(`/single/${postID}`);
	}


	const addReadings = (postID) => {
		const userID = localStorage.getItem("userID");
		if (!userID) {
			window.alert("Please log in to add posts to your readings list.");
			return;
		}

		fetch(process.env.BACKEND_URL + "/api/myreading", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({ user_id: userID, post_id: postID }),
		})
		.then((res) => res.json())
		.then((result) => {
			console.log('Added to My Readings:', result);
			setIsAddedToReadings(true);
			window.alert("Post added to your readings list successfully!");
		})
		.catch((err) => {
			console.log(err);
		});
		console.log('add to my readings');
	};


	const [allposts, setAllPosts] = useState([]);

	const getAllPosts = (limit = 10) => {
		fetch(`${process.env.BACKEND_URL}/api/posts?limit=${limit}`, {
		  method: 'GET',
		  headers: {
			'Content-Type': 'application/json'
		  }
		})
		.then(res => {
		  if (!res.ok) throw Error(res.statusText);
		  return res.json();
		})
		.then(response => {
		  // Select the last 3 posts
		  const last3Posts = response.slice(-3);
		  setAllPosts(last3Posts);
		})
		.catch(error => console.error(error));
	  }
	  
	

	useEffect(() => {
		getPosts();
		getPosts2();
		getPosts3();
		getPosts4();
		getPosts5();
		getAllPosts(3);
		const initialAddedToReadings = posts.reduce((acc, post) => {
			acc[post.id] = false;
			return acc;
		}, {});
		setIsAddedToReadings(initialAddedToReadings);
	},[]);



	const { store, actions } = useContext(Context);

	const Letters = ["T","H","I","S","-","I","S","-","T","H",
	"E","-","T","E","C","H","-","W","O","R","L","D"];
	
	const Title1 = ["C","O","M","P","U","T","E","R","S"];
	const Title2 = ["M","O","V","I","E","-","T","E","C","H"];
	const Title3 = ["A","I","-","T","E","C","H"];
	const Title4 = ["E","V","-","M","O","B","I","L","I","T","Y"];
	const Title5 = ["O","T","H","E","R","-","S","T","U","F","F"];


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
	
	//   // Function to scroll the cards to the right
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
			<div className="main-container row text-center d-flex justify-content-center" >
				<div className="card-carousel-header mt-5 d-flex justify-content-center">
					{/* carousel*/}
					<div id="carouselExampleControls" className="carousel slide carousel-container" data-bs-ride="carousel">
						<div className="carousel-inner">
							{allposts.map((post, index) => (
							<div
								key={post.id}
								className={`carousel-item ${index === 0 ? 'active' : ''}`}
							>
								<img src={post.image_post} className="d-block w-100" alt="..." />
								<div className="carousel-caption">
								<h4><strong>{post.title}</strong></h4>
								<p>{post.abstract}</p>
								</div>
							</div>
							))}
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
					<div className="container-fluid container-cardmiddle d-flex justify-content-center mt-5">
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
											<img src={post.image_post} class="card-img-top" alt="..." />
											<figcaption className="fig position-absolute bottom-0 start-0 p-3">
												<p>{post.abstract}</p>
											</figcaption>
										</div>
										<div className="col-6 text">
											<div className="d-flex justify-content-end mt-2" title="Add to My readings list">
												<button type="button" className="btn" onClick={() => addReadings(post.id)}>
													<i className={`fa-regular fa-star ${isAddedToReadings ? 'added-to-readings' : ''}`}></i>
												</button>
											</div>
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
									<img src={posts2.image_post} class="card-img-top" alt="..." />
									<figcaption className="fig position-absolute bottom-0 start-0 p-3">
										<p>{posts2.abstract}</p>
									</figcaption>
									{/* fontAwsome icons (like, heart and favorites) */}
									{/* ... */}
								</div>
								<div className="col-6 text">
									<div className="d-flex justify-content-end mt-2" title="Add to My readings list">
										<button type="button" className="btn" onClick={() => addReadings(posts2.id)}>
											<i class="fa-regular fa-star"></i>
										</button>
									</div>
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
								<img src={posts3.image_post} class="card-img-top" alt="..." />
									<figcaption className="fig position-absolute bottom-0 start-0 p-3">
										<p>{posts3.abstract}</p>
									</figcaption>
									{/* fontAwsome icons (like, heart and favorites) */}
									{/* ... */}
								</div>
								<div className="col-6 text">
									<div className="d-flex justify-content-end mt-2" title="Add to My readings list">
										<button type="button" className="btn" onClick={() => addReadings(posts3.id)}>
											<i class="fa-regular fa-star"></i>
										</button>
									</div>
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
								<img src={posts4.image_post} class="card-img-top" alt="..." />
									<figcaption className="fig position-absolute bottom-0 start-0 p-3">
										<p>{posts4.abstract}</p>
									</figcaption>
									{/* fontAwsome icons (like, heart and favorites) */}
									{/* ... */}
								</div>
								<div className="col-6 text">
									<div className="d-flex justify-content-end mt-2" title="Add to My readings list">
										<button type="button" className="btn" onClick={() => addReadings(posts4.id)}>
											<i class="fa-regular fa-star"></i>
										</button>
									</div>
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
								<img src={posts5.image_post} class="card-img-top" alt="..." />
									<figcaption className="fig position-absolute bottom-0 start-0 p-3">
										<p>{posts5.abstract}</p>
									</figcaption>
									{/* fontAwsome icons (like, heart and favorites) */}
									{/* ... */}
								</div>
								<div className="col-6 text">
									<div className="d-flex justify-content-end mt-2" title="Add to My readings list">
										<button type="button" className="btn" onClick={() => addReadings(posts5.id)}>
											<i class="fa-regular fa-star"></i>
										</button>
									</div>
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
