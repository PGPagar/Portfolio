import React from "react";
import dp from "./Pranav_dp.png";
import scrole from "./mouse-icon.svg";

function Intro() {
    return ( 
        <div id="introDiv">
            <div>
              <img id="introImg" src={dp} alt="-_-"></img>
              <p className="intro">Hi I am Pranav, <span role="img" aria-label="hi">👋</span></p>
            </div>

            <div className="tagLine">
              <h1>
                <span className="tag1">A designer from Mumbai.</span> <br /> 
                <span className="tag2">I design and build experiences 
                that people love.</span>
              </h1>
            </div>
            <div className="scrole">
              <img src={scrole} alt=""></img>
              <div>Scroll down</div>
            </div>
            <div className="projtitle">
              <h2>Projects</h2>
            </div>
        </div>
    );
}

export default Intro;
