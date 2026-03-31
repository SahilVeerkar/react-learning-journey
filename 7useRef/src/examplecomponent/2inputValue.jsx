import { useRef } from "react";

const Input=()=>{
  const nameRef=useRef(null);
  const nameClick=()=>{
    console.log(nameRef.current.value);
    
  }

return <>
<input type="text" placeholder="enter name" ref={nameRef} />
<button onClick={nameClick}>inputname console me dikhega</button>
</>
}
export default Input;