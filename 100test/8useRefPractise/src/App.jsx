
import { useRef } from "react"
function App() {
  const inputRef=useRef(null);
  const isPassword=useRef(true);
  const toggle=()=>{
    if(isPassword.current){
      inputRef.current.type="text";
      isPassword.current=false;
    }
    else{
      inputRef.current.type="password";
      isPassword.current=true;
    }
  }

  return (
    <>
     <input ref={inputRef} type="password"/>
     <button   onClick={toggle} >{isPassword.current?"show":"hide"}</button>
     
    </>
  )
}

export default App
