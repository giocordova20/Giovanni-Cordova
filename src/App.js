// import logo from './logo.svg';
// import './App.css';

import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import About from "./pages/About";
import MyWork from "./pages/MyWork";
// import Navbar from "./components/Navbar";
import Wrapper from "./components/Wrapper";

import MyWorkImage from "./assets/images/rva.jpg"
// import AboutImage from "./assets/images/rva2.jpg"


function App() {

  return (
    <Router>

      <div style={{backgroundImage: `url( ${MyWorkImage} )`, backgroundSize: "cover",
            position: "relative", height:"100vh", backgroundColor: "#101446"}}>

        {/* <Navbar /> */}
        <Wrapper>
          <Route exact path="/" component={About} />
          <Route exact path="/about" component={About} />
          {/* <Route exact path="/mywork" component={MyWork} /> */}
          <Route exact path="/mywork" component={MyWork} />
        </Wrapper>
        {/* <Footer /> */}
      </div>
    </Router>





  );
}

export default App;
