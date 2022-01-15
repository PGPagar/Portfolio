import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Card from "./Card";
import Btt from "./BackToTop";
import info from "../info";

function Bolt() {
	return(
		<div>
			<Header />
			<div>
			<h1 className="projHead">Bolt</h1>
			<div className="card-img-top"><img src={info[1].src} alt="" className="banner"></img></div>
			</div>

			<div className="text1">
				<h3>About</h3>
				<p> An innovative tech startup named Bolt, has come up with an 
                    electric motorbike product, designed for the Indian market. In 
                    the pursuit of understanding the market Bolt soon realized 
                    that in the country where 65% population is under 35 years 
                    old, there are around a billion tech-literate young adults who 
                    prefer bikes much over cars as it helps in smooth daily 
                    commutation.<br/><br/>
                    For its first model series named Bolt-Z, the company plans to 
                    enable the use of user’s mobile phone as the clamp-able 
                    dashboards on the bike, where the company’s app can 
                    provide distraction-free advance functionality to the users, 
                    even while driving.
                </p>
			</div>

            <div className="text1">
				<h3>Mind Map</h3>
			</div>
			<div className="card-img-top"><img src={info[1].pic1} alt="" className="isoimg"></img></div>

            <div className="text1">
				<h3>Sharing economy</h3>
				<p> For sharing the most important thing is you have to send a request 
                    through the app and to send the request you need to have a 
                    permission from the owner. So through the following ways we can 
                    obtain the permission. (this is for the security of the owners). Once 
                    you obtain the permission you can send a request for the bike any 
                    time.<br/><br/>

                    As the sharing is usually going to be in a small circle of friends and 
                    family the following points are the ways in which it can happen <br/><br/>

                    User can send a request for sharing when he/she dockes a phone on 
                    the bike.<br/><br/>

                    Previously borrowed bikes.<br/><br/>

                    Owner can send a link to allow a person to send request.<br/><br/>
                </p>
			</div>

			<div className="card-img-top"><img src={info[1].pic2} alt="" className="isoimg"></img></div>

            <div className="text1">
				<h3>Shortcuts</h3>
				<p> On the homepage you will find many shortcuts which can be 
                    customised through the shortcut setting. There are some predefined 
                    shortcuts as follows.<br/><br/>

                    1] lock down- this allows the user to lock the bike from a far distance. 
                        But to start again after the lock down user has to dock his/her 
                        phone.<br/><br/>

                    2] parking lights- this shortcut is to control the parking lights of the 
                       bike.<br/><br/>

                    3] Honk- Is used to identify the bike in a parking area where you can’t 
                        remember the parking place of your bike.<br/><br/>

                    4] GPS- In this feature user can track live/last location of the bike.<br/><br/>

                    5] user can have customised shortcuts such as external light control. 
                       This shortcut allows user to control the extra lights he/she might 
                       have added to the bike.<br/><br/>
                </p>
			</div>

            <div className="card-img-top"><img src={info[1].pic3} alt="" className="isoimg"></img></div>

            <div className="text1">
				<h3>Nick name</h3>
				<p> Few days back I read a tweet  tweeted by elon musk in which he told 
                    his tesla's name and asked others about their teslas nicknames. So 
                    this seems to have nice connection between the user and product so 
                    I decided to include that in the app where you can give a nickname to 
                    your bike.<br/><br/>

                    The ultimate purpose was to have a different settings in a single app 
                    for the owner having multiple bikes. So every time he/she chooses a 
                    bike the settings for that bike are shown. (rose is a Nickname).<br/><br/>
                </p>
			</div>

            <div className="card-img-top"><img src={info[1].pic4} alt="" className="isoimg"></img></div>

            <div className="text1">
				<h3>Screen Layouts</h3>
			</div>
			<div className="card-img-top"><img src={info[1].pic5} alt="" className="isoimg"></img></div>

            <div className="text1">
				<h3>Mockups</h3>
			</div>
			<div className="card-img-top"><img src={info[1].pic6} alt="" className="smallisoimg"></img></div>

            <div className="more">
        		<h1 className="text1">More Projects</h1>
      		<div className="container-fluid">
        		<div className="row justify-content-center">
					<Card 
							key={info[3].id}
        			    	title={info[3].title}
        			    	about={info[3].about}
        			    	src={info[3].src}
        			    	tag1={info[3].tag1}
        			    	link={info[3].link}
        			    	targ={info[3].targ}
						/>
						<Card 
							key={info[6].id}
        			    	title={info[6].title}
        			    	about={info[6].about}
        			    	src={info[6].src}
        			    	tag1={info[6].tag1}
        			    	link={info[6].link}
        			    	targ={info[6].targ}
						/>
        		</div>
      		</div>
   			</div>

			<Btt />   
			<Footer />
		</div>
	);
}

export default Bolt;