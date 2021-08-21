import "./App.css";
import React from "react";
import { Route } from "react-router-dom";
import Contact from "./components/Contact";
import Events from "./components/Events";
import NavBar from "./components/NavBar";
import PayPal from "./components/PayPal";
import Main from "./components/Main";
import Reviews from "./components/Reviews";
import Bio from "./components/Bio";
import { MDBContainer } from 'mdb-react-ui-kit';

function App() {
  return (

    <>
    <MDBContainer fluid id="fluid">
    <div className="App">
      <NavBar />

      <Route exact path="/" component={Main} />
      <Route path="/purchase" component={PayPal} />
      <Route path="/Contact" component={Contact} />
      <Route path="/Events" component={Events} />
      <Route path="/Reviews" component={Reviews} />
      <Route path="/Bio" component={Bio} />
      {/* <PayPay/> */}
    </div>


    </MDBContainer>
  </>
  
  );
}
export default App;
