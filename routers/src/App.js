import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Error from './Components/Error'
import Navbar from "./Components/Navbar";
import Courses from "./Components/Courses";

function App() {
  return (
    <div>
      <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="courses" element={<Courses/>}>
              <Route path='java' element={<h1>JAVA</h1>}></Route>
              <Route path='mern' element={<h1>MERN</h1>}></Route>
              <Route path='python' element={<h1>PYTHON</h1>}></Route>
              <Route path='devops' element={<h1>DEVOPS</h1>}></Route>
          </Route>
          <Route path="*" element={<Error />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
