import { React, useState, useEffect } from "react";
import axios from "axios";

import Card from "../Card/Card";

import "./Pagination.css";

function Pagination() {
  const [movies, setMovies] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/top_rated?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=${currentPage}`
      )
      .then((response) => {
        setMovies(response.data.results);
        setTotalPages(response.data.total_pages);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [currentPage]);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const renderPageNumbers = () => {
    let pageNumbers = [];
    for (let i = 1; i <= totalPages; i++) {
      pageNumbers.push(i);
    }
    return (
      <div className="pagination">
        {pageNumbers.map((pageNumber) => (
          <button
            key={pageNumber}
            id={pageNumber}
            onClick={() => handlePageChange(pageNumber)}
          >
            {pageNumber}
          </button>
        ))}
      </div>
    );
  };

  return (
    <div>
      <div className="PageContainer">
        {movies.map((movie) => (
          <Card
            key={movie.id}
            title={movie.title}
            image={movie.backdrop_path}
          />
        ))}

        {renderPageNumbers()}
      </div>
    </div>
  );
}

export default Pagination;
