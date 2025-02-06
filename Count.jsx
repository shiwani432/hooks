import { useRef, useState } from "react" 

const Count = () => {
    let [count, setCount] = useState(2);

    let a = useRef(10)

     let cont =()=>{
    setCount(count+1)
      console.log(count)
      a.current = a.current+1  
     }

     let conts =()=>{
      setCount(count-1)
        console.log(count)
        a.current = a.current-1  
       }

       let contsh =()=>{
        setCount(count*2)
          console.log(count)
          a.current = a.current*2  
         }

  return (
    <div>
      <h1>state component</h1>
      <h2>count..{count}</h2>
      <button onClick={cont}>Increment counter</button>
      <button onClick={conts}>decrement counter</button>
      <button onClick={contsh}>multiple counter</button><br></br><br></br>
      <br/><h1>useref Hooks </h1>
      <h1>  A is 10..{a.current}</h1>
    </div>
  )
}

export default Count
