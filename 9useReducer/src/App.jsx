import { useReducer } from "react"

const initialState=0;
  

  
  function reducer(state,action){
    if(action.type==="inc"){
      state=state+1;
      return state;
        }
    else{
      state=state-1;
      return state
    }
  }


function App() {
   const [count,dispatch]=useReducer(reducer,initialState);

  
 

  return (
    <>
      <h1>count:{count}</h1>
      <button onClick={()=>{
        dispatch({
          type:"inc"
        });
      }}>increment</button>
      <button onClick={()=>{
        dispatch({
          type:"dec"
        });
      }}>dec</button>
    </>
  )
}

export default App
