import React from "react";
import { Link } from "react-router-dom";
const Contact = () => {
  return (
    <>
    <div
      style={{
        display: "grid",
        placeItems: "center"
      }}
    >
      <div>Contact</div>
      <div className="nav">
        <button className="button">
          <Link className="Link" to={"/"}>
            Home
          </Link>
        </button>
        <button className="button">
        <Link className="Link" to={"/about"}>About</Link>
        </button>
      </div>
    </div>
  </>
  );
};

export default Contact;
