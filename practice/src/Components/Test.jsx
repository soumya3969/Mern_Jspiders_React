import React, { useRef } from "react";

function Test() {
  const countRef = useRef(0);
  const h2Ref = useRef();
  const handleClick = () => {
    console.log(countRef);
    countRef.current += 1;
    console.log(countRef);
    console.log(h2Ref);
    h2Ref.current.innerHTML = "welcome To React";
    h2Ref.current.style.backgroundColor = "red";
    h2Ref.current.style.color = "white";
  };
  return (
    <>
      <h1>{countRef.current}</h1>
      <button onClick={handleClick}>+</button>
      <h2 ref={h2Ref}>Hello World</h2>
    </>
  );
}

export default Test;
