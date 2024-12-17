import { Movie } from "@/types";
import React from "react";
type MovieSynopsisProps = {
  movie: Movie
  
}

const MovieSynopsis: React.FC<MovieSynopsisProps> = ({ movie }) => {
  const { fullplot,plot } = movie;
  return (
    <>
    <div className="section-line">
      <div className="section-head">
        <h2 className="section-title text-uppercase">Synopsis</h2>
      </div>
      <div className="section-description">
        <p className="lead">{fullplot || plot} </p>
       
      </div>
 </div>
</>
  )
}

export default MovieSynopsis;