import React from "react";
import Resume from "./resumePranav.pdf"
import { Link } from "react-router-dom";


function Header() {

  return ( <header>
             <Link to="/"><h1 className="name">Pranav P.</h1></Link>
             <div className="menu">
              <ul>
                <li><Link to="/"><p className="menu">Home</p></Link></li>
                <li><a href={Resume}><p className="menu">Resume</p></a></li>
                <li><Link to="/About"><p className="menu">About</p></Link></li>
              </ul>
             </div>
           </header>
  );
}

export default Header;
