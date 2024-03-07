import React from 'react'
import { Link } from 'react-router-dom'
import '../CSS/Navbar.css'
function Navbar() {
  return (
    <>
        <div className="navbar">
            <div className="logo">
<img src="logo192.png" alt="logo" />
            </div>
            <div className="nav-links">
                <li><Link className="Link" to={"/"}>
            HOME
          </Link></li>
                <li><Link className="Link" to={"/about"}>
            ABOUT
          </Link></li>
                <li><Link className="Link" to={"/contact"}>
            CONTACT
          </Link></li>
                <li><Link className="Link" to={"/courses"}>
            COURSES
          </Link></li>
            </div>
            <div className="login">
            <button className="button">Login</button>
            </div>
        </div>
    </>
    )
}

export default Navbar