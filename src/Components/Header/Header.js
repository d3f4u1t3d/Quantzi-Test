import React from "react";
import "./Header.css";
import logo from "../../Assets/logo.png";
import SearchBox from "../SearchBox/SearchBox";

function Type1() {
  return (
    <div className="Header">
      <div className="logocontainer">
        <img src={logo} alt="Logo" />
      </div>
    </div>
  );
}

function Type2() {
  return (
    <div className="Header">
      <div className="Container">
        <div className="logocontainer">
          <img src={logo} alt="Logo" />
        </div>
        <div className="searchBarContainer">
          <SearchBox />
          <div className="LogOut">Log Out</div>
        </div>
      </div>
    </div>
  );
}

function Header(props) {
  return <>{props.type === "login" ? <Type1 /> : <Type2 />}</>;
}

export default Header;
