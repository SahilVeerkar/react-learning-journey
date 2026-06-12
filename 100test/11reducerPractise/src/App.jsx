import { use, useReducer } from "react";
const initialState=10;
function reducer(state,action){
  if(action.type==="add"){
    return state+action.payload;
  }
  else{
    return state-action.payload;
  }
}

function App() {
 const [count,dispatch]=useReducer(reducer,initialState);

  return (
    <>
      <h1>{count}</h1>
      <button onClick={()=>{
dispatch({
  type:"add",
  payload:5
})
      }}
      >add</button>

      <button onClick={()=>{
dispatch({
  type:"sub",
  payload:5
})
      }}
      >sub</button>
    </>
  )
}

export default App
