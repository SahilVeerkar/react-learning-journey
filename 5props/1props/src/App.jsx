
import PassingName from "./1props"
import Distructuring from "./2distructuring"
import Greeting from "./3test"
import Products from "./4product"
import Map from "./5mapprops"
import ChildrenProps from "./6childrenprops"
import Default from "./7defaultprops"
import Button from "./8passingfunction"

function App() {
    const products = [
    { id: 1, name: "Shoes", price: 1000 },
    { id: 2, name: "Watch", price: 2000 }
  ];

  return (
    <>
     <PassingName name="sahil"></PassingName>
     <PassingName name="ram"></PassingName>
     <PassingName name="shyam"></PassingName>
     <Distructuring name="dsahil"></Distructuring>
          <Distructuring name="dram"></Distructuring>
               <Distructuring name="dshyam"></Distructuring>
               <Greeting name="sahil"></Greeting>
               <Products name="nike" price="2000"></Products>
              {products.map((item)=>(
                <Map key={item.id} name={item.name} price={item.price}></Map>
              ))}
              <ChildrenProps><h1>hello</h1></ChildrenProps>
              <Default></Default>
              <Button handleClick={()=>(alert("clicked"))}></Button>
   </>
  )
}

export default App
