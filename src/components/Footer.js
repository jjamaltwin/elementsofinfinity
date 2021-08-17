import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons";

function Footer() {
  return (
    <div className="container-footer">
      <h2>Contact</h2>
      
      <p>Cell Phone: (480) 490-8474<br /></p>
      <p>Email: aminahinfinityheals@gmail.com <br /></p>
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
          <FontAwesomeIcon size="2x" color="black" opacity="1" icon={faInstagram} />
        </a>
      </div>
    </div>
  );
}

export default Footer;
