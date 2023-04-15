import React from "react";

import "./Homepage.css";

import Header from "../../Components/Header/Header";

import Hero from "./../../Assets/Hero.jpg";
import Pagination from "../../Components/Pagination/Pagination";

function Homepage() {
  return (
    <div className="Wrapper">
      <Header />
      <div className="HeroContainer">
        <div className="HeroContent">
          <div className="Heading1">Welcome To Our Movie Site</div>
          <div className="Heading2">
            Our Special <span className="ColouredHeading">Movies</span>
          </div>
          <div className="subtext">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Error
            sapiente voluptatum, recusandae, quis dolor vel quas nihil quae
            officiis asperiores excepturi aliquid ipsam aliquam ad, itaque
            distinctio suscipit. Qui, provident.
          </div>
          <div className="RMbutton">Read More</div>
        </div>
      </div>
      <div className="subContent">
        <div className="PaginationContainer">
          <Pagination />
        </div>
      </div>
    </div>
  );
}

export default Homepage;
