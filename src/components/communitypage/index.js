import React, { useState } from "react";
import NewsSlider from "../communitypage/NewsSlider";
import StoryForm from "../communitypage/StoryForm";
import StoryFeed from "../communitypage/StoryFeed";
import EventFeed from "../communitypage/EventFeed";
import "./style.css";

const CommunityPage = () => {
    const [stories, setStories] = useState([]);
    const [events] = useState([
      { title: "Hackathon 2024", description: "Join us for an exciting hackathon.", date: "Jan 20, 2024" },
      { title: "Cybersecurity Webinar", description: "Learn the latest in cybersecurity.", date: "Feb 15, 2024" },
      { title: "Tech Meetup", description: "Network with industry experts.", date: "Mar 10, 2024" },
    ]);
  
    const handleNewStory = (story) => {
      setStories((prevStories) => [...prevStories, story]);
    };
  
    const handleUpvote = (index) => {
      const updatedStories = [...stories];
      updatedStories[index].upvotes += 1;
      setStories(updatedStories);
    };
  
    const handleDownvote = (index) => {
      const updatedStories = [...stories];
      updatedStories[index].downvotes += 1;
      setStories(updatedStories);
    };
  
    return (
      <div className="community-page">
        <NewsSlider />
        <StoryForm onNewStory={handleNewStory} />
        <StoryFeed stories={stories} onUpvote={handleUpvote} onDownvote={handleDownvote} />
        <EventFeed events={events} />
      </div>
    );
  };
  
  export default CommunityPage;
