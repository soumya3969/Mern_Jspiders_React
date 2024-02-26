import React from 'react'

function Home(props) {
  return (
    <div>
        <h1>Function component</h1>
        {console.log(props)}
        {
          props.fruits.map((ele)=>{
            return(
              <li>{ele}</li>
            )
          })
        }
    </div>
  )
}

export default Home