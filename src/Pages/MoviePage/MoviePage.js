import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./MoviePage.css";
import Header from "../../Components/Header/Header";
import axios from "axios";
import Play from "./../../Assets/play.png";
import Modal from "../../Components/Modal/Modal";

function MoviePage() {
  const { id } = useParams();

  const [movieObject, setMovieObject] = useState("");
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${id}?api_key=dac277d665159f4733492ddc86bbc1e3&append_to_response=videos`
      )
      .then((res) => {
        // console.log(res);
        setMovieObject(res.data);
      });
  }, [id]);
  // console.log(movieObject.video);

  const toggleModal = () => {
    setShowModal(true);
  };
  document.title = movieObject.title;

  return (
    <div className="Wrapper">
      <Header />
      <div className="MovieDetailsContainer">
        <div className="TextualDetails">
          <div className="MovieTitle">{movieObject.title}</div>
          <div className="MovieRating">
            Rating: {movieObject.vote_average} / 10
          </div>
          <div className="MovieOverview">{movieObject.overview}</div>
          <div className="MovieReleaseDate">
            Release Date: {movieObject.release_date}
          </div>
          <div className="MovieLanguage">
            Original Language : {movieObject.original_language}
          </div>
        </div>
        <div className="VideoTrailer">
          <div className="ImagewithPlayButton">
            <img
              src={`https://image.tmdb.org/t/p/original${movieObject.backdrop_path}`}
              alt="Poster"
              height={772}
              width={990}
            />
            <div className="OverPlay" onClick={toggleModal}>
              <img src={Play} alt="" height={175} width={175} />
            </div>
          </div>
        </div>
      </div>
      {showModal && (
        <Modal
          embedId={movieObject.videos.results[0].key}
          title={movieObject.videos.results[0].name}
          setShowModal={setShowModal}
        />
      )}
    </div>
  );
}

export default MoviePage;
