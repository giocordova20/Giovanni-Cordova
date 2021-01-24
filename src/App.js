// import logo from './logo.svg';
// import './App.css';

import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import About from "./pages/About";
import MyWork from "./pages/MyWork";
// import Navbar from "./components/Navbar";
// import Footer from "./components/Footer";
import Wrapper from "./components/Wrapper";


function App() {
  return (
    <Router>
      <div>
        {/* <Navbar /> */}
        <Wrapper>
          <Route exact path="/" component={About} />
          <Route exact path="/about" component={About} />
          {/* <Route exact path="/mywork" component={MyWork} /> */}
        </Wrapper>
        {/* <Footer /> */}
      </div>
    </Router>




    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  );
}

export default App;
