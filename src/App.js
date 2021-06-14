import "./App.css";
import { Image } from "react-bootstrap";
import React from "react";
import Carousel from "../src/components/Carousel";
import { CarouselData } from "./components/CarouselData";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons";






function App() {
  return (
    <div className="App">
      <div className="side-bar" opacity="1">
        <Image className="logo" src="dalelogo.png" alt="queen" opacity="1" />
        <p>
        Raising the vibration of love through the many elements of infinity.
        </p>
        <div className="fbwrap" class="text-center">
                <h1 class="text-center">Follow me on Facebook@ Infinite Credit Success</h1>
                <a class="text-center"
                  href="https://www.facebook.com/Infinite-Credit-Success-104857744780992"
                  className="facebook-social"
                >
                  <FontAwesomeIcon size="4x" opacity="1" icon={faFacebook} />
                </a>
              </div>
              <div className="instawrap" class="text-center">
                <h1 class="text-center">Follow me on Instagram@ Elements of Infinity</h1>
                <a class="text-center"
                  href="https://www.instagram.com/elementsofinfinity/"
                  className="instagram-social"
                >
                  <FontAwesomeIcon size="4x" opacity="1" icon={faInstagram} />
                </a>
              </div>
      </div>
      <div className="main">
        <div className="main-wrapper" opacity="1">
          <h1 text-align="center">Infinite Credit Success</h1>
          <Image className="firstpic" src="dale.png" alt="queen" opacity="1" />
          <p>
          Infinite Credit Success is dedicated to help as many families to
          become Financial Educated with Financial Literacy tools and Build
          Generational Wealth!
          </p>
        </div>
          <div className="services">
          {/* <a href="">
  <Image src="aj.jpg" className="githubIcon" />
</a> */}



          </div>
      <div className="carousel">
      <Carousel  slides={CarouselData}/>
      
      </div>
      </div>
    </div>
  );
}

export default App;
