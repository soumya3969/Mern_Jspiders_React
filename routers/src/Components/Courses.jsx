import React from 'react'
import { Link,Outlet } from 'react-router-dom'
import '../CSS/Courses.css'
function Courses() {
  return (
    <>
    <div
      style={{
        display: "grid",
        placeItems: "center"
      }}
    >
      <div>&nbsp;</div>
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

      <div className="courses">
        <h1 style={{color:'#252525'}}>Welcome to courses Page</h1>
        <div className="main">
        <div className="links navbar course-links">
            <Link to={"java"} className='Link'><li>JAVA</li></Link>
            <Link to={"mern"} className='Link'><li>MERN</li></Link>
            <Link to={"python"} className='Link'><li>PYTHON</li></Link>
            <Link to={"devops"} className='Link'><li>DEVOPS</li></Link>
        </div>
        <div className="child">
            <Outlet></Outlet>
        </div>
        </div>
      </div>
    </div>
  </>
  )
}

export default Courses