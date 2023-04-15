import React from "react";
import "./Card.css";
import Play from "./../../Assets/play.png";

function Card({ image, title }) {
  return (
    <>
      <div className="CardContainer">
        <div className="ImageCard">
          <img src={`https://image.tmdb.org/t/p/original${image}`} alt="" />
        </div>
        <div className="CardContent">
          <div className="TextContainer">
            <div className="Title">{title}</div>
            <div className="Rating">7.5</div>
          </div>
          <div className="Playbutton">
            <img src={Play} alt="PlayButton" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Card;
