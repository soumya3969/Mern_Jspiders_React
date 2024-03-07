import React from "react";
import { Link,NavLink } from "react-router-dom";
import "./style.css";

function Home() {
  return (
    <>
      <div
        style={{
          display: "grid",
          placeItems: "center"
        }}
      >
        <div>Home</div>
        <div className="nav">
          <button className="button">
            <Link className="Link" to={"/about"}>
              About
            </Link>
          </button>
          <button className="button">
          <NavLink className="Link" activeStyle={{color:'white'}} to={"/contact"}>Contact</NavLink>
          </button>
        </div>
      </div>
    </>
  );
}

export default Home;
