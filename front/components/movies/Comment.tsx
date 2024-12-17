import { Comment } from "@/types";
import { FC } from "react";

type CommentProps = {
 comment:Comment
 
}

const MovieComment:FC<CommentProps> = ({ comment }) => {
  const { date, email, name, text } = comment;
  return (
    <div className="comment-entity">
    <div className="entity-inner">
      <div className="entity-content">
        <h4 className="entity-title">{name}</h4>
        <p className="entity-subtext">{date}</p>
        <p className="entity-text">
          {text}
        </p>
      </div>
      <div className="entity-extra">
        <div className="grid-md row">
          <div className="col-12 col-sm-auto">
            </div>
          <div className="ml-sm-auto col-auto">
            <a className="content-link" href={`mailto:${email}`}>
              <i className="fas fa-envelope" />
              &nbsp;&nbsp;{email}
            </a>
          </div>
          
        </div>
      </div>
    </div>
    
      
    
  </div>
  
  )
}

export default MovieComment;
