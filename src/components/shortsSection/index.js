import React from "react";
import "./style.css";

const ReelsPage = () => {
  return (
    <div className="container-fluid">
      <div id="ig_app" className="row">
        {/* Reels Section */}
        <section id="ig_reels" className="col-12 p-0 m-0">
          <i className="fa fa-camera" aria-hidden="true"></i>

          {/* Right Action Navigation */}
          <div id="reels_right_action_nav">
            <ul>
              <li>
                <i className="fa fa-heart-o" aria-hidden="true"></i>
                <span>203k</span>
              </li>
              <li>
                <i className="fa fa-comment-o" aria-hidden="true"></i>
                <span>531</span>
              </li>
              <li>
                <i className="fa fa-paper-plane-o" aria-hidden="true"></i>
              </li>
              <li>
                <i className="fa fa-ellipsis-v" aria-hidden="true"></i>
              </li>
              <li>
                <img src="imgs/2.jpg" alt="Action User" />
              </li>
            </ul>
          </div>

          {/* Reels Info Section */}
          <div id="reels_info">
            <div className="row">
              <div className="col-1 align-self-center">
                <img src="../assets/shortsection/thumbnail/thumb.jpg" alt="Profile" />
              </div>
              <div className="col-8">
                <div id="reels_user">
                  amit7soni
                  <button type="button" id="btnToggleFollow">
                    Follow
                  </button>
                </div>
                <div className="reels_music">
                  Remix with <span>codefrog_insta</span>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-11">
                <div className="reels_music">
                  Remix with <span>codefrog_insta</span>
                </div>
                <div className="reels_desc">
                  Hey Everyone 😍 👋🏻
                  <p>🔥 Here is the behind the scene of video recording..</p>
                </div>
              </div>
            </div>
          </div>

          {/* Video Section */}
          <video id="reels_video" loop muted>
            <source src="./components/assets/shortssection/videos" type="video/mp4" />
          </video>
        </section>

        {/* Footer Section */}
        <section id="ig_footer" className="justify-content-center align-self-center">
          <ul>
            <li>
              <i className="fa fa-home" aria-hidden="true"></i>
            </li>
            <li>
              <i className="fa fa-search" aria-hidden="true"></i>
            </li>
            <li>
              <i className="fa fa-video-camera" aria-hidden="true"></i>
            </li>
            <li>
              <i className="fa fa-heart-o" aria-hidden="true"></i>
            </li>
            <li>
              <img src="imgs/user.jpg" alt="Footer User" />
            </li>
          </ul>
        </section>
      </div>
    </div>
  );
};

export default ReelsPage;
