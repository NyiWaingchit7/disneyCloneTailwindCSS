import { useEffect, useRef, useState } from "react";
import globalApi from "../service/globalApi";
import MoviesCard from "./MoviesCard";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi2";
import HrMovieCard from "./HrMoviesCard";
const screenWidth = window.innerWidth;
const MoviesList = ({ genreId, indexNumber }) => {
  const [showMovies, setMovies] = useState([]);
  const elementRef = useRef();

  const sliderLeft = (element) => {
    element.scrollLeft -= screenWidth - 110;
  };
  const sliderRight = (element) => {
    element.scrollLeft += screenWidth - 110;
  };
  const getMoviesList = () => {
    globalApi
      .getMovieByGenreId(genreId)
      .then((res) => setMovies(res.data.results));
  };
  useEffect(() => {
    getMoviesList();
  }, []);

  return (
    <div className="relative">
      {" "}
      <HiChevronLeft
        className={`hidden md:block text-white text-[30px] absolute
        mx-8 ${
          indexNumber % 3 == 0 ? "mt-[100px]" : "mt-[170px]"
        } cursor-pointer z-10`}
        onClick={() => sliderLeft(elementRef.current)}
      />
      <HiChevronRight
        className={`hidden md:block text-white text-[30px] absolute
        mx-8 ${
          indexNumber % 3 == 0 ? "mt-[100px]" : "mt-[170px]"
        } cursor-pointer right-0 z-10`}
        onClick={() => sliderRight(elementRef.current)}
      />
      {
        <div
          className="flex overflow-x-auto gap-8 scrollbar-none scroll-smooth pt-4 px-3 pb-4"
          ref={elementRef}
        >
          {showMovies.map((item) => (
            <div className=" w-[100%]" key={item.id}>
              {indexNumber % 3 == 0 ? (
                <HrMovieCard movies={item} />
              ) : (
                <MoviesCard movies={item} />
              )}{" "}
            </div>
          ))}
        </div>
      }
    </div>
  );
};
export default MoviesList;
