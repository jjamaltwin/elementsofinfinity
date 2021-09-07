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
        <Carousel.Item interval={1000}>
          <img className="d-block w-100" src="networking.jpg" alt="Eight" />
        </Carousel.Item>
        <Carousel.Item interval={1000}>
          <img className="d-block w-100" src="3Queens.jpg" alt="Nine" />
        </Carousel.Item>
        <Carousel.Item interval={1000}>
          <img className="d-block w-100" src="promote4.jpg" alt="Ten" />
        </Carousel.Item>
        <Carousel.Item interval={1000}>
          <img className="d-block w-100" src="promote5.jpg" alt="Eleven" />
        </Carousel.Item>
        <Carousel.Item interval={1000}>
          <img className="d-block w-100" src="selfgrowth.jpg" alt="Twelve" />
        </Carousel.Item>
        <Carousel.Item interval={1000}>
          <img className="d-block w-100" src="promote6.jpg" alt="Thirteen" />
        </Carousel.Item>
        <Carousel.Item interval={1000}>
          <img className="d-block w-100" src="promote7.jpg" alt="Fourteen" />
        </Carousel.Item>
        <Carousel.Item interval={1000}>
          <img className="d-block w-100" src="laughing.jpg" alt="Fifteen" />
        </Carousel.Item>
        <Carousel.Item interval={1000}>
          <img className="d-block w-100" src="promote8.jpg" alt="Sixteen" />
        </Carousel.Item>
        <Carousel.Item interval={1000}>
          <img className="d-block w-100" src="promote9.jpg" alt="Seventeen" />
        </Carousel.Item>
        
      </Carousel>
    </div>
  );
}
