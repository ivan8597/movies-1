"use client";
import { useRouter } from "next/router";
import MainLayout from "../../../components/layouts/Main";
import MovieDetail from "../../../components/movies/Detail";
import Synopsis from "../../../components/movies/Synopsis";
import MovieComment from "../../../components/movies/Comment";
import { useEffect, useState } from "react";
import { RootState } from "@/store";

import { useSelector, useDispatch } from "react-redux";
import { setComments,setItem } from "@/slices/filmSlice";
import { useParams } from "next/navigation";
const API_URL = process.env.NEXT_PUBLIC_API_URL;

const Movie = () => {
  const dispatch = useDispatch();

  // const [movie, setMovie] = useState<any>();
  // const [comments,setComments]=useState([])
  const { comments,item } = useSelector((state: RootState) => state.films);
  //  const router=useRouter()
  //  const movie_id=router.query.movie_id

  const { movie_id } = useParams();

  useEffect(() => {
    if (!movie_id) {
      return;
    }
    fetch(`${API_URL}/movies/${movie_id}`)
      .then((res) => res.json())
      .then((data) => {
         dispatch(setItem(data.item))

        dispatch(setComments(data.comments));
        // setMovie(data.item);
        // setComments(data.comments)
      });
  }, [movie_id]);

  return (
    <MainLayout>
      <div className="row">
        <div className="col-md-9">
          {!!item && <MovieDetail movie={item} />}
          {!!item && <Synopsis movie={item} />}
          {!!comments.length && (
            <div className="section-line">
              <div className="section-head">
                <h2 className="section-title text-uppercase">Comments</h2>
              </div>
              {comments.map((comment, index) => {
                return <MovieComment comment={comment} key={index} />;
              })}
            </div>
          )}
        </div>

        <div className="col-md-3"></div>
      </div>
    </MainLayout>
  );
};
export default Movie;
