import React, { useState, useEffect } from "react";
import "./style.css";

const NewsSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const news = [
    { title: "Breaking News 1", image: "https://via.placeholder.com/800x300" },
    { title: "Breaking News 2", image: "https://via.placeholder.com/800x300/ff7f7f" },
    { title: "Breaking News 3", image: "https://via.placeholder.com/800x300/7f7fff" },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % news.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [news.length]);

  return (
    <div className="slider">
      <div className="news-item">
        <img src={news[currentIndex].image} alt={news[currentIndex].title} className="slider-image" />
        <h2>{news[currentIndex].title}</h2>
      </div>
    </div>
  );
};

export default NewsSlider;
