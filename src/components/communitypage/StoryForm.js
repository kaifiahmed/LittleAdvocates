import React, { useState } from "react";

const StoryForm = ({ onNewStory }) => {
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (message) {
      onNewStory({ message, upvotes: 0, downvotes: 0, comments: [], views: 0 });
      setMessage("");
    }
  };

  return (
    <div className="story-form">
      <h3>Share Your Story</h3>
      <form onSubmit={handleSubmit}>
        <textarea
          placeholder="Write your story..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
        />
        <button type="submit">Post Story</button>
      </form>
    </div>
  );
};

export default StoryForm;
