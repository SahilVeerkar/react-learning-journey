
import Display from "./components/display"
import { useState } from "react"

function App() {
 const[name,setName]=useState("");
 

  return (
    <>
    <center>
     
     <Display name={name} setName={setName}></Display>
     <h1>{name}</h1>
     
     
    </center>
    </>
  )
}

export default App
