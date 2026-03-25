import { useState } from "react";
function Reset(){
  const [count,setCount]=useState(0);
  return(<>
  <h1 style={{color:count<0 ? "red" : "black"}}>{count}</h1>
  <button onClick={()=>setCount(count+1)}>Increment</button>
  <button onClick={()=>setCount(0)}>Reset</button>
  <button onClick={()=>setCount(count-1)}>Decrement</button>
  </>)
}
export default Reset;