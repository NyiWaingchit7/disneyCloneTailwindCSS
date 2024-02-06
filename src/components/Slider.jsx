import { useEffect, useRef, useState } from "react";
import globalApi from "../service/globalApi";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi2";
const screenWidth = window.innerWidth;
export const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/original";

const Slider = () => {
  const [showMovies, setMovies] = useState([]);
  const elementRef = useRef();

  const sliderLeft = (element) => {
    element.scrollLeft -= screenWidth - 110;
  };
  const sliderRight = (element) => {
    element.scrollLeft += screenWidth - 110;
  };
  const trendingMovies = () => {
    globalApi.getTrendingVideos.then((res) => setMovies(res.data.results));
  };
  useEffect(() => {
    trendingMovies();
  }, []);
  return (
    <div>
      <HiChevronLeft
        className="hidden md:block text-white text-[30px] absolute
        mx-8 mt-[170px] cursor-pointer "
        onClick={() => sliderLeft(elementRef.current)}
      />
      <HiChevronRight
        className="hidden md:block text-white text-[30px] absolute
        mx-8 mt-[170px] cursor-pointer right-0"
        onClick={() => sliderRight(elementRef.current)}
      />
      <div
        className="flex overflow-x-auto px-16 py-4  scrollbar-none scroll-smooth"
        ref={elementRef}
      >
        {showMovies.map((d) => (
          <img
            className=" min-w-full md:h-[350px] object-cover object-left-top mr-5 rounded-md hover:border-4 border-gray-400
            transition-all duration-100 ease-in "
            src={IMAGE_BASE_URL + d.backdrop_path}
            alt=""
          />
        ))}
      </div>
    </div>
  );
};
export default Slider;
