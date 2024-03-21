import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'

import Navbar from '../Components/Navbar'
import About from './About'
import Contact from './Contact'
import Profile from './Profile'

function Home() {
  return (
    <div>
        <BrowserRouter>
        <Navbar/>
        <Routes>
            <Route path='/' element={<Home/>}></Route>
            <Route path='/about' element={<About/>}></Route>
            <Route path='/contact' element={<Contact/>}></Route>
            <Route path='/profile' element={<Profile/>}></Route>
        </Routes>
        </BrowserRouter>
    </div>
  )
}

export default Home