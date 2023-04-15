import { useState } from "react";
import "./Star.css";

export default function Star({ rating }) {
  const [filledStars, setFilledStars] = useState(Math.round(rating / 2));

  return (
    <div className="star-rating">
      {[...Array(5)].map((_, index) => (
        <span
          key={index}
          className={`star ${filledStars > index ? "filled" : ""}`}
        >
          &#9733;
        </span>
      ))}
    </div>
  );
}
