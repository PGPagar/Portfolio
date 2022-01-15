import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Card from "./Card";
import Btt from "./BackToTop";
import info from "../info";

function DoApp() {
	return(
		<div>
			<Header />
			<div>
			<h1 className="projHead">AR Mirror</h1>
			<div className="card-img-top"><img src={info[0].src} alt="" className="banner"></img></div>
			</div>

			<div className="text1">
				<h3>Gym/Exercise After COVID-19</h3>
				<p>All over the world, gyms are closed including
				   yoga centers and public grounds. I use to go to the gym
				   frequently but now I have to compromise my fitness. Even
				   though I do exercise at home, it’s not that effective
				   compared to the exercises performed in the gym in front
				   of the instructor.
				</p>
			</div>

			<div className="card-img-top"><img src={info[0].pic1} alt="" className="isoimg"></img></div>

			<div className="text1">
				<h3>Problem Areas</h3>
				<p> <span className="boldSpan">Types of exercises: </span> 
					A lot of people are doing exercise at
				    home for that they follow a fitness app. Some of them
				    may have a treadmill or cycle at home or at least bought
				    dumbbells online<br/><br/>

					<span className="boldSpan">Good experience: </span> 
					Since the lockdown, there is an
					obvious surge in the number of fitness videos on
					YouTube and mostly they are focusing on the home
					workouts (without any types of equipment).<br/><br/>

					<span className="boldSpan">Poorly designed products: </span> 
					Also I have seen a lot of new
					types of equipment in the market which is designed to
					cater to multiple mussels. All of the products lack in
					providing a good experience<br/><br/>

					<span className="boldSpan">Connectivity: </span> 
					Some people use to go to gym together it
					helped them with the motivation which is first step
					towards fitness. So doing exercise at home doesn't
					provide such motivation.<br/><br/>
				</p>
			</div>

			<div className="card-img-top"><img src={info[0].pic2} alt="" className="isoimg"></img></div>

			<div className="text1">
				<h3>User Persona</h3>
				<p> <span className="boldSpan">User persona 1: </span> 
					Rohit is a 26 year old guy working at a IT company. He
					use to go to gym in the morning as his job didn’t required
					any physical activity. But due to COVID he had to stop
					that and instead had to buy a new treadmill. He suffered
					with the space issue as well as with the number of
					exercise he can perform on the treadmill.<br/><br/>
				</p>

				<p> <span className="boldSpan">User persona 2: </span> 
					Aditee is a 23 year old woman and she use to go to a
					yoga class but now she just watch some videos on
					YouTube to perform the exercise. She don’t know if she
					is doing it correctly.
				</p>
			</div>

			<div className="card-img-top"><img src={info[0].pic4} alt="" className="isoimg"></img></div>

			<div className="text1">
				<h3>Solution</h3>
				<p> <span className="boldSpan">Smart Exercise Mirror </span> <br/><br/>
				People don’t know but one of the most important things
				to have during the exercise is a mirror. Mirror helps us to
				maintain the necessary posture while performing a
				workout.<br/><br/>
				Secondly, we want an instructor to guide us during the
				workout which can be achieved virtually.
				In addition to this Smart, Exercise Mirror can detect the
				wrong posture of the user and correct them.<br/><br/>
				</p>
			</div>

			<div className="card-img-top"><img src={info[0].pic3} alt="" className="smallisoimg"></img></div>

			<div className="text1">
				<h3>Why Smart Exercise Mirror?</h3>
				<ul>
					<li>Efficient way to exercise</li>
					<li>Virtual assistance is better than a video</li>
					<li>Feels more organic</li>
					<li>Guides throughout the workout</li>
					<li>Requires less space than a treadmill</li>
					<li>Can have a live session for yoga/workout with friends</li>
					<li>Product is for the whole family</li>
				</ul>
			</div>

			<div className="text1">
				<h3>Technology Behind the Product</h3>
				<p> <span className="boldSpan">Mixed Reality (MR)</span> <br/><br/>
				Smart Exercise Mirror is an IOT product. To show the virtual 
				exercises, mirror will be using MR technology.<br/><br/>
				</p>
				<div className="card-img-top"><img src={info[0].pic5} alt="" className="smallisoimg"></img></div>

				<p> <span className="boldSpan">Image processing & 3D gestures</span> <br/><br/>
				With the help of sensors like camera and lidar person and the
				environment around them is scanned. This helps in
				tracking the posture and to interact with the mirror with
				the hand gestures. Eventually, this will encourage the
				user to go beyond their limits<br/><br/>
				</p>

				<p> <span className="boldSpan">Community</span> <br/><br/>
				Smart exercise mirror allows user to connect with their 
				friends so they can see live progress of their
				friend.<br/><br/>
				</p>

				<p> <span className="boldSpan">Choose your workout</span> <br/><br/>
				You can choose your an existing workout from the recommended workouts or set a routine for a week so that you can optimize your progress<br/><br/>
				</p>

				<p> <span className="boldSpan">3rd party apps</span> <br/><br/>
				Smart exercise mirror allows other users
				to make their own workouts and post them for others to
				use. This feature allows user to create a community<br/><br/>
				</p>

				<p> <span className="boldSpan">Live sessions</span> <br/><br/>
				you can choose to have a live workout or yoga with a professional 
				trainer through the inbuilt feature of the smart mirror.<br/><br/>
				</p>
			</div>

			<div className="text1">
				<h3>Proof of Concept</h3>
				<p>
					After finalizing the solution I started building the proof of concept. 
					This project will need a screen and a two-way mirror, which will be 
					placed on the screen. the two-way mirror will show the content on the 
					screen and reflect the light coming from the front side (see the 
					following image for more clarification).<br/><br/>

					<span className="boldSpan">Spark AR </span><br/><br/>
					For hand tracking, I chose to use Spark AR software by Facebook which 
					detects different body parts and allows us to code the functionality 
					according to our needs.<br/><br/>		
					<div className="card-img-top"><img src={info[0].pic6} alt="" className="isoimg"></img></div>


					<span className="boldSpan">AR Layout </span><br/><br/>
					While doing exercise/yoga user should not change its position to 
					interact with the product. Users should naturally interact with the 
					Mirror. For this 3D hand, gestures are crucial. With the hand tracking 
					feature on spark AR, we can set a particular gesture with some code to 
					interact with the mirror.<br/><br/>

					<span className="boldSpan">Final prototype </span><br/><br/>
					This final prototype was made using iPad pro 2018 as a screen and a 
					two-way mirror.
				</p>
				<video className='vid' autoPlay loop muted>
    				<source src={info[0].vid} type='video/mp4' />
				</video>
			</div>

			<div className="more">
        		<h1 className="text1">More Projects</h1>
      		<div className="container-fluid">
        		<div className="row justify-content-center">
					<Card 
							key={info[1].id}
        			    	title={info[1].title}
        			    	about={info[1].about}
        			    	src={info[1].src}
        			    	tag1={info[1].tag1}
        			    	link={info[1].link}
        			    	targ={info[1].targ}
						/>
						<Card 
							key={info[4].id}
        			    	title={info[4].title}
        			    	about={info[4].about}
        			    	src={info[4].src}
        			    	tag1={info[4].tag1}
        			    	link={info[4].link}
        			    	targ={info[4].targ}
						/>
        		</div>
      		</div>
   			</div>
			   
			<Btt />
			<Footer />
		</div>
	);
}

export default DoApp;