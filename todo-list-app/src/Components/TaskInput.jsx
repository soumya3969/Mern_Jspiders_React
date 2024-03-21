// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";

function TaskInput({ dispatch }) {
  let [inputData, setInputData] = useState("");
  const addTask = () => {
    if (!inputData.trim()) {
      alert(" WRITE TASK BEFORE ADDING");
    } else {
      dispatch({ type: "add", payload: inputData.trim() });
      setInputData("");
    }
  };
  return (
    <>
      <div className="input">
        <input
          type="text"
          name="task"
          id="task"
          placeholder="Enter Your Task Here...."
          value={inputData}
          onChange={(e) => setInputData(e.target.value)}
        />
        <button onClick={addTask}>ADD TASK</button>
      </div>
    </>
  );
}

export default TaskInput;
