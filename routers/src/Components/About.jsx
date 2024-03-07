import React from 'react'
import { Link } from 'react-router-dom'


const About = () => {
  return (
    <>
    <div
      style={{
        display: "grid",
        placeItems: "center"
      }}
    >
      <div>About</div>
      <div className="nav">
        <button className="button">
          <Link className="Link" to={"/"}>
            Home
          </Link>
        </button>
        <button className="button">
        <Link className="Link" to={"/contact"}>Contact</Link>
        </button>
      </div>
    </div>
  </>
  )
}

export default About