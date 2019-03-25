import React from 'react'

function AverageA1c (props) {
   const {blood} = props
   console.log(props)
    let total = blood.reduce (function(a, c){
        return a + c.a1C
      }, 0)
      let accuA1c = total/blood.length
      let avgA1c = 'A1c = ' + accuA1c.toFixed(1)
      
  return (
      <h1>
      {avgA1c}
      </h1>
  )
}

export default AverageA1c