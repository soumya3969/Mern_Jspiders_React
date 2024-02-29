import React from "react";

const Test2 = (props) => {
  let num = 20;
  let flag = true;
  if (num>10) {
    return(
        <><h1>Num Is Greater</h1></>
    )
  }
  else if (num<10) {
    return(
        <><h1>Num is Smaller</h1></>
    )
  }
  else{
    return(
        <><h1>Num Is Equal</h1></>
    )
  }
};

export default Test2;
