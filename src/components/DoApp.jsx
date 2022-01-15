import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Card from "./Card";
import Btt from "./BackToTop";
import info from "../info"

function DoApp() {
	return(
		<div>
			<Header />
			<div>
			<h1 className="projHead">DoApp</h1>
			<div className="card-img-top"><img src={info[4].src} alt="" className="banner"></img></div>
			</div>

			<div className="text1">
				<h3>About</h3>
				<p>Simple app for class students, CRs (class representative) and professors which will help them in organizing the class.</p>
			</div>

			<div className="text1">
				<h3>Colours</h3>
			</div>
			<div className="card-img-top"><img src={info[4].pic1} alt="" className="inImg"></img></div>

			<div className="text1">
				<h3>Fonts</h3>
			</div>
			<div className="card-img-top"><img src={info[4].pic2} alt="" className="inImg"></img></div>

			<div className="text1">
				<h3>User Study</h3>
				<p> 
					User group - class students & Proffecers <br/> <br/>

					User’s previously used apps - College email, Google Drive, WhatsApp, 
                  	contacts, moodle.<br/><br/>	

					User problems<br/><br/>
    
    				1]  CR has to create a WhatsApp group for each module.<br/>
    				2] CR has to collect assignments in a google drive.<br/>
    				3] Students can’t find drive link in the WhatsApp chats.<br/>
    				4] Proffecers can’t monitor class submissions.<br/>
    				5] Difficult to keep track of assignments.</p>
			</div>

			<div className="text1">
				<h3>Mind Map</h3>
			</div>

			<div className="card-img-top"><img src={info[4].pic3} alt="" className="inImg"></img></div>

			<div className="text1">
				<h3>Key app features</h3>
				<p> Creating a chat group is very easy as you have a pre-created list of 
					people in your class, just customise the list also main groups are 
					already created at the time of registration.<br/><br/>

					operate the college email directly through the app.<br/><br/>

					professors can create a portal for submissions and can set the deadline 
					for submission while creating the group.<br/><br/>

					All the assignments are listed in a separate list in which you can track 
					your work.
				</p>
			</div>

			<div className="text1">
				<h3>Mockups</h3>
			</div>

			<div className="card-img-top"><img src={info[4].pic4} alt="" className="inImg"></img></div>
			
			<div className="text1">
				<h3>Screen Layouts</h3>
			</div>
			
			<div className="card-img-top">
				<img src={info[4].pic5} alt="" className="gifImg"></img>
			</div>

			<div className="more">
        		<h1 className="text1">More Projects</h1>
      		<div className="container-fluid">
        		<div className="row justify-content-center">
					<Card 
							key={info[2].id}
        			    	title={info[2].title}
        			    	about={info[2].about}
        			    	src={info[2].src}
        			    	tag1={info[2].tag1}
        			    	link={info[2].link}
        			    	targ={info[2].targ}
						/>
						<Card 
							key={info[5].id}
        			    	title={info[5].title}
        			    	about={info[5].about}
        			    	src={info[5].src}
        			    	tag1={info[5].tag1}
        			    	link={info[5].link}
        			    	targ={info[5].targ}
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