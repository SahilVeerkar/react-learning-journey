
import { useReducer } from "react"
const initialState={
count:0,
user:"sahil"
}

function reducer(state,action){
  if(action.type==="add"){

    return {
      ...state,
      count:state.count+1}
  }
  if(action.type==="change"){
    if(state.user==="sahil")
    return {
  ...state,
  user:"rahul"
    }
 
  else{
    return {
      ...state,
  user:"sahil"
    }
  }
  }
  return state;
}
function App() {
  const [state, dispatch] = useReducer(reducer,initialState);

  return (
    <>
        <h1>{state.count}</h1>
        <h2>{state.user}</h2>
        <button onClick={()=>{
          dispatch({
            type:"add"
          })
        }}>add</button>  
        <button onClick={()=>{
          dispatch({
            type:"change"
          })
        }}>change</button>
          </>
  )
}

export default App
