import React from "react";
import Footer from "./Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons";


function Main() {
  return (

    <div className="mainfoot">

    <div className="container-main">
      <h1>Author Aminah Infinity</h1>
      <p>
        I Am a new Author of For The Love Or Money. Grateful for my creativity
        and happy I did heart work! Also checkout 333 Affirmations & Intentions
        Workbook. Books 3, and 4 are in the works!
      </p>

    </div>
    <div id="foot" className="container-footer">
      <h2>Contact</h2>

      <p>
        Cell Phone: (480) 490-8474
        <br />
      </p>
      <p>
        Email: aminahinfinityheals@gmail.com <br />
      </p>
      <br />

      <div className="social">
        <a
          class="text-center1"
          href="https://www.facebook.com/InfiniteManifestor"
          className="contact"
        >
          <FontAwesomeIcon
            className="fb"
            size="2x"
            opacity="1"
            color="black"
            icon={faFacebook}
          />
        </a>

        <a
          class="text-center"
          href="https://www.instagram.com/elementsofinfinity/"
          className="instagram-social"
        >
          <FontAwesomeIcon
            size="2x"
            color="black"
            opacity="1"
            icon={faInstagram}
          />
        </a>
      </div>
    </div>



    {/* <Footer/> */}
    </div>
  );
}

export default Main;
