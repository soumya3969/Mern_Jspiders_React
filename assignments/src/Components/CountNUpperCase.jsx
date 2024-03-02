import React,{useState} from "react";
import './Styles/BgcChanger.css'

function CountNUpperCase() {
    const [letterCount,setLetterCount]=useState(0);
    const [wordCount,setWordCount]=useState(0);
    const count=(e)=>{
        const text= e.target.value;
        setLetterCount(text.length);
        setWordCount(text.split(" ").length)
    }
    const convertUC=()=>{
        const input=document.getElementById('input').value;
        const uppercaseText=input.toUpperCase();
        document.getElementById('output').value=uppercaseText;
    }
  return (
    <div
      style={{
        display: "grid",
        placeItems: "center",
        marginTop: "1rem",
    }}
    >
      <h1>Word and Letter Counter</h1>
      <div className="container" style={{
          border:'2px solid #252525',
          borderRadius:'25px',
          padding:'1rem',
          background:'#FF3EA5'
      }}>
        <textarea name="input" id="input" cols="30" rows="3" onChange={count}></textarea>
        <ul
          style={{
            listStyle: "none"
          }}
        >
          <li>
            No of Word: <span>{wordCount}</span>
          </li>
          <li>
            No of Letters: <span>{letterCount}</span>
          </li>
          <li>
            <button className="btn" style={{marginTop:'5px'}} onClick={convertUC}>Convert To UpperCase</button>
          </li>
        </ul>
        <textarea name="input" id="output" cols="30" rows="3" readOnly ></textarea>
      </div>
    </div>
  );
}

export default CountNUpperCase;
