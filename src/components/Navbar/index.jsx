import React from "react";
import "./style.scss";

export default function Navbar() {
  return (
    <div className="navbar" data-scroll-section >
      <div>bv</div>

      <div>web dev</div>

      <div onClick={ 
          // add a external link
          () => window.open("https://www.linkedin.com/in/barbaravillanova/")
        }>contact</div>
    </div>
  );
}
