import { IMAGE_BASE_URL } from "./Slider";

const HrMoviesCard = ({ movies }) => {
  return (
    <div className="w-[120px] md:w-[270px] p-1 hover:scale-110 transition-all duration-150 ease-in ">
      <img
        src={IMAGE_BASE_URL + movies.backdrop_path}
        className="rounded-lg hover:border-[3px] border-gray-400 "
      />
      <h2 className="text-[9px] sm:text-[15px] ">{movies.title}</h2>
    </div>
  );
};
export default HrMoviesCard;
