import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./style.css";

const Footer = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const location = useLocation();

  // Menu items
  const menuItems = [
    { icon: "home-outline", label: "Home", path: "/home" },
    { icon: "play-outline", label: "Shorts", path: "/shorts" },
    { icon: "game-controller-outline", label: "Game", path: "/game" },
    { icon: "people-outline", label: "Community", path: "/community" },
  ];

  // Hide footer on the starting page
  const hideFooter = location.pathname === "/";

  return !hideFooter ? (
    <div className="footer-container">
      <div className="navigation">
        <ul>
          {menuItems.map((item, index) => (
            <li
              key={index}
              className={`list ${activeIndex === index ? "active" : ""}`}
              onClick={() => setActiveIndex(index)}
            >
              <Link to={item.path} aria-label={item.label}>
                <div className="button">
                  <span className="icon">
                    <ion-icon name={item.icon}></ion-icon>
                  </span>
                  <span className="text">{item.label}</span>
                </div>
              </Link>
            </li>
          ))}
        </ul>
        <div
          className="indicator"
          style={{ transform: `translateX(${activeIndex * 100}px)` }}
        ></div>
      </div>
    </div>
  ) : null;
};

export default Footer;
