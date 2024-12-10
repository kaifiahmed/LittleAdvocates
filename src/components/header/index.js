import React, { useState } from "react";
import "./style.css";

const Header = () => {
  const [isSliderOpen, setIsSliderOpen] = useState(false);

  const toggleSlider = () => {
    setIsSliderOpen(!isSliderOpen);
  };

  return (
    <div className="header">
        <script type="module" src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"></script>
  <script nomodule src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"></script>
  <link rel="stylesheet" href="style.css" />

      {/* Slider Menu */}
      <div className={`slider ${isSliderOpen ? "open" : ""}`}>
        <button className="close-btn" onClick={toggleSlider}>
          &times;
        </button>
        <ul>
          <li><a href="#">Option 1</a></li>
          <li><a href="#">Option 2</a></li>
          <li><a href="#">Option 3</a></li>
        </ul>
      </div>
      

      {/* Header Content */}
      <ul>
        <li className="list">
          <span className="icon" onClick={toggleSlider}>
            <ion-icon name="menu-outline"></ion-icon>
          </span>
        </li>
        <li className="list website-name">
          Little Advocates
        </li>
        <li className="list">
          <span className="icon">
            <ion-icon name="search-outline"></ion-icon>
          </span>
        </li>
        <li className="list">
          <span className="icon">
            <ion-icon name="notifications-outline"></ion-icon>
          </span>
        </li>
      </ul>
    </div>
  );
};

export default Header;
