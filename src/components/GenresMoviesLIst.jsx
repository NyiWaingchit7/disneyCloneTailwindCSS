import GenreList from "../constant/GenreList";
import MoviesList from "./MoviesList";
const GenresMoviesList = () => {
  return (
    <div>
      {GenreList.genere.map(
        (item, index) =>
          index <= 4 && (
            <div className="p-3 px-3 md:p-10 md:px-16" key={item.id}>
              <h2 className=" text-[20px] font-bold">{item.name}</h2>
              <MoviesList genreId={item.id} indexNumber={index} />
            </div>
          )
      )}
    </div>
  );
};
export default GenresMoviesList;
