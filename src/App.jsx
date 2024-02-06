import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import Slider from "./components/Slider";
import ProductionHouse from "./components/ProductionHouse";
import GenresMoviesList from "./components/GenresMoviesLIst";

function App() {
  return (
    <div>
      <Header />
      <Slider />
      <ProductionHouse />
      <GenresMoviesList />
    </div>
  );
}

export default App;
