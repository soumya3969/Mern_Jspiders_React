import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <div className="navbar">
        <div className="logo">
          <img src="#" alt="" className="logoImg" />
        </div>
        <div className="nav_links">
          <Link className="Link" to={"/home"}>
            <li>HOME</li>
          </Link>
          <Link className="Link" to={"/about"}>
            <li>ABOUT</li>
          </Link>
          <Link className="Link" to={'/contact'}>
            <li>CONTACT</li>
          </Link>
          <Link className="Link" to={'/profile'}><li>PROFILE</li></Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
