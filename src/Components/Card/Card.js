import React from "react";
import "./Card.css";
import Play from "./../../Assets/play.png";
import Star from "./../Star/Star";

function Card({ image, title, rating }) {
  return (
    <>
      <div className="CardContainer">
        <div className="ImageCard">
          <img src={`https://image.tmdb.org/t/p/original${image}`} alt="" />
        </div>
        <div className="CardContent">
          <div className="TextContainer">
            <div className="Title">
              {title.length > 15 ? title.substring(0, 15) + "..." : title}
            </div>
            <div className="Rating">
              <Star rating={rating} />
            </div>
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
