import React from "react";
import Header from "./Header";
import pf from "./Pranav_full.png";
import Btt from "./BackToTop";
import Footer from "./Footer";

function About() {
	return(
		<div>
			<Header />
			<div className="about">
			<h1>About</h1>
			<img src={pf} alt="-_-"></img>
			<p> Hi there, Nice to meet you</p> <br></br>
			<p>	My name is Pranav. I work as a User Interface & User Experience 
				designer.  Currently, I’m designing thoughtful experiences at IDC, IITB.</p><br></br>

			<p>	I’m passionate about building & designing delightful experiences with 
				the combination of business, marketing and UI/UX design to make customers 
				and users satisfied when they’re using products and services online.</p>
			</div>
			<Btt />
			<Footer />
		</div>
	);
}

export default About;