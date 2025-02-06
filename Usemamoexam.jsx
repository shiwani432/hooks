import React, { useState,useMemo } from 'react'


const Usemamoexam = () => {
    const [add,setadd] = useState(0)
    const [min,setmin] = useState(110)

    const multiplycation = useMemoy(function multiply(){
        console.log("====")
        return add*10;
    },[add])
       
   return (
    <div>
      <h1>use memo exampal</h1>
     <h4>multiply {multiplycation}</h4><br></br>
      <button onClick={()=>setadd(add+1)}>addition</button>
      <p>{add}</p>
      <button onClick={()=>setmin(min-1)}>substaction</button>
      <p>{min}</p>
    </div>
  )
}

export default Usemamoexam
