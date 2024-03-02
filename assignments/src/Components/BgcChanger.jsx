import React, { useState } from "react";
import "./Styles/BgcChanger.css";

function BgcChanger() {
    const [color, setColor] = useState("white");
  let randomBgc = () => {
    const red = Math.floor(Math.random() * 255);
    const green = Math.floor(Math.random() * 255);
    const blue = Math.floor(Math.random() * 255);
    const randomColor = "rgb(" + red + ", " + green + ", " + blue + ")";
    setColor(randomColor);
  };
  return (
    <div
      style={{
        display: "grid",
        placeItems: "center",
      }}
    >
      <h1 style={{ color: "#252424" }}>Random Color Generator</h1>
      <div
        style={{
          border: "2px solid #252525",
          padding: "5rem",
          borderRadius: "25px",
          background: color,
        }}
      >
        <button className="btn" onClick={randomBgc}>Click Here</button>
        <h2 style={{
            fontSize:'12px',
            color:'white',
        }}>{color}</h2>
      </div>
    </div>
  );
}

export default BgcChanger;
