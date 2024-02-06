import {
  HiHome,
  HiMagnifyingGlass,
  HiStar,
  HiPlayCircle,
  HiTv,
} from "react-icons/hi2";
import { HiPlus, HiDotsVertical } from "react-icons/hi";
import logo from "../asset/image/logo.png";
import HeaderItem from "./HeaderItems";
import { useState } from "react";
const Header = () => {
  const [toogle, setToggle] = useState(false);

  return (
    <div className="flex items-center justify-between p-1 max-w-[100vw]">
      <div className="flex items-center gap-5">
        <img src={logo} className=" w-[80px] md:w-[115px] object-cover" />
        <div className="hidden md:flex items-center gap-3">
          {menu.map((d) => (
            <HeaderItem key={d.id} name={d.name} Icon={d.icon} />
          ))}
        </div>
        <div className="flex md:hidden gap-3">
          {menu.map(
            (d, index) =>
              index < 3 && <HeaderItem key={d.id} name={""} Icon={d.icon} />
          )}
        </div>
        <div className="md:hidden relative" onClick={() => setToggle(!toogle)}>
          <HeaderItem name={""} Icon={HiDotsVertical} />
          {toogle && (
            <div className=" absolute top-2 mt-3 bg-[#121212] border-[1px] border-gray-700 p-3 px-5 py-4">
              {menu.map(
                (d, index) =>
                  index > 2 && (
                    <HeaderItem key={d.id} name={d.name} Icon={d.icon} />
                  )
              )}
            </div>
          )}
        </div>
      </div>
      <img
        src="https://ps.w.org/user-avatar-reloaded/assets/icon-256x256.png?rev=2540745"
        className="w-[40px] rounded-full"
      />
    </div>
  );
};
export default Header;
export const menu = [
  {
    id: 1,
    name: "HOME",
    icon: HiHome,
  },
  {
    id: 2,
    name: "SEARCH",
    icon: HiMagnifyingGlass,
  },
  {
    id: 3,
    name: "WATCH LIST",
    icon: HiPlus,
  },
  {
    id: 4,
    name: "ORIGINALS",
    icon: HiStar,
  },
  {
    id: 5,
    name: "MOVIES",
    icon: HiPlayCircle,
  },
  {
    id: 6,
    name: "SERIES",
    icon: HiTv,
  },
];
