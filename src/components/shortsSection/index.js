import React, { useRef, useState, useEffect } from "react";
import { Heart, MessageCircle, Send, MoreVertical } from "lucide-react";
import "./style.css";

const reelsData = [
  { id: 1, src: "./videos/video1.mp4", likes: 200000, comments: 531, user: "foodiechef", caption: "Delicious pizza 🔥" },
  { id: 2, src: "./videos/video2.mp4", likes: 150000, comments: 420, user: "travelgram", caption: "Sunset vibes 🌅" },
  { id: 3, src: "./videos/video3.mp4", likes: 180000, comments: 310, user: "fitnesspro", caption: "Morning workout 💪" },
  { id: 4, src: "./videos/video4.mp4", likes: 220000, comments: 410, user: "naturelover", caption: "Nature at its best 🌿" }
];

const Reels = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [likes, setLikes] = useState(reelsData.map((reel) => reel.likes));
  const [isLiked, setIsLiked] = useState(reelsData.map(() => false));
  const [isFollowing, setIsFollowing] = useState(reelsData.map(() => false));
  
  const videoRefs = useRef([]);
  const touchStartY = useRef(0);
  const minSwipeDistance = 50;
  const isScrolling = useRef(false);

  useEffect(() => {
    videoRefs.current.forEach((video, index) => {
      if (video) {
        if (index === activeIndex) {
          video.play().catch(() => console.log("Auto-play blocked"));
        } else {
          video.pause();
          video.currentTime = 0;
        }
      }
    });
  }, [activeIndex]);

  const handleTouchStart = (e) => {
    touchStartY.current = e.touches[0].clientY;
  };

  const handleTouchEnd = (e) => {
    if (isScrolling.current) return;
    const touchEndY = e.changedTouches[0].clientY;
    const deltaY = touchStartY.current - touchEndY;

    if (deltaY > minSwipeDistance && activeIndex < reelsData.length - 1) {
      isScrolling.current = true;
      setActiveIndex((prev) => prev + 1);
      setTimeout(() => (isScrolling.current = false), 500);
    } else if (deltaY < -minSwipeDistance && activeIndex > 0) {
      isScrolling.current = true;
      setActiveIndex((prev) => prev - 1);
      setTimeout(() => (isScrolling.current = false), 500);
    }
  };

  const handleWheel = (e) => {
    if (isScrolling.current) return;
    if (e.deltaY > 0 && activeIndex < reelsData.length - 1) {
      isScrolling.current = true;
      setActiveIndex((prev) => prev + 1);
    } else if (e.deltaY < 0 && activeIndex > 0) {
      isScrolling.current = true;
      setActiveIndex((prev) => prev - 1);
    }
    setTimeout(() => (isScrolling.current = false), 500);
  };

  const toggleLike = (index) => {
    setLikes((prevLikes) =>
      prevLikes.map((like, i) => (i === index ? (isLiked[i] ? like - 1 : like + 1) : like))
    );
    setIsLiked((prevLiked) => prevLiked.map((like, i) => (i === index ? !like : like)));
  };

  const toggleFollow = (index) => {
    setIsFollowing((prevFollow) => prevFollow.map((follow, i) => (i === index ? !follow : follow)));
  };

  const handleShare = (src) => {
    navigator.clipboard.writeText(window.location.origin + src);
    alert("Link copied to clipboard!");
  };

  return (
    <div className="reels-container" onTouchStart={handleTouchStart} onTouchEnd={handleTouchEnd} onWheel={handleWheel}>
      <div className="reels-wrapper" style={{ transform: `translateY(-${activeIndex * 100}vh)`, transition: "transform 0.4s ease-in-out" }}>
        {reelsData.map((reel, index) => (
          <div key={reel.id} className="reel">
            <video ref={(el) => (videoRefs.current[index] = el)} src={reel.src} className="reel-video" loop muted playsInline />

            {/* Right-Side Actions */}
            <div className="actions">
              <button onClick={() => toggleLike(index)}>
                <Heart size={24} color={isLiked[index] ? "red" : "white"} fill={isLiked[index] ? "red" : "none"} />
                <span>{likes[index]}</span>
              </button>
              <button onClick={() => alert("Open comment section")}> 
                <MessageCircle size={24} />
                <span>{reel.comments}</span>
              </button>
              <button onClick={() => handleShare(reel.src)}>
                <Send size={24} />
              </button>
              <button>
                <MoreVertical size={24} />
              </button>
            </div>

            {/* Bottom Section - User Info */}
            <div className="info">
              <div className="user">
                <img src="./profile/profile.jpg" alt="Profile" />
                <span>@{reel.user}</span>
                <button onClick={() => toggleFollow(index)}>
                  {isFollowing[index] ? "Following" : "Follow"}
                </button>
              </div>
              <p className="caption">{reel.caption}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Reels;
