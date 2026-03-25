import { useState } from "react";
function Incdec(){
  const [count,setCount]=useState(0);
  return(<>
  <h1>{count}</h1>
  <button onClick={()=>setCount(count+1)}>Increment</button>
  <button onClick={()=>setCount(count>0 ? count-1 : 0)}>Decrement</button>
  </>)
}
export default Incdec;