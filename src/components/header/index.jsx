import React, { useState } from "react";
import Wrapper from "./style";

const Header = () => {
  const [isSliderOpen, setIsSliderOpen] = useState(false);

  const toggleSlider = () => {
    setIsSliderOpen(!isSliderOpen);
  };

  return (
    <Wrapper >
      <div>
         <ion-icon name="menu-outline"></ion-icon>
      </div>
      <div>
      <span>Little</span> Advocates
      </div>
      <div>
      <ion-icon name="search-outline"></ion-icon>
      </div>
      <div>
      <ion-icon name="notifications-outline"></ion-icon>
      </div>
    </Wrapper>
  );
};

export default Header;
