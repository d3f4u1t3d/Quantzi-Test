import { React, useState, useEffect } from "react";
import axios from "axios";
import classnames from "classnames";

import { usePagination, DOTS } from "../Hooks/usePagination";

import Card from "../Card/Card";

import "./Pagination.css";
import { Link } from "react-router-dom";

function Pagination() {
  const [movies, setMovies] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/top_rated?api_key=dac277d665159f4733492ddc86bbc1e3&language=en-US&page=${currentPage}`
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

  const siblingCount = 2;
  const totalCount = totalPages;
  const pageSize = 10;
  const paginationRange = usePagination({
    currentPage,
    totalCount,
    siblingCount,
    pageSize,
  });

  // If there are less than 2 times in pagination range we shall not render the component
  if (currentPage === 0 || paginationRange.length < 2) {
    return null;
  }

  const onNext = () => {
    handlePageChange(currentPage + 1);
  };

  const onPrevious = () => {
    handlePageChange(currentPage - 1);
  };

  let lastPage = paginationRange[paginationRange.length - 1];

  return (
    <div>
      <div className="PageContainer">
        {movies.map((movie) => (
          <Link to={`/movie/${movie.id}`} style={{ textDecoration: "none" }}>
            <Card
              key={movie.id}
              title={movie.title}
              image={movie.backdrop_path}
              rating={movie.vote_average}
            />
          </Link>
        ))}
      </div>

      <div className="PaginationController">
        <ul className={classnames("pagination-container")}>
          {/* Left navigation arrow */}
          <li
            className={classnames("pagination-item", {
              disabled: currentPage === 1,
            })}
            onClick={onPrevious}
          >
            <div className="arrow left" />
            <div className="gap">Previous</div>
          </li>
          {paginationRange.map((pageNumber) => {
            // If the pageItem is a DOT, render the DOTS unicode character
            if (pageNumber === DOTS) {
              return <li className="pagination-item dots">&#8230;</li>;
            }

            // Render our Page Pills
            return (
              <li
                className={classnames("pagination-item", {
                  selected: pageNumber === currentPage,
                })}
                onClick={() => handlePageChange(pageNumber)}
              >
                {pageNumber}
              </li>
            );
          })}
          {/*  Right Navigation arrow */}
          <li
            className={classnames("pagination-item", {
              disabled: currentPage === lastPage,
            })}
            onClick={onNext}
          >
            <div className="gap-right">Next</div>
            <div className="arrow right" />
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Pagination;
