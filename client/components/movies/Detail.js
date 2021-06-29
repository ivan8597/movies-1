import React from "react";
import Link from "next/link";

const MovieDetail = ({ movie }) => {
  const {
    title,
    poster,
    imdb: { rating },
    runtime,
    year,
    genres,
    directors,
    cast,
    countries,
    languages
  } = movie;
  return (
    <>
      <div className="section-line">
        <div className="movie-info-entity">
          <div className="entity-poster" data-role="hover-wrap">
            <div className="embed-responsive embed-responsive-poster">
              <img className="embed-responsive-item" src={poster} alt />
            </div>
          </div>
          <div className="entity-content">
            <h2 className="entity-title">{title}</h2>
            <div className="entity-category">
              {genres.map((genre, index) => {
                return (
                  <Link href={`/?genre=${genre}`} key={index}>
                    <a className="content-link">
                      {genre}
                      {index < genres.length - 1 ? ", " : ""}
                    </a>
                  </Link>
                );
              })}
            </div>
            <div className="entity-info">
              <div className="info-lines">
                <div className="info info-short">
                  <span className="text-theme info-icon">
                    <i className="fas fa-star" />
                  </span>
                  <span className="info-text">{rating}</span>
                  <span className="info-rest">/10</span>
                </div>
                <div className="info info-short">
                  <span className="text-theme info-icon">
                    <i className="fas fa-clock" />
                  </span>
                  <span className="info-text">{runtime}</span>
                  <span className="info-rest">&nbsp;min</span>
                </div>
              </div>
            </div>
            <ul className="entity-list">
              <li>
                <span className="entity-list-title">Release:</span>
                <Link href={`/?year=${year}`}><a>{year}</a></Link>
              </li>
              <li>
                <span className="entity-list-title">Directed:</span>
                {directors.map((director, index) => {
                return (
                  <Link href={`/?director=${director}`} key={index}>
                    <a className="content-link">
                      {director}
                      {index < directors.length - 1 ? ", " : ""}
                    </a>
                  </Link>
                );
              })}
               
              </li>
              <li>
                <span className="entity-list-title">Starring:</span>
                {cast.map((actor, index) => {
                return (
                  <Link href={`/?actor=${actor}`} key={index}>
                    <a className="content-link">
                      {actor}
                      {index < cast.length - 1 ? ", " : ""}
                    </a>
                  </Link>
                );
              })}
              </li>
             
              <li>
                <span className="entity-list-title">Country:</span>
                {countries.map((country, index) => {
                return (
                  <Link href={`/?country=${country}`} key={index}>
                    <a className="content-link">
                      {country}
                      {index < countries.length - 1 ? ", " : ""}
                    </a>
                  </Link>
                );
              })}
              </li>

              {!!languages.length && <li>

                <span className="entity-list-title">Language:</span>
                {languages.map((language, index) => {
                return (
                  <Link href={`/?language=${language}`} key={index}>
                    <a className="content-link">
                      {language}
                      {index < languages.length - 1 ? ", " : ""}
                    </a>
                  </Link>
                );
              })}
              </li>}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default MovieDetail;
