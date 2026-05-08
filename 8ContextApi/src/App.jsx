import { createContext,useContext } from "react"
const userContext= createContext();
function Child(){
  const user = useContext(userContext);
  return<>
  <h1>hello {user}</h1>
  </>
}



function App() {
  const name = "sahil";

  return (
    <>
     <userContext.Provider value={name}>
        <Child/>
        {/* 3. Child ko props nhi bheje */}
     </userContext.Provider>
    </>
  )
}

export default App
