import React,{ Component } from "react"

className Practise extends Component{
render(){
 const arr = [1, 2, 3, 4];
  return<>
  {arr.map((item,index)=>(
    <h1 key={index}>{item*2}</h1>
  ))}
  </>
}
}
export default Practise;