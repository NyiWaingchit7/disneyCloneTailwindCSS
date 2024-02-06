import disney from "./../asset/image/logo.png";
import marvel from "./../asset/image/marvel.png";
import nationalG from "./../asset/image/nationalG.png";
import pixar from "./../asset/image/pixar.png";
import starwar from "./../asset/image/starwar.png";

import starwarV from "./../asset/video/star-wars.mp4";
import disneyV from "./../asset/video/disney.mp4";
import marvelV from "./../asset/video/marvel.mp4";
import pixarV from "./../asset/video/pixar.mp4";
import nationalGeographicV from "./../asset/video/national-geographic.mp4";

const ProductionHouse = () => {
  return (
    <div className="flex gap-2 md:gap-5 p-5 px-5 md:px-16">
      {productionHouseList.map((d) => (
        <div
          className=" border-[2px] border-gray-400 rounded-lg hover:scale-105 transition-all duration-100
         ease-in-out cursor-pointer relative shadow-xl shadow-black "
        >
          <video
            src={d.video}
            autoPlay
            loop
            playsInline
            muted
            className="absolute z-0 top-0 rounded-lg opacity-0 hover:opacity-50"
          />
          <img src={d.image} className="w-full z-[1] opacity-100" />
        </div>
      ))}
    </div>
  );
};
export default ProductionHouse;
export const productionHouseList = [
  {
    id: 1,
    image: disney,
    video: disneyV,
  },
  {
    id: 2,
    image: pixar,
    video: pixarV,
  },
  {
    id: 3,
    image: marvel,
    video: marvelV,
  },
  {
    id: 4,
    image: starwar,
    video: starwarV,
  },
  {
    id: 5,
    image: nationalG,
    video: nationalGeographicV,
  },
];
