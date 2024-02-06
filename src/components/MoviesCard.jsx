import { IMAGE_BASE_URL } from "./Slider";

const MoviesCard = ({ movies }) => {
  return (
    <div className="w-[110px] md:w-[200px]">
      <img
        src={IMAGE_BASE_URL + movies.poster_path}
        className=" rounded-lg hover:border-[3px]
         border-gray-400 cursor-pointer hover:scale-110 transition-all duration-150 ease-in"
      />
    </div>
  );
};
export default MoviesCard;
