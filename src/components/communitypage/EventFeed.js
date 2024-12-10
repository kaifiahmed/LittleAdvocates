import React from "react";

const EventFeed = ({ events }) => {
  return (
    <div className="event-feed">
      <h3>Upcoming Events</h3>
      {events.map((event, index) => (
        <div key={index} className="event-item">
          <h4>{event.title}</h4>
          <p>{event.description}</p>
          <span>{event.date}</span>
        </div>
      ))}
    </div>
  );
};

export default EventFeed;
