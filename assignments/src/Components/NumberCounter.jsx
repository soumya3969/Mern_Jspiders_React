import React, { useState } from "react";
import './Styles/NumCounter.css'

const NumberCounter = () => {
  const [count, setCount] = useState(0);
  const [bgcolor, setBgColor] = useState("white");

  const increment = () => {
    setCount(count + 1);
    updateBg(count+1)
  };
  const decrement = () => {
    setCount(count - 1);
    updateBg(count-1)
  };
  const updateBg=(value)=>{
    console.log(value)
    if (value<0) {
        setBgColor('white')
    }else if (value>=0 && value<=5) {
        setBgColor('blue')
    } else if(value>=6&&value<10) {
        setBgColor('red')
    }else if (value>=10&&value<12) {
        setBgColor('green')
    }else{
        setBgColor('yellow')
    }
  }
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        margin: "2rem 0"
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          padding: "2rem",
          border: "2px solid #252525",
          borderRadius:'15px',
          gap: "20px",
          background: bgcolor,
        }}
      >
        <h1 style={{ color: "#252525" }}>DYNAMIC BG CHANGER</h1>
        <div
          style={{
            padding: "0.5rem",
            border: "3px solid #252525",
            borderRadius:'25px',
            width:'40%',
            textAlign:'center',
            color:'cyan',
            fontSize:'20px'
          }}
        >
          {count}

        </div>
          <button onClick={increment}> + </button>
          <button onClick={decrement}> - </button>
      </div>
    </div>
  );
};

export default NumberCounter;
