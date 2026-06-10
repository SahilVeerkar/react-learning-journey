import { useState } from "react"

function App() {
 
const [showPassword,setShowPassword]=useState(false);



  

  return (
    <>
      <input type={showPassword?"text":"Password"} />
      <button onClick={()=>{
       setShowPassword(!showPassword);
      }
         
      }>{showPassword? "hide" :"show"}</button>
    </>
  )
}

export default App
