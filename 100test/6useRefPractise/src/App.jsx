
import { useRef } from "react"
function App() {
  const countRef=useRef(0);
  return (
    <>
     <button onClick={()=>{
      countRef.current=countRef.current+1;
      console.log(countRef.current); 
     }}>increment</button> 
    </>
  )
}

export default App

// use ref value store kerta he 
// use ref value update bhi kerta he 
// but component re render nhi hota 
// na ui change hota he 
