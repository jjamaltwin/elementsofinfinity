import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import { Image } from "react-bootstrap";


function Events() {
  return (
    <div className="event-wrap">
      <div className="container-events">
        <Header/>
      <h1>Upcoming Events</h1>
      <h2>Come join me!</h2>
      <Image
                  className="eventpic"
                  src="events.png"
                  alt="Responsive image"
                  width="900px"
                  opacity="1"
                ></Image>


        
    </div>

        <Footer/>
    </div>
  );
}

export default Events;