import { createContext } from "react"
import Home from "./Home";
import About from "./About";
export const UserContext = createContext();
function App() {
  

  return (
    <>
     <UserContext.Provider value="sahil">
       <Home></Home>
       <About></About>
     </UserContext.Provider>
    </>
  )
}

export default App
