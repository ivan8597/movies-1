import React, { FC } from "react";
import Link from "next/link";
import { Movie } from "@/types";


type MovieDetailProps={
  movie:Movie
}

const MovieDetail:FC<MovieDetailProps> = ({ movie }) => {
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
    languages,
  } = movie;
  return (
    <>
      <div className="section-line">
        <div className="movie-info-entity">
          <div className="entity-poster" data-role="hover-wrap">
            <div className="embed-responsive embed-responsive-poster">
              <img className="embed-responsive-item" src={poster} alt={title} />
            </div>
          </div>
          <div className="entity-content">
            <h2 className="entity-title">{title}</h2>
            <div className="entity-category">
              {genres.map((genre, index) => {
                return (
                  <Link
                    className="content-link"
                    href={`/?genre=${genre}`}
                    key={index}
                  >
                    {genre}
                    {index < genres.length - 1 ? ", " : ""}
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
                <Link href={`/?year=${year}`}>{year}</Link>
              </li>
              <li>
                <span className="entity-list-title">Directed:</span>
                {directors.map((director, index) => {
                  return (
                    <Link
                      className="content-link"
                      href={`/?director=${director}`}
                      key={index}
                    >
                      {director}
                      {index < directors.length - 1 ? ", " : ""}
                    </Link>
                  );
                })}
              </li>
              <li>
                <span className="entity-list-title">Starring:</span>
                {cast.map((actor, index) => {
                  return (
                    <Link
                      className="content-link"
                      href={`/?actor=${actor}`}
                      key={index}
                    >
                      {actor}
                      {index < cast.length - 1 ? ", " : ""}
                    </Link>
                  );
                })}
              </li>

              <li>
                <span className="entity-list-title">Country:</span>
                {countries.map((country, index) => {
                  return (
                    <Link
                      className="content-link"
                      href={`/?country=${country}`}
                      key={index}
                    >
                      {country}
                      {index < countries.length - 1 ? ", " : ""}
                    </Link>
                  );
                })}
              </li>

              {!!languages &&!!languages.length && (
                <li>
                  <span className="entity-list-title">Language:</span>
                  {languages.map((language, index) => {
                    return (
                      <Link
                        className="content-link"
                        href={`/?language=${language}`}
                        key={index}
                      >
                        {language}
                        {index < languages.length - 1 ? ", " : ""}
                      </Link>
                    );
                  })}
                </li>
              )}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default MovieDetail;


