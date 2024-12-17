"use client"; // "client"
import { useState, useEffect } from "react";
import MainLayout from "../components/layouts/Main";
import PanelSection from "../components/sections/Panel";
import Line from "../components/movies/Line";
import { useSearchParams } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";

import { RootState } from "../store";
import { setItems } from "@/slices/filmSlice";

const API_URL = process.env.NEXT_PUBLIC_API_URL;
const PAGE_LIMIT = 8;
const Page = () => {
  const dispatch = useDispatch();

  // const [items, setItems] = useState([])
  const { items, count} = useSelector(
    (state: RootState) => state.films
  );

  // const [count,setCount]=useState(0)
  const [page, setPage] = useState(1);
  const searchParams = useSearchParams();
  const year = searchParams.get("year");
  const genre = searchParams.get("genre");
  const rating = searchParams.get("rating");

  useEffect(() => {
    setPage(1);
  }, [year,genre]);

  useEffect(() => {
    const skip = (page - 1) * PAGE_LIMIT;
    let url = `${API_URL}/movies?year=${year}&skip=${skip}&limit=${PAGE_LIMIT}`;
    if (!!genre) {
      url += `&genre=${genre}`;
    }
    if (!!rating) {
      url += `&rating=${rating}`;
    }
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        // setItems(data.items);
        dispatch(setItems(data));
        // setCount(data.count)
      });
  }, [year, page, genre, rating]);

  return (
    <>
      <MainLayout>
        {!!year && <div className="">year: {year}</div>}
        {!!genre && <div className="">genre: {genre}</div>}
        {!!rating && <div className="">rating: {rating}</div>}
        <div className="">count: {count}</div>
        <button
          type="button"
          onClick={(e) => {
            e.preventDefault();
            setPage(page + 1);
          }}
          className="btn btn-primary"
        >
          Next ({page})
        </button>

        <PanelSection />
        {items.map((item) => {
          return (
            <Line movie={item} key={item._id} url={`/movies/${item._id}`} />
          );
        })}
      </MainLayout>
    </>
  );
};
export default Page;
