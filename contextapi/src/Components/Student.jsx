import React, { useReducer } from "react";
const countReducer = (state, action) => {
  switch (action.type) {
    case "inc":
      return state + action.payload;
    case "dec":
      return state - action.payload;
    // case "inc10":
    //   return state + 10;
    // case "dec10":
    //   return state - 10;

    default:
      return state;
  }
};

function Student() {
  const [count, dispatch] = useReducer(countReducer, 0);
  return (
    <>
      <div
        className="hero"
        style={{
          display: "grid",
          placeItems: "center",
          border: "2px solid #252525",
          borderRadius: "25px",
          padding: "2rem"
        }}
      >
        <div className="main" style={{
            display:'grid',
            placeItems:'center',
            border:'3px solid #252525',
            borderRadius:'25px',
            padding:'2rem',
        }}>
          <h1
            style={{
              color: "#252424"
            }}
          >
            {count}
          </h1>
          <div style={{
            display:'flex',
            gap:'3px'
          }}>
            <button onClick={() => dispatch({ type: "inc", payload: 1 })}>
              +1
            </button>
            <button onClick={() => dispatch({ type: "dec", payload: 1 })}>
              -1
            </button>
            <button onClick={() => dispatch({ type: "inc", payload: 10 })}>
              +10
            </button>
            <button onClick={() => dispatch({ type: "dec", payload: 10 })}>
              -10
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Student;
