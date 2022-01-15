import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import {BrowserRouter} from "react-router-dom";

function myFunction() {
	alert("For best experiance visit this site on desktop or laptop");
  }

// myFunction();

ReactDOM.render(
	<BrowserRouter>	
		<App />
	</BrowserRouter>, 
	document.getElementById("root")
);