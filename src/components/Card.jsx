import React from "react";
import {Link} from "react-router-dom";

function Card(props) {
   return (
        <div className="card col-xl-5 col-lg-5">
            <Link to={props.link} className="link" target={props.targ}>
            <div className="overflow"><img src={props.src} alt={props.title} className="card-img-top projImg"></img></div>
            <div className="card-body">
                <h5 className="card-title projTitle">{props.title}</h5>
                <p className="card-text projAbout">{props.about}</p>
            </div>

            <div className="tag">   
            <p> {props.tag1} </p>
            </div>
            </Link>
        </div>
        );
}

export default Card;


