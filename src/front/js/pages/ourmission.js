import React from "react";
import { Link } from "react-router-dom";
import backgroundimage from "../../img/backgroundimage2.jpg";
import "../../styles/ourmission.css";

export const OurMission = () => {

	return (
		<div className="background" style={{backgroundImage:'url(' + backgroundimage + ')'}}>
			<div className="container textBackground">
				<h2 className="pt-3"><strong>Tech Odyssey</strong>: Exploring the Cutting-Edge Convergence of Computers, Movie Tech, AI, EV Mobility, and More!</h2><br/>
				<h3 className="text"><em>Welcome to our Tech Odyssey - Where Boundaries Blur and Innovations Unite!</em></h3>
				<p className="text">In the ever-evolving landscape of technology, groundbreaking advancements are revolutionizing every aspect of our lives. From the fascinating world of computers to the captivating magic of movie tech, the limitless potential of artificial intelligence, and the eco-conscious realm of electric vehicle (EV) mobility, there's an array of exciting topics to explore. Join us on a journey through the realm of technology, where barriers between different domains dissolve, and extraordinary synergies are discovered.</p>
				<h3><strong>Beyond Binary: Unraveling the Future of Computers</strong></h3>
				<p className="text">Computing technology continues to expand at an exponential pace. Quantum computing, once a dream, is becoming a reality, promising unprecedented computational power that will transform industries, from drug discovery to cryptography. Dive into the quantum realm and learn how it's changing the landscape of computing.</p>
				<p className="text">Meanwhile, cloud computing continues its ascendancy, offering businesses and consumers unparalleled flexibility and scalability. We'll explore how cloud-based services are transforming the way we work, communicate, and store data securely.</p>
				<h3><strong>Movie Tech: Unleashing the Art of Immersive Storytelling</strong></h3>
				<p className="text">Movies have come a long way since their inception, and technology plays a crucial role in creating the jaw-dropping spectacles we see on the silver screen. From mind-boggling visual effects to cutting-edge animation techniques, we'll uncover the wizardry behind some of the most iconic movie moments.</p>
				<p className="text">Additionally, we'll explore how streaming services have disrupted the traditional movie distribution model, empowering filmmakers to reach a global audience instantly and challenging cinema norms.</p>
				<h3><strong>AI Ascendancy: From Sci-Fi to Reality</strong></h3>
				<p className="text">Artificial Intelligence, once confined to science fiction, is now an integral part of our daily lives. AI-powered virtual assistants, recommendation systems, and natural language processing have become commonplace. But AI's reach extends far beyond these applications.</p>
				<p className="text">Delve into the AI-driven medical breakthroughs that are revolutionizing healthcare, and examine the ethical considerations we must navigate as AI's presence in society grows.</p>
				<h3><strong>EV Mobility: Paving the Way to a Greener Future</strong></h3>
				<p className="text">As concerns about climate change intensify, electric vehicles have emerged as a leading solution for sustainable transportation. We'll explore the latest developments in EV technology, from extended battery ranges to innovative charging solutions.</p>
				<p className="text">Moreover, we'll investigate how autonomous driving technology is shaping the future of mobility, promising safer roads and more efficient transportation systems.</p>
				<h3><strong>Uncharted Frontiers: Exploring the Coalescence of Tech and Beyond</strong></h3>
				<p className="text">In this section, we'll venture into the uncharted territories where technology intertwines with unexpected disciplines. Discover the intersection of tech and agriculture, exploring how AI and data analytics are transforming farming practices to ensure food security for a growing global population.</p>
				<p className="text">We'll also dive into the world of augmented reality (AR) and virtual reality (VR), where creativity knows no bounds, and boundaries between real and digital experiences blur.</p>

				<hr/>
				<hr/>

				<p className="text">Join us on this thrilling tech adventure, where we'll unravel the mysteries of cutting-edge innovations, examine how technology is reshaping various industries, and envision a future where the boundaries between different tech categories dissolve, giving rise to a world of boundless possibilities. Stay tuned for mind-boggling insights, expert opinions, and thought-provoking discussions, right here on our Tech Odyssey blog!</p>
				<h3 className="mb-4">Tech Odyssey Team</h3>
				<div class="container text-center">
					<div class="row mb-2">
						<div class="col-sm-3 teamName">
							<h5 className="teamName">Luís Santos</h5>
						</div>
						<div class="col-sm-3 iconDiv">
						 	<a href="https://www.facebook.com/profile.php?id=100000565674865" target="blank"><i class="fab fa-facebook icon"></i></a>
							<a href="https://www.linkedin.com/in/lu%C3%ADs-miguel-lopes-santos-5a669370/" target="blank"><i class="fab fa-linkedin icon"></i></a>		
						</div>
					</div>
					<div class="row mb-2">
						<div class="col-sm-3">
							<h5 className="teamName">Rodrigo Almeida</h5>
						</div>
						<div class="col-sm-3 iconDiv">
							<a href="https://www.facebook.com/profile.php?id=100015951918492" target="blank"><i class="fab fa-facebook icon"></i></a>
							<a href="https://www.linkedin.com/in/rodrigo-almeida-99181a277/" target="blank"><i class="fab fa-linkedin icon"></i></a>
						</div>
					</div>
					<div class="row mb-2">
						<div class="col-sm-3">
							<h5 className="teamName">Rui Silva</h5>
						</div>
						<div class="col-sm-3 iconDiv">
							<a href="https://www.facebook.com/rui775" target="blank"><i class="fab fa-facebook icon"></i></a>
							<a href="https://www.linkedin.com/in/rui-silva-3183a6a1/" target="blank"><i class="fab fa-linkedin icon"></i></a>
						</div>
					</div>
				</div>
			</div>
		</div>
		
	);
};