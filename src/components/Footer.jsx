import React from "react";
import Resume from "./resumePranav.pdf"

const date = new Date();
const currentyear = date.getFullYear();

function Footer() {
  return (
        <footer className="resumeline">
          <div>
            <div>
              <h1 >Don't forget to download my <a href={Resume} className="footresume">Resume</a></h1>
            </div>
          </div>
          <p>© {currentyear} Design & developed by Pranav P </p>
        </footer>
  );
}

export default Footer;