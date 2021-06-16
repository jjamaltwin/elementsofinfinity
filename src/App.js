import "./App.css";
import { Image } from "react-bootstrap";
import React from "react";
import Carousel from "../src/components/Carousel";
import { CarouselData } from "./components/CarouselData";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons";

function App() {
  return (
    <div className="container-fluid">
      <div className="App">
        <div className="side-bar" opacity="1">
          <Image className="logo" src="dalelogo.png" alt="queen" opacity="1" />
          <p>
            Raising the vibration of love through the many elements of infinity.
          </p>
          <div className="fbwrap" class="text-center">
            <h1 id="social" class="text-center">
              Follow me on Facebook@ Infinite Credit Success
            </h1>
            <a
              class="text-center"
              href="https://www.facebook.com/Infinite-Credit-Success-104857744780992"
              className="facebook-social"
            >
              <FontAwesomeIcon size="4x" opacity="1" icon={faFacebook} />
            </a>
          </div>
          <div className="instawrap" class="text-center">
            <h1 id="social" class="text-center">
              Follow me on Instagram@ Elements of Infinity
            </h1>
            <a
              class="text-center"
              href="https://www.instagram.com/elementsofinfinity/"
              className="instagram-social"
            >
              <FontAwesomeIcon size="4x" opacity="1" icon={faInstagram} />
            </a>
          </div>
          <Image className="flyer" src="memflyer.jpg" alt="flyer" opacity="1" />
        </div>
        <div className="main">
          <h3>Elements Of Infinity</h3>
          <div className="main-wrapper" opacity="1">
            <h1 text-align="center">Infinite Credit Success</h1>
            <Image
              className="firstpic"
              src="dale.png"
              alt="queen"
              opacity="1"
            />
            <Image className="secpic" src="ics.jpg" alt="logo" opacity="1" />
            <Image
              className="thirdpic"
              src="travelpic.jpg"
              alt="logo"
              opacity="1"
            />
            <p>
              "Infinite Credit Success is dedicated to help as many families to
              become Financial Educated with Financial Literacy tools and Build
              Generational Wealth!''
            </p>
          </div>
          <div className="services">
            <h2>Travel with Infinity</h2>
            <p>
              "Whether planning a girls trip or baecation, my goal is to help
              you make memories of a lifetime. I am excited that you are ready
              for an infinite travel experience, where exploring the world is
              limitless"
            </p>
            <Image
              className="travel"
              src="travelpic.jpg"
              alt="beach"
              opacity="1"
            />
            <Image
              className="travellogo"
              src="travelpic2.jpg"
              alt="plane"
              opacity="1"
            />
            <a
              class="text-center"
              href="https://www.facebook.com/TravelwithInfinity"
              className="facebook-social"
            >
              <FontAwesomeIcon
                className="fb"
                size="3x"
                opacity="1"
                icon={faFacebook}
              />
            </a>
          </div>

          <div className="carousel">
            <h3> Satisfied Clients!!</h3>
            <Carousel slides={CarouselData} />
          </div>
          <h4>
            "Great book! very inspriational and makes you want to accomplish
            your dreams no matter how many times I may have failed." Michele
            Steffy, Dubuque, IA
          </h4>
        </div>
      </div>
    </div>
  );
}

export default App;
