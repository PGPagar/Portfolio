import React from "react";
import Home from "./Home";
import About from "./About";
import DoApp from "./DoApp";
import ARmirror from "./ARmirror";
import Bolt from "./Bolt";
import Yellow from "./Yellow";
import { Route } from "react-router-dom";
import ScrollToTop from "./ScroleToTop";

function App() {
  return (
    <div>
      <ScrollToTop />
      <Route exact path="/" component={Home} />
      <Route exact path="/about" component={About} />
      <Route exact path="/doapp" component={DoApp} />
      <Route exact path="/ARmirror" component={ARmirror} />
      <Route exact path="/Bolt" component={Bolt} />
      <Route exact path="/Yellow" component={Yellow} />
    </div>
  );
}

export default App;