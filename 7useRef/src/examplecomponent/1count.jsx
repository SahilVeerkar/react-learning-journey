import { useRef } from "react"
function Count(){
  const countRef=useRef(0);
const inc=()=>{
  countRef.current+=1;
  console.log(countRef.current);
}
return<>
<button onClick={inc}>click</button>
</>
}
export default Count;