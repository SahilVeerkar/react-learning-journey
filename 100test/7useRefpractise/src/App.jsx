import { useRef } from "react"

function App() {
 const inputRef=useRef(null);
  return (
    <>
     <input ref={inputRef} type="text" ></input>
     <button onClick={()=>{
      inputRef.current.focus();
     }}>focus</button>
    </>
  )
}

export default App
