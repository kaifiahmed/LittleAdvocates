import React from "react";
import { Wraper } from "./style.js";

const GameSection = () => {
  return (
    <Wraper>
      <div className="first_game">
        <div className="content-overlay"></div>
        <div className="content-text">First Game</div>
      </div>
      <div className="second_game">
        <div className="content-overlay"></div>
        <div className="content-text">Second Game</div>
      </div>
      <div className="third_game">
        <div className="content-overlay"></div>
        <div className="content-text">Third Game</div>
      </div>
      <div className="forth_game">
        <div className="content-overlay"></div>
        <div className="content-text">Forth Game</div>
      </div>
    </Wraper>
  );
};

export default GameSection;
