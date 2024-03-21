// eslint-disable-next-line no-unused-vars
import React from 'react'
import { TodoContext } from './Context/TodoContext'
import Navbar from './Components/Navbar'
import TodoMain from './Components/TodoMain'

function App() {
  return (
    <>
      <TodoContext>
        <Navbar/>
        <TodoMain/>
      </TodoContext>
    </>
  )
}

export default App