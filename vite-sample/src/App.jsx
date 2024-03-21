import React from "react";
import Home from "./Pages/Home";
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Navbar from "./Components/Navbar";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Profile from "./Pages/Profile";
function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar/>
        <Routes>
            <Route path='/' element={<Home/>}></Route>
            <Route path='/about' element={<About/>}></Route>
            <Route path='/contact' element={<Contact/>}></Route>
            <Route path='/profile' element={<Profile/>}></Route>
        </Routes>
        </BrowserRouter>  
    </>
  );
}

export default App;
