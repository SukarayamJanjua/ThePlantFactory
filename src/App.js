
import './App.css';
import Header from './Header';
import Features from './Features';
import Content from './Content';
import React from "react";
import About from './About';
import Footer from './Footer';
import LocationMap from './LocationMap'
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";


function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Features />
        {/* <Content /> */}
      
      <Routes>
        <Route path="/" element={<Content/>}/>
          
        <Route path="/about" element={<About />}/>
          
        <Route path='/location' element={< LocationMap />}/>     
      </Routes>
      <Footer/>
      </div>
    </Router>
  );
}

export default App;
