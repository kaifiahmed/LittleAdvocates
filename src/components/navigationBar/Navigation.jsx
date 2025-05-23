import React, { useState } from "react";
import Wrapper from "./style";
import { Link } from "react-router-dom";


const Navigation = () => {
  const Menus = [
    { name: "Home", icon: "home-outline", dis: "translate-x-0",path: "/home" },
    { name: "Shorts", icon: "play-outline", dis: "translate-x-16",path: "/shorts" },
    { name: "Games", icon: "game-controller-outline", dis: "translate-x-32" ,path: "/game"},
    { name: "Community", icon: "people-outline", dis: "translate-x-48",path: "/community" },
    { name: "Settings", icon: "settings-outline", dis: "translate-x-64" },
  ];
  const [active, setActive] = useState(0);
  return (
    <Wrapper className="bg-white max-h-[4.4rem] px-6 rounded-t-xl">
      <ul className="flex relative">
        <span
          className={`bg-rose-600 duration-500 ${Menus[active].dis} border-4 border-gray-900 h-16 w-16 absolute
         -top-5 rounded-full`}
        >
          <span
            className="w-3.5 h-3.5 bg-transparent absolute top-4 -left-[18px] 
          rounded-tr-[11px] shadow-myShadow1"
          ></span>
          <span
            className="w-3.5 h-3.5 bg-transparent absolute top-4 -right-[18px] 
          rounded-tl-[11px] shadow-myShadow2"
          ></span>
        </span>
        {Menus.map((menu, i) => (
          <li key={i} className="w-16">
            <Link
              to={menu.path}
              className="flex flex-col text-center pt-6"
              onClick={() => setActive(i)}
            >
              <span
                className={`text-xl cursor-pointer duration-500 ${
                  i === active && "-mt-6 text-white"
                }`}
              >
                <ion-icon name={menu.icon}></ion-icon>
              </span>
              <span
                className={` ${
                  active === i
                    ? "translate-y-4 duration-700 opacity-100"
                    : "opacity-0 translate-y-10"
                } `}
              >
                {menu.name}
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </Wrapper>
  );
};

export default Navigation;
