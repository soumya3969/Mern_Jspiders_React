// eslint-disable-next-line no-unused-vars
import React,{ useState } from 'react'
import { Provider } from 'react-redux'
import {store} from './Redux/Store/store'
import Color from './Color'
import Child from './Child'


function App() {
  
  return (
    <>
        <Provider store={store}>
          <Child/>
          <Color/>
        </Provider>
    </>
  )
}

export default App
