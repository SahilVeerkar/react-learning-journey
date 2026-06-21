import { useEffect } from "react"


function App() {
  useEffect(()=>{
    const int=setInterval(()=>{
console.log("hello");
    },1000);
    
    return clearInterval(int);
        
  });

  return (
    <>
     <h1>hello</h1>;
    </>
  )
}

export default App
