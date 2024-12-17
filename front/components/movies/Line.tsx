import { Movie } from "@/types";
import Link from "next/link";
import React from "react";


type LineProps = {
  movie: Movie;
  url: string;
}

const Line: React.FC<LineProps> = ({ movie, url }) => {
  const {
    title,
    poster,
    imdb: { rating },
    plot,
    runtime,
    year,
    genres,
  } = movie;

  return (
    <article className="movie-line-entity">
      <div className="entity-poster" data-role="hover-wrap">
        <div className="embed-responsive embed-responsive-poster">
          <img className="embed-responsive-item" src={poster} alt={title} />
        </div>
        <div
          className="d-over bg-theme-lighted collapse animated faster"
          data-show-class="fadeIn show"
          data-hide-class="fadeOut show"
        >
          <div className="entity-play">
            <a
              className="action-icon-theme action-icon-bordered rounded-circle"
              href="https://www.youtube.com/watch?v=d96cjJhvlMA"
              data-magnific-popup="iframe"
            >
              <span className="icon-content">
                <i className="fas fa-play" />
              </span>
            </a>
          </div>
        </div>
      </div>
      <div className="entity-content">
        <h4 className="entity-title">
          <Link className="content-link" href={url}>
            {" "}
            {title}
          </Link>
        </h4>
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
        <p className="text-short entity-text">{plot} </p>
      </div>
      <div className="entity-extra">
        <div className="text-uppercase entity-extra-title green">{year}</div>
      </div>
    </article>
  );
};
export default Line;

