import userContext from "./store/hello-context";

import Child from "./component/child";




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
