import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import Carousel from "react-bootstrap/Carousel";

export default function ImageSlider() {
  return (
    <div
      className="slider"
      style={{ display: "block", width: 500, padding: 30 }}
    >
      <h4>Happy Clients</h4>
      <Carousel>
        <Carousel.Item interval={1500}>
          <img className="d-block w-100" src="focus.jpg" alt="One" />
        </Carousel.Item>
        <Carousel.Item interval={1000}>
          <img className="d-block w-100" src="promote.jpg" alt="Two" />
        </Carousel.Item>
        <Carousel.Item interval={1000}>
          <img className="d-block w-100" src="promote2.jpg" alt="Three" />
        </Carousel.Item>
        <Carousel.Item interval={1000}>
          <img className="d-block w-100" src="promote3.jpg" alt="Four" />
        </Carousel.Item>
        <Carousel.Item interval={1000}>
          <img className="d-block w-100" src="lounging.jpg" alt="Five" />
        </Carousel.Item>
        <Carousel.Item interval={1000}>
          <img className="d-block w-100" src="happyclient.png" alt="Six" />
        </Carousel.Item>
        <Carousel.Item interval={1000}>
          <img className="d-block w-100" src="smiling2.jpg" alt="Seven" />
        </Carousel.Item>
      </Carousel>
    </div>
  );
}
