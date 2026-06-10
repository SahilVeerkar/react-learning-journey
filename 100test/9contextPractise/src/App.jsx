import { createContext } from "react";
import Home from "./Home";
export const userContext=createContext();

function App() {
  
  return (
    <>
    <userContext.Provider value="sahil">
      <Home></Home>
    </userContext.Provider>
      
    </>
  )
}

export default App
