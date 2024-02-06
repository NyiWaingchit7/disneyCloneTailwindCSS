import axios from "axios";
const movieBaseUrl = "https://api.themoviedb.org/3";
const apiKeys = "c7e858de3908ac9a03f25615bef5f0a9";
const movieByGenreBaseURL =
  "https://api.themoviedb.org/3/discover/movie?api_key=c7e858de3908ac9a03f25615bef5f0a9";

const getTrendingVideos = axios.get(
  movieBaseUrl + "/trending/all/day?api_key=" + apiKeys
);
const getMovieByGenreId = (id) =>
  axios.get(movieByGenreBaseURL + "&with_genres=" + id);

export default {
  getTrendingVideos,
  getMovieByGenreId,
};
