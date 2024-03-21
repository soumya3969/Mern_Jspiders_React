// eslint-disable-next-line no-unused-vars
import React, { useReducer } from "react";
import TaskInput from "./TaskInput";
import TaskDisplay from "./TaskDisplay";
import { useTodo } from "../Context/TodoContext";
import { todoReducer } from "../Reducer/TodoReducers";

function TodoMain() {
  const data = useTodo();
  const [tasks, dispatch] = useReducer(todoReducer, data);
  return (
    <>
      <TaskInput dispatch={dispatch} />
      <TaskDisplay tasks={tasks} dispatch={dispatch} />
    </>
  );
}

export default TodoMain;
