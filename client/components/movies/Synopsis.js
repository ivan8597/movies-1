import React from "react";
const MovieSynopsis = ({movie}) => {
  const{fullplot}=movie
  return (
    <>
    <div className="section-line">
      <div className="section-head">
        <h2 className="section-title text-uppercase">Synopsis</h2>
      </div>
      <div className="section-description">
        <p className="lead">{fullplot} </p>
       
      </div>
 </div>
</>
  )
}

export default MovieSynopsis;