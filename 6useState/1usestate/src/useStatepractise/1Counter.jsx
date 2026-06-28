import styles from "./1Counter.module.css"
import { useState } from "react";
function Counter(){
  const [count,setCount]=useState(0);
  return(<><div classNameName={styles["counter"]}>
      <h1>{count}</h1>
  <button onClick={()=>setCount(count+1)}>Click</button>
  </div>

  </>)
}
export default Counter;