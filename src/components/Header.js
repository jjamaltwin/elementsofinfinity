import React from 'react'
import { Image } from "react-bootstrap";
import NavBar from "../components/NavBar";


function Header
() {
  return (
    <div>
       <Image className="img-fluid"  src="ai.jpg" alt="Responsive image" width="95%" opacity="1" />
       {/* {NavBar} */}
    </div>
  )
}

export default Header
