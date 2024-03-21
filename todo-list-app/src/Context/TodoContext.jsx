// eslint-disable-next-line no-unused-vars
import React,{createContext,useContext} from "react";
const todoContext = createContext()
 export function TodoContext (props) {
    const todo = ["WAKE UP EARLY","PRACTICE REACT EVERYDAY"]
    return(
        <todoContext.Provider value={todo}>
            {props.children}
        </todoContext.Provider>
    )
 }
 export const useTodo=()=>{
    return useContext(todoContext)
 }