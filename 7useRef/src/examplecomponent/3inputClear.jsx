import { useRef } from "react";

const InputClear=()=>{
  const nameRef=useRef(null);
  const nameClick=()=>{
    console.log(nameRef.current.value);
    nameRef.current.value="";
    
  }

return <>
<input type="text" placeholder="enter name" ref={nameRef} />
<button onClick={nameClick}>inputname console me dikhega bakki sath me input feild bhi khali ho jayegi </button>
</>
}
export default InputClear;