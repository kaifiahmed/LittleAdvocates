import React from "react";

const StoryFeed = ({ stories, onUpvote, onDownvote }) => {
  return (
    <div className="story-feed">
      <h3>Community Stories</h3>
      {stories.map((story, index) => (
        <div key={index} className="story-item">
          <h4>{story.username}</h4>
          <p>{story.message}</p>
          <div className="story-actions">
            <button onClick={() => onUpvote(index)}>Upvote ({story.upvotes})</button>
            <button onClick={() => onDownvote(index)}>Downvote ({story.downvotes})</button>
            <span>Comments: {story.comments.length}</span>
            <span>Views: {story.views}</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default StoryFeed;
