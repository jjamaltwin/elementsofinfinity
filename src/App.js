import "./App.css";
import React from "react";
import { Route } from "react-router-dom";
import Home from "./components/Home";
import Contact from "./components/Contact";
import Events from "./components/Events";
import Purchase from "./components/Purchase";
import { Nav, Navbar, NavDropdown, Form, FormControl, Button } from 'react-bootstrap';
import Header from "./components/Header";
import NavBar from "./components/NavBar";



function App () {
  return (    
      
    <div className="App">
          <NavBar/>
         
          <Route exact path="/" component={Home} />
          <Route path="/Purchase" component={Purchase} />
          <Route path="/Contact" component={Contact} />
          <Route path="/Events" component={Events} />  
        </div>
      
      );  
      
    }
export default App;
