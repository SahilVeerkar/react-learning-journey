
import { useState } from "react";

function App() {
const product = [
  {id:1 , name:"shoes"},
  {id:2 , name:"watch"},
  {id:3 , name:"laptop"}

];
 const [search,setSearch]=useState("");
 

 const filterproduct= product.filter((item)=>item.name.toLocaleLowerCase().includes(search.toLocaleLowerCase()));

 
  return (
    <>
   <input type="text" placeholder="search product" onChange={(e)=>setSearch(e.target.value)} />
   
   {filterproduct.map((item)=>(
 <h1 key={item.id} >{item.name}</h1>
))}

   
          </>
  )
}

export default App;
