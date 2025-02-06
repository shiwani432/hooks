import React, { useEffect, useState } from 'react'

const LifecycleFunction = () => {
    const [color,setColor] = useState("pink")

    useEffect(()=>{
        setTimeout(()=>{
            setColor("red")
        },3000)
    })
  return (
    <div>
      <h1>useEfect function</h1>
       <h1>color is....{color}</h1>
    </div>
  )
}

export default LifecycleFunction
 