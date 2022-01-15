import React from "react";
import Header from "./Header";
import Intro from "./Intro";
import Card from "./Card";
import Footer from "./Footer";
import Btt from "./BackToTop";
import info from "../info";


function entry(infoTerm) {
    return(
        <Card 
            key={infoTerm.id}
            title={infoTerm.title}
            about={infoTerm.about}
            src={infoTerm.src}
            tag1={infoTerm.tag1}
            link={infoTerm.link}
            targ={infoTerm.targ}
        />
    );
}

function Home() {
  return (
    <div>
      <Header />
      <Intro />
      <div className="container-fluid"><div className="row justify-content-center">{info.map(entry)}</div></div>
      <Btt />
      <Footer />
    </div>
  );
}

export default Home;