import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Card from "./Card";
import Btt from "./BackToTop";
import info from "../info"

function Yellow() {
	return(
		<div>
			<Header />
			<div>
			<h1 className="projHead">Yellow Streets</h1>
			<div className="card-img-top"><img src={info[5].pic1} alt="" className="banner"></img></div>
			</div>

            <div className="text1">
				<h3>About</h3>
				<p> Yellow streets is a NGO which helps young minds to drive towards a 
					sustained future using Rugby & allied activities as a medium for change.
					I Chose to work with this NGO because of the concept they are trying to 
					work on is completely new and out of the box. The age group they are 
					trying to cover is 14-18yr, in this age generally the kid is in growing 
					phase and eventually will become adult in 2-4 years. So, giving direction 
					to their futures is a very curtail factor for the growth of our nation.
				<br/><br/>
                </p>
			</div>

			<div className="text1">
				<h3>My Work</h3>
				<p> I worked on the landing page for their website which will help them 
					with their reach. In this case, the most important job is to have an easy 
                    navigation flow for doners to donate the money so, the primary focus 
					of the landing page is on the join us button.
				<br/><br/>
                </p>
			</div>

			<div className="text1">
				<h3>Key Activities</h3>
				<div className="card-img-top"><img src={info[5].pic2} alt="" className="longimg"></img></div>
				<p> After that donors want to know about the key activities so giving second preference
                    to the USP of the NGO, I made custom icons to express each key activity.<br/><br/>
                </p>
			</div>

			<div className="text1">
				<h3>Proof of Work & News Letter Option</h3>
				<div className="card-img-top"><img src={info[5].pic3} alt="" className="longimg"></img></div>
				<p> To connect with the people NGO has to show some work proof. This helps in converting them 
					into the donors. Also to be in touch with the NGO newsletters is a good way through which 
                    people can be in touch with the work.
				<br/><br/>
                </p>
			</div>

			<div className="text1">
				<h3>Footer</h3>
				<div className="card-img-top"><img src={info[5].pic4} alt="" className="longimg"></img></div>
				<p> And finally, at the bottom of the website, we have all the related links and social media contacts. 
                    This will helps people with navigation on the site.<br/><br/>
                </p>
			</div>

			<div className="text1">
				<h3>Full web page</h3>
				<div className="card-img-top"><img src={info[5].pic5} alt="" className="longimg"></img></div>
			</div>

			<div className="more">
        		<h1 className="text1">More Projects</h1>
      		<div className="container-fluid">
        		<div className="row justify-content-center">
					<Card 
							key={info[0].id}
        			    	title={info[0].title}
        			    	about={info[0].about}
        			    	src={info[0].src}
        			    	tag1={info[0].tag1}
        			    	link={info[0].link}
        			    	targ={info[0].targ}
						/>
						<Card 
							key={info[7].id}
        			    	title={info[7].title}
        			    	about={info[7].about}
        			    	src={info[7].src}
        			    	tag1={info[7].tag1}
        			    	link={info[7].link}
        			    	targ={info[7].targ}
						/>
        		</div>
      		</div>
   			</div>

			<Btt />
			<Footer />
		</div>
	);
}

export default Yellow;