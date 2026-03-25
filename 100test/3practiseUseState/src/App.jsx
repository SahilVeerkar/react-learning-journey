import { useState } from 'react'

function App() {
  const people=[
    {id:1,name:"sahil",age:23},
    {id:2,name:"tanisha",age:20},
    {id:3,name:"rudraksh",age:15}
  ];
  const [search, setSearch] = useState("");

  const filtername=people.filter((item)=>item.name.toLocaleLowerCase().includes(search.toLocaleLowerCase()))

  return (
    <>
    <input type="text" placeholder='search name' onChange={(e)=>setSearch(e.target.value)}/>

    {filtername.map((item)=>(<h1 key={item.id}>{item.name} {item.age}</h1>))}
      
    </>
  )
}

export default App
