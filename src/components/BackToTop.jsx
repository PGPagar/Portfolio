import React from "react";
import up from "./up.png";

const BTTBtn = document.querySelector("#b-t-t");

window.addEventListener("scroll", scrollFunction);

function scrollFunction() {
    if(window.pageYOffset > 300) {
        if(!document.querySelector("#b-t-t").classList.contains("btnEntrance")) {
            document.querySelector("#b-t-t").classList.remove("btnExit");
            document.querySelector("#b-t-t").classList.add("btnEntrance");
            document.querySelector("#b-t-t").style.display = "block";
        }
        
    } else {
        if( document.querySelector("#b-t-t").classList.contains("btnEntrance")) {
            document.querySelector("#b-t-t").classList.remove("btnEntrance");
            document.querySelector("#b-t-t").classList.add("btnExit");
            setTimeout(() => {
                document.querySelector("#b-t-t").style.display = "none";
            }, 250); 
        }
    }
}

function backToTop() {
    window.scrollTo(0, 0);
}


function Btt() {
    return (
          <div>
              <button id="b-t-t" onClick={backToTop}><img id="btn-img" src={up} alt="-_-"></img></button>
          </div>
    );
  }
  
export default Btt;
 