function Display({name,setName}){
return<>
<input type="text" onChange={(event)=>{
  setName(event.target.value);
}}/>
</>
}
export default Display;